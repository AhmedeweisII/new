<template>
  <body>
    <LogInHeader/>
    <FilterSearch />
    <MainRequests />
    <bottom-nav />
  </body>
</template>

<script>
import LogInHeader from '@/components/LogInHeader.vue';
import BottomNav from '@/components/BottomNav.vue';
import FilterSearch from '@/components/MainComponents/FilterSearch.vue';
import MainRequests from '@/views/Requests/RequestsmainView.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'main',
  // methods: {
  //   async Update() {
  //     if (!this.age || !this.email || !this.id || !this.name || !this.password) {
  //       swal('Please fill the empty field', '', 'error');
  //       return;
  //     }
  //     const user = {
  //       age: this.age,
  //       email: this.email,
  //       id: this.id,
  //       name: this.name,
  //       password: this.password,
  //     };
  //     try {
  //       const response = await axios.put(`http://localhost:8888/user/updateUser?currentUserId=${this.id}`, user);
  //       if (response.status === 200) {
  //         swal('Successfuly updated', '', 'success');
  //         localStorage.removeItem('user-info');
  //         try {
  //           const result = await axios.get(`http://localhost:8888/user/viewProfile?currentUserId=${this.id}&id=${this.id}`);
  //           if (result.status === 200) {
  //             localStorage.setItem('user-info', JSON.stringify(result.data.body));
  //           }
  //         } catch (errors) {
  //           console.log(errors);
  //         }
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       swal('email is not unique', '', 'error');
  //     }
  //     this.getHestory();
  //     this.isDisabled = true;
  //   },
  //   async UserSignOut() {
  //     const usr = localStorage.getItem('user-info');
  //     // eslint-disable-next-line prefer-destructuring
  //     const id = JSON.parse(usr).id;
  //     try {
  //       const result = await axios.get(`http://localhost:8888/auth/logout?currentUserId=${id}`);
  //       if (result.status === 200) {
  //         swal('Logout', 'thanks for visting our paltform', 'info');
  //         localStorage.clear();
  //         this.$router.push({ name: 'Login' });
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   },
  //   enableInputs() {
  //     this.isDisabled = false;
  //     swal('can you type Now', '', 'info');
  //   },
  //   async getHestory() {
  //     const usr = localStorage.getItem('user-info');
  //     // eslint-disable-next-line prefer-destructuring
  //     const id = JSON.parse(usr).id;
  //     const result = await axios.get(`http://localhost:8888/history/viewHistory?currentUserId=${id}`);
  //     if (result.status === 200) {
  //       const hst = result.data.body;
  //       this.History = hst.filter((item) => item.action !== 'viewHistory');
  //     }
  //   },
  //   Time(timestamp) {
  //     const dateObject = new Date(timestamp);
  //     const timeString = dateObject.toLocaleTimeString();
  //     return timeString;
  //   },
  //   convertTimestampToFormalDate(timestamp) {
  //     const dateObj = new Date(timestamp);
  //     const optionsDate = {
  //       year: 'numeric',
  //       month: '2-digit',
  //       day: '2-digit',
  //       timeZone: 'UTC',
  //     };
  //     const formattedDate = dateObj.toLocaleDateString('en-US', optionsDate);
  //     return formattedDate;
  //   },
  //   async deleteAcrivity(activityId) {
  //     const result = await axios.delete(`http://localhost:8888/history/deleteHistory?historyId=${activityId}`);
  //     if (result.status === 200) {
  //       this.getHestory();
  //     }
  //   },
  // },
  components: {
    LogInHeader,
    BottomNav,
    FilterSearch,
    MainRequests,
  },
};
</script>
