<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="reset-bodbod">
    <section class="back-head m-t-20 share-types pass-reset-back">
      <div class="container">
        <div class="back-flex">
          <div>
            <Button @click="goBack" class="b-t"><img style="width: 30px" src="../../assets/imgs/right-arrow.png" alt=""></Button>
          </div>
          <div class="m-r-20">
            <h3>اعادة تعيين كلمة المرور</h3>
          </div>
        </div>
      </div>
    </section>

    <div class="main-content reset-bod">
      <h2>اعادة تعيين كلمة المرور </h2>
      <p v-if="onetime">من فضلك ادخل بريدك الالكتروني:</p>
      <input v-if="onetime" v-model="email" type="email" class="email special" placeholder="البريد الالكتروني" required>
      <button v-if="onetime" class="submit-btn buttons" @click="sendCode">ارسال</button>

      <!-- Box to enter the received code -->
      <div v-if="codeSent" class="code-box">
        <p class="note">لقد قمنا بإرسال كلمة المرور الى بريدك الالكتروني <span class="c-m">{{ email }}</span>
          الرجاء قم بإدخال كلمة المرور الحالية لإعادة تعيين كلمة المرور</p>
        <button class="resend-btn" @click="resendCode"> أعد الارسال {{resendSeconds}}</button>
        <input v-model="currentPassword" type="password" class="code special" placeholder="كلمة المرور الحالية">
        <button class="verify-btn buttons" @click="verifyCode">التحقق من كلمة المرور</button>
      </div>

      <!-- Box to enter a new password -->
      <div v-if="!codeSent && passwordReset" class="new-password-box">
        <p>ادخل كلمة المرور الجديدة:</p>
        <input v-model="newPassword" type="password" class="new-password special" required>
        <p>تأكيد كلمة المرور الجديدة:</p>
        <input v-model="confirmPassword" type="password" class="confirm-password special" required>
        <button class="save-btn buttons" @click="savePassword">حفظ </button>
      </div>
      <p class="status-message">{{ statusMessage }}</p>
      <button class="login-btn buttons" v-if="showbutton" @click="gologin">العودة لتسجيل الدخول</button>

    </div>
  </div>
</template>

<script>

export default {
  name: 'ForgetPassword',
  data() {
    return {
      email: '',
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      codeSent: false,
      passwordReset: false,
      statusMessage: '',
      resendTimer: null,
      resendSeconds: 30,
      onetime: true,
      showbutton: false,
    };
  },
  methods: {
    sendCode() {
      // For demonstration purposes, we'll just simulate the code sending process.
      console.log(`Sending code to ${this.email}...`);
      this.codeSent = true;
      this.onetime = false;

      // Show the code input box
      this.statusMessage = 'تم ارسال كلمة المرور تفقد البريد';
      this.startResendTimer();
    },
    startResendTimer() {
      this.resendTimer = setInterval(() => {
        // eslint-disable-next-line no-plusplus
        this.resendSeconds--;
        if (this.resendSeconds === 0) {
          clearInterval(this.resendTimer);
        }
      }, 1000);
    },
    resendCode() {
      if (!this.codeSent) return;
      // Here you would resend the code using a backend service (not implemented here).
      // For demonstration purposes, we'll just simulate the code resending process.
      console.log('Resending code...');
      this.statusMessage = 'Code resent! Check your email.';
      this.startResendTimer();
    },
    verifyCode() {
      // Simply show the "Code verified!" message without checking for a 6-digit code.
      this.passwordReset = true;
      this.codeSent = false;
      this.statusMessage = 'تم التأكيد';
    },
    savePassword() {
      // Here you would save the new password using a backend service (not implemented here).
      // For demonstration purposes, we'll just simulate the password saving process.
      if (this.newPassword === this.confirmPassword) {
        // Passwords match, and the new password can be saved.
        this.passwordReset = false;
        this.statusMessage = 'تم اعادة تعيين كلمة المرور بنجاح';
        this.showbutton = true;
      } else {
        this.statusMessage = 'كلمة المرور غير متطابقة';
      }
    },
    gologin() {
      this.$router.push('/login');
    },
    goBack() {
      // Use Vue Router to go back
      this.$router.go(-1);
    },
  },
};
</script>
