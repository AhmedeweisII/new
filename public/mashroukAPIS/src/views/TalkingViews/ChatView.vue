<!-- eslint-disable vuejs-accessibility/alt-text -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<!-- eslint-disable max-len -->
<template>
  <div>
    <section class="delete-head refixed">
      <div class="container">
        <router-link to="/Converztions"><img style="width: 30px" src="../../assets/imgs/right-arrow.png" alt=""></router-link>
        <div class="m-r-20 justfy-c">
          <h3 class="" style="font-size: 1.5em; color: #396FB5;">محادثة رقم {{conversation_id}}</h3>
        </div>
        <div style="position: relative;">
          <img @click="toggleHiddenDiv" src="../../assets/imgs/ellipsis.png" alt="Share" class="toggle-chat">
          <div v-if="isHidden" class="cheet">
            <div>
              <a href="converztions.html" class="hiddin-link"><img style="width: 30px" src="../../assets/imgs/flag.png"
                  alt="">ابلاغ</a>
            </div>
            <div>
              <a to="/Converztions" @click="leaveConversation()" class="hiddin-link"><img style="width: 30px" src="../../assets/imgs/logout.png" alt="">مغادرة</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ChatHeader />

    <section class="talker-body">
      <div class="container">

          <div class="message-holder">
              <div class="talker-img-div">
                  <img src="../../assets/imgs/robot.png" class="talker-img" width="50px">
              </div>
              <div class="talker-sec">
                  <div class="talker-info">
                      <h3 class="talker-name">النظام</h3>
                      <span class="message-time">11:30pm</span>
                  </div>
                  <div class="talker-message">
                      <p class="message" style="text-align: start;">
                          كل مشروك مبروك .. !
                          مبارك عليكم الشراكة
                          <br>
                          اذكركم اذا اتفقت الاراء يوجد لدينا قسم خاص
                          بالوسطاء العقاريين داخل الموقع
                          ل انهاء وتوثيق الشراكة
                          من خلال الرابط
                          <br>
                          <a href="main.html" style="font-weight: bold; font-size: 20px; color: #396FB5;">قسم الوسطاء العقاريين</a>
                      </p>

                  </div>
              </div>
          </div>

      </div>
  </section>

  <section class="talker-body">
    <div class="container" >

      <div  v-for="message in messages" :key="message.id" :class="{ 'message-holder': true, 'align-left': message.userid === Iduser, 'align-right': message.userid !== Iduser }">
        <div class="talker-img-div">
          <img :src="message?.userid === Iduser ? require('../../assets/imgs/profile.png') : require('../../assets/imgs/profil-pic.jpg')" class="talker-img icone-resize">
        </div>
        <div class="talker-sec" >
          <div class="talker-info"  :class="{ 'message-holder': true, 'align-left': message.userid === Iduser, 'align-right': message.userid !== Iduser }">
            <h3 class="talker-name">{{ message.username.replace(/"/g, '') }}</h3>
            <span class="message-time">{{ formatTime(message.created_at) }}</span>
          </div>
          <div class="talker-message" :class="{ 'message-holder': true, 'align-left': message.userid === Iduser, 'align-right': message.userid !== Iduser }">
            <p class="message" :style="getMessageStyles(message)">
              {{ message.content_text }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>

    <section class="bottom-chat">
      <div class="container">
        <button class="sent-icone" @click="addMessage" style="background-color:transparent;margin:0;">
          <img src="@/assets/imgs/communication.png" class="nav-bar-img active-bottom-link" alt="">
        </button>
        <div class="cell">
          <textarea v-model="content_text" name="email" class="auto-expand-textarea" placeholder="اكتب رسالتك هنا ..."></textarea>
          <label for="profile-image-input" class="file-input-label">
            <input id="profile-image-input" type="file" name="profile_image"> <!-- onchange="previewImage(this)" -->
          </label>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import ChatHeader from './ChatHeaderView.vue';

export default {
  data() {
    return {
      conversations: [],
      messages: [],
      conversation_id: null,
      content_text: '',
      user_name: '',
      Iduser: '',
      isHidden: false, // Initialize as visible
    };
  },
  created() {
    const { id } = this.$route.params;
    this.conversation_id = id;
    this.getAllMessages(id);
    this.getuserID();
  },
  methods: {
    getMessageStyles(message) {
      const maxWidth = 330; // set your preferred max width
      const contentLength = message.content_text.length;

      // Calculate font size based on content length and max width
      let fontSize = 18; // default font size
      if (contentLength > 50) {
        fontSize = 16; // decrease font size for longer content
      }

      // Calculate line height based on font size
      const lineHeight = Math.ceil(fontSize * 1.2);

      // Set max-width and other styles based on your requirements
      const styles = {
        'max-width': `${maxWidth}px`,
        'font-size': `${fontSize}px`,
        'line-height': `${lineHeight}px`,
        // Add more styles as needed
      };

      return styles;
    },
    async addMessage() {
      try {
        const conversationId = parseInt(this.conversation_id, 10);
        const response = await axios.post('http://localhost:3000/api/messages', {
          username: this.user_name,
          userid: this.Iduser,
          content_text: this.content_text,
          conversation_id: conversationId,
        });
        console.log('New message:', response.data.newMessage);
        this.content_text = '';
      } catch (error) {
        console.error('Error adding message to conversation:', error);
      }
    },
    async getAllMessages(conversationId) {
      try {
        const response = await axios.get(`http://localhost:3000/api/messages-and-conversation/${conversationId}`);
        this.messages = response.data.messagesByConversation;
        this.error = null;
      } catch (error) {
        console.error('Error fetching messages:', error);
        this.error = 'Error fetching messages. Please try again.';
      }
    },
    async getuserID() {
      const rawIduser = localStorage.getItem('userId');
      const username = localStorage.getItem('user');
      this.Iduser = rawIduser;
      this.user_name = username;
      console.log('Iduser:', this.Iduser);
    },
    async pollMessages() {
      try {
        const conversationId = parseInt(this.conversation_id, 10);
        const response = await axios.get(`http://localhost:3000/api/messages-and-conversation/${conversationId}`);
        this.messages = response.data.messagesByConversation;
        this.error = null;
      } catch (error) {
        console.error('Error fetching messages:', error);
        this.error = 'Error fetching messages. Please try again.';
      }
    },

    startPolling() {
      // Poll messages every 5 seconds (adjust the interval as needed)
      this.pollingInterval = setInterval(() => {
        this.pollMessages();
      }, 3000);
    },

    stopPolling() {
      clearInterval(this.pollingInterval);
    },
    formatTime(timestamp) {
      const options = { hour: 'numeric', minute: 'numeric', hour12: true };
      return new Date(timestamp).toLocaleTimeString('en-US', options);
    },
    toggleHiddenDiv() {
      this.isHidden = !this.isHidden; // Toggle the visibility
    },
    async leaveConversation() {
      try {
        // Make an API request to remove user from conversation
        const response = await axios.post('http://localhost:3000/api/remove-user-from-conversation', {
          conversationId: this.conversation_id,
          userId: this.Iduser,
        });

        // Check if the response status is 200 (OK)
        if (response.status === 200) {
          // Optionally, you can emit an event to notify the parent component about the update
          this.$emit('remove-user-from-conversation');

          // Redirect to /Converztions
          this.$router.push('/Converztions');

          // Optionally, you can also display a success message
          console.log('User removed from conversation successfully');
        } else {
          console.error('Failed to remove user from conversation. Status:', response.status);
          // Handle other status codes if needed
        }
      } catch (error) {
        console.error('Error removing user from conversation:', error);
        // Handle error and display an error message if needed
      }
    },
  },
  mounted() {
    this.getuserID();
    this.getAllMessages(this.conversation_id);
    this.startPolling(); // Start polling when component is mounted
  },
  beforeUnmount() {
    this.stopPolling(); // Stop polling when component is destroyed
  },
  components: {
    ChatHeader,
  },
};
</script>

<style scoped>
/* ... your existing styles ... */
.talker-message {
  padding: 10px;
  border-radius: 12px;
  width: fit-content; /* Allow the message to grow dynamically */
  word-wrap: break-word;
  margin-bottom: 10px;
}

/* ... your existing styles ... */
</style>
