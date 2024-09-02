<!-- eslint-disable max-len -->
<template>
  <div>
    <LogInHeader />
    <FilterSearch />
    <section class="Speach">
      <div class="container">
        <div class="Frame5">
          <div class="Card" v-if="conversations.length">
            <router-link
              v-for="conversation in conversations"
              :key="conversation.id"
              :to="{ name: 'Chat', params: { id: conversation.id } }"
              class="Listitem"
            >
              <div class="container-msg">
                <div class="Newmessage">
                  <div class="Badge">
                    <div class="Text">1</div>
                  </div>
                  <div class="Label">
                    <div class="message-time">{{ formatTime(getLastMessageTime(conversation.id)) }}</div>
                  </div>
                </div>
                <div class="LeftContent">
                  <div class="Avatar">
                    <img class="Avatar" src="@/assets/imgs/Avatar.png" alt="" />
                  </div>
                  <div class="ListitemText">
                    <div class="con-head">فلة للبيع دورين مفصولة (رقم العرض 10009)</div>
                    <div class="con-head">{{ conversation.title }}</div>
                    <div class="massage-short">{{ shortenMessage(getLastMessageText(conversation.id)) }}</div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <bottom-nav />
  </div>
</template>

<script>
import LogInHeader from '@/components/LogInHeader.vue';
import BottomNav from '@/components/BottomNav.vue';
import FilterSearch from '@/components/MainComponents/FilterSearch.vue';
import axios from 'axios';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Converztions',
  data() {
    return {
      Iduser: '',
      conversations: [],
      error: null,
      messages: [],
      conversation_id: null,
      content_text: '',
      user_name: '',
      pollingInterval: null,
      pollingCounter: 0,
    };
  },
  created() {
    const { id } = this.$route.params;
    this.conversation_id = id;
    this.getAllMessages(id);
    this.getuserID();
  },
  methods: {
    getLastMessageText(conversationId) {
      const messagesForConversation = this.messages.filter(
        (message) => message.conversation_id === conversationId,
      );

      if (messagesForConversation.length > 0) {
        return messagesForConversation[messagesForConversation.length - 1].content_text;
      }

      return '';
    },
    shortenMessage(message) {
      // Display only the first 50 characters
      return message.slice(0, 35);
    },
    getLastMessageTime(conversationId) {
      const messagesForConversation = this.messages.filter(
        (message) => message.conversation_id === conversationId,
      );

      if (messagesForConversation.length > 0) {
        return messagesForConversation[messagesForConversation.length - 1].created_at;
      }

      return '';
    },
    async getuserID() {
      const rawIduser = localStorage.getItem('userId');
      this.Iduser = rawIduser;
      console.log('Iduser:', this.Iduser);
    },
    async getConversations() {
      try {
        const response = await axios.get(`http://localhost:3000/api/conversations-by-user/${this.Iduser}`);
        const previousConversations = this.conversations.slice(); // Create a shallow copy

        this.conversations = response.data.data;
        await Promise.all(
          this.conversations.map((conversation) => this.getAllMessages(conversation.id)),
        );

        // Check for new messages in existing conversations
        const newMessagesCount = this.conversations.reduce((count, conversation) => {
          // eslint-disable-next-line max-len
          const previousConversation = previousConversations.find((prevConv) => prevConv.id === conversation.id);
          // eslint-disable-next-line max-len
          if (previousConversation && previousConversation.messages.length < conversation.messages.length) {
            return count + (conversation.messages.length - previousConversation.messages.length);
          }
          return count;
        }, 0);

        if (newMessagesCount > 0) {
          this.pollingCounter += newMessagesCount;
        }

        this.error = null;
      } catch (error) {
        console.error('Error fetching conversations by user:', error);
        this.error = 'Error fetching conversations. Please try again.';
      }
    },
    async getAllMessages(conversationId) {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/messages-and-conversation/${Number(conversationId)}`,
        );

        // Append the new messages to the existing messages
        this.messages = [...this.messages, ...response.data.messagesByConversation];

        this.error = null;
      } catch (error) {
        console.error('Error fetching messages:', error);
        this.error = 'Error fetching messages. Please try again.';
      }
    },
    async startPolling() {
      this.pollingInterval = setInterval(async () => {
        await this.getConversations();
      }, 3000);
    },
    stopPolling() {
      clearInterval(this.pollingInterval);
    },
    formatTime(timestamp) {
      const options = { hour: 'numeric', minute: 'numeric', hour12: true };
      return new Date(timestamp).toLocaleTimeString('en-US', options);
    },
  },
  mounted() {
    this.getuserID();
    this.getConversations();
    this.startPolling();
  },
  beforeUnmount() {
    this.stopPolling();
  },
  computed: {
    lastMessage() {
      return this.messages.length > 0 ? this.messages[this.messages.length - 1] : {};
    },
  },
  components: {
    LogInHeader,
    BottomNav,
    FilterSearch,
  },
};
</script>
