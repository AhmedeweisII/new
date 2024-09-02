<template>
  <!-- Display requests -->
  <div v-for="request in requests" :key="request.requestId">
    <p>
      Request ID: {{ request.requestid }}
      <br />
      Status: {{ request.status }}
      <br />
      Accept: {{ request.accept }}
      <br />
      <!-- Add a button to accept the request -->
      <button @click="acceptRequest(request.requestid)">Accept Request</button>
    </p>
    <hr />
  </div>
</template>

<script>
import axios from 'axios';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'testnodetwo',
  data() {
    return {
      requests: [],
      postId: '456',
    };
  },
  methods: {
    getRequestsByPost() {
      axios.get(`http://localhost:3000/api/requests-by-post/${this.postId}`)
        .then((response) => {
          this.requests = response.data.requestsByPost;
        })
        .catch((error) => {
          // Handle errors
          console.error(error);
        });
    },
    acceptRequest(requestId) {
      // Make sure 'requestId' is a valid value
      if (requestId) {
        // Call the API to accept the request
        axios.post(`http://localhost:3000/api/accept-request/${requestId}`)
          .then((response) => {
            // Handle the response, update the UI, etc.
            console.log(response.data);
          })
          .catch((error) => {
            // Handle errors
            console.error(error);
          });
      } else {
        console.error('Invalid requestId');
      }
    },
  },
  created() {
    // Fetch requests when the component is created
    this.getRequestsByPost();
  },
};
</script>
