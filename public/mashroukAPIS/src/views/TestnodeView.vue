<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div>
    <h2>Add Conversation</h2>
    <form @submit.prevent="addConversation" class="flex">
      <label for="post_id">Post ID:</label>
      <input type="text" v-model="post_id" required />

      <button type="submit">Add Conversation</button>
    </form>

    <h2>Conversation By Post ID</h2>

    <label for="postId">Enter Post ID:</label>
    <input v-model="postId" type="text" id="postId" />
    <button @click="fetchConversations">Get Conversations</button>

    <div v-if="responseData">
      <h2>Response:</h2>
      <pre>{{ responseData }}</pre>

      <h2>Extracted ID:</h2>
      <p>{{ extractedId }}</p>
    </div>

    <h2>Add User to Conversation</h2>
    <form @submit.prevent="addUserToConversation" class="flex">

      <label for="user_id">User ID:</label>
      <input type="text" v-model="user_id" required />

      <label for="user_name">User Name:</label>
      <input type="text" v-model="user_name" required />

      <button type="submit">Add User to Conversation</button>
    </form>

    <div class="flex">
      <label for="username">Username:</label>
      <input v-model="username" type="text" id="username" />

      <label for="user_id">User ID:</label>
      <input v-model="user_id" type="text" id="user_id" />

      <label for="content_text">Content Text:</label>
      <textarea v-model="content_text" id="content_text"></textarea>

      <label for="conversation_id">Conversation ID:</label>
      <input v-model="conversation_id" type="text" id="conversation_id" />

      <button @click="addMessage">Send Message</button>
    </div>

    <div>
      <h2>Messages by Conversation</h2>
      <div v-if="conversationDetails">
        <p>Conversation ID: {{ conversationDetails.id }}</p>
        <!-- Display other conversation details as needed -->
      </div>
      <ul>
        <li v-for="message in messagesByConversation" :key="message.id">
          <strong>{{ message.UserName }}</strong>: {{ message.ContentText }}
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      post_id: '',
      conversation_id: '',
      user_id: 'we-12',
      user_name: 'wesso',
      conversation: [],
      currentconversation: null,
      postId: '',
      responseData: null,
      extractedId: null,
      content_text: '',
      messagesByConversation: [],
      conversationDetails: null,
    };
  },
  mounted() {
    // Fetch messages by conversation when the component is mounted
    this.fetchMessagesAndConversation();
  },
  methods: {
    async addConversation() {
      try {
        // Make an API request to add conversation
        await axios.post('http://localhost:3000/api/conversations', {
          post_id: this.post_id,
        });

        // Clear form field after successfully adding conversation
        this.post_id = '';

        // Optionally, you can emit an event to notify the parent component about the update
        this.$emit('conversationAdded');

        // Optionally, you can also redirect to another route or display a success message
      } catch (error) {
        console.error('Error adding conversation:', error);
        // Handle error and display an error message if needed
      }
    },
    async fetchConversations() {
      try {
        const response = await fetch(`http://localhost:3000/api/conversations-by-post/${this.postId}`);
        const data = await response.json();

        // Assuming the API response has a "data" field
        this.responseData = data.data;

        // Extracting ID from the first object in the "data" array (adjust as needed)
        this.extractedId = this.responseData.length > 0 ? this.responseData[0].id : null;
      } catch (error) {
        console.error('Error fetching conversations:', error);
        this.responseData = null; // Reset responseData in case of an error
        this.extractedId = null; // Reset extractedId in case of an error
      }
    },
    async addUserToConversation() {
      try {
        // Make an API request to add user to conversation
        await axios.post('http://localhost:3000/api/add-user-to-conversation', {
          conversationId: this.extractedId,
          userId: this.user_id,
          userName: this.user_name,
        });

        // Clear form fields after successfully adding user to conversation
        this.conversation_id = '';
        this.user_id = '';
        this.user_name = '';

        // Optionally, you can emit an event to notify the parent component about the update
        this.$emit('userAddedToConversation');

        // Optionally, you can also redirect to another route or display a success message
      } catch (error) {
        console.error('Error adding user to conversation:', error);
        // Handle error and display an error message if needed
      }
    },
    async addMessage() {
      try {
        // Make an API request to add a message to the conversation
        const response = await axios.post('http://localhost:3000/api/messages', {
          username: this.username,
          userid: this.user_id,
          content_text: this.content_text,
          conversation_id: this.conversation_id,
        });

        // Handle the response as needed
        console.log('New message:', response.data.newMessage);

        // Optionally, you can emit an event, redirect, or show a success message
      } catch (error) {
        console.error('Error adding message to conversation:', error);
        // Handle error and display an error message if needed
      }
    },
    async fetchMessagesAndConversation() {
      try {
        // Replace 'CONVERSATION_ID' with the actual conversation ID
        const response = await axios.get('http://localhost:3000/api/messages-and-conversation/1');
        this.messagesByConversation = response.data.messagesByConversation;
        this.conversationDetails = response.data.conversationDetails;
      } catch (error) {
        console.error('Error fetching messages and conversation details by conversation:', error);
        // Handle error and display an error message if needed
      }
    },
  },
};
</script>

<style scoped>
.flex {
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
