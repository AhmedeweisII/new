<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/alt-text -->
<template>
  <body style="    min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-around;">

    <section class="back-head  m-t-20">
      <div class="container">
        <div>
          <Button @click="goBack" class="b-t"><img class="icone-resize" src="../../assets/imgs/right-arrow.png"></Button>
        </div>
        <div class="m-r-20">
          <h2>دفع رسوم الخدمة</h2>
        </div>
      </div>
    </section>

    <section class="warning">
      <div class="container">
        <div class="worny">
          <img src="../../assets/imgs/warning.png" class="warn-pic">
          <p class="warning-p">
            يرجي العلم ان تكلفة الخدمة (10 ريال سعودي) التي تدفعها مقابل فتح الدردشة فقط
            ونحن لسنا مسؤولين عن نجاح او فشل صفقات الشراكة
          </p>
        </div>
      </div>
    </section>

    <section class="">
      <div class="container">
        <!-- Static data for Apple Pay -->
        <label class="radio-container">
          <input type="radio" class="radio-input" name="paymethod" v-model="selectedPaymentOption" value="applePay">
          <img src="@/assets/imgs/apple-pay.png" alt="Option 1" class="radio-img">
          <span class="text">الدفع بواسطة(Apple pay)</span>
        </label>

        <!-- Static data for Mada -->
        <label class="radio-container">
          <input type="radio" class="radio-input" name="paymethod" v-model="selectedPaymentOption" value="Mada">
          <img src="@/assets/imgs/mada.png" alt="Option 3" class="radio-img">
          <span class="text"> مدي</span>
        </label>

        <!-- Static data for Credit Card -->
        <label class="radio-container">
          <input type="radio" class="radio-input" name="paymethod" v-model="selectedPaymentOption" value="creditCard">
          <img src="@/assets/imgs/credit-card.png" alt="Option 3" class="radio-img">
          <span class="text">بطاقة ائتمانية</span>
        </label>

        <!-- Checkbox for eWallet -->
        <label class="checkbox-container">
          <input type="checkbox" class="checkbox-input" v-model="useEwallet" @change="handleEwalletChange">
          <span class="text">استخدم المحفظة (30.0 رس)</span>
          <img src="@/assets/imgs/ewallet.png" alt="Option 4" class="radio-img">
        </label>
      </div>
    </section>

    <section class="pay-det">
      <div class="container">
        <div class="line" style="width: 100%; height:1px;"></div>
        <div class="full-money">
          <h2> المبلغ الاجمالي</h2>
          <div class="money-value">
            <h2>10.00</h2>
            <span>ريال</span>
          </div>
        </div>

        <div class="full-money">
          <h2 class="resize-phone"> المبلغ يشمل فتح الدردشة فقط ولا يمكن استرجاعه</h2>
        </div>

        <div class="Request-box"
          style="margin: 10px 0; display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start;">
          <div style="display: flex;  justify-content: flex-start;">
            <img src="../../assets/imgs/to-do-list.png" class="icone-resize" style="margin-left: 5px;" alt>
            <p class="Request-label" style="color: black;">رقم الطلب : </p>
            <p class="Request-num" style="color: black;">10009</p>
          </div>
          <div style="display: flex;  justify-content: flex-start;">
            <img src="../../assets/imgs/chat-box.png" class="icone-resize" style="margin-left: 5px;">
            <p class="Request-label" style="color: black;">رقم الدردشة : </p>
            <p class="Request-num" style="color: black;">10009</p>
          </div>

        </div>

        <a @click="handlePayment" class="mashrouk-btn main-req-button pay-btn">
          <h4>ادفع</h4>
        </a>

      </div>
    </section>
  </body>
</template>

<script>
export default {
  name: 'PaymentGetWays',
  data() {
    return {
      selectedPaymentOption: '',
      useEwallet: false,
    };
  },
  mounted() {
    this.handleEwalletChange();
  },
  methods: {
    handleEwalletChange() {
      // When the eWallet checkbox changes, unselect all radio buttons
      this.selectedPaymentOption = this.useEwallet ? '' : this.selectedPaymentOption;
    },
    goBack() {
      // Use Vue Router to go back
      this.$router.go(-1);
    },
  },
};
</script>

<style>
.radio-container {
  display: flex;
  align-items: center;
  border: solid #C0C8D0 2px;
  margin: 10px 0;
  border-radius: 12px;
}

.radio-input {
  margin-right: 10px;
  appearance: none;
  -webkit-appearance: none;
  border: 2px solid #2196F3;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  outline: none;
  margin-left: 5px;
}

.radio-input-active {
  border: 2px solid #2196F3;
}

.radio-input:checked {
  background-color: #2196F3;
}

.radio-img {
  width: 60px;
  margin-left: 10px;
}

.radio-img-alt {
  margin-left: 10px;
}

.text {
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
}

/* Style for the container of the checkbox, photo, and text */
.checkbox-container {
  display: flex;
  align-items: center;
  width: 100%;
}

/* Style for the checkbox input */
.checkbox-input {
  margin: 0 5px 0 10px;
  /* Adjust the spacing between the checkbox and photo/text */
  width: 25px;
  height: 25px;
}
</style>
