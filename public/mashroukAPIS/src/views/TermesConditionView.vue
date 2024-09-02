<!-- eslint-disable max-len -->
<template>
  <SignUpHeader />
  <section class="adv-land">
    <div class="container">
      <div class="features">
        <h2>الشروط والأحكام وسياسة الخصوصية</h2>
        <div class="conditions-and-img">
          <div>
            <!-- first feature-->
            <div class="feature">
              <span>1-</span>
              <p>
                نحن نلتزم بحماية خصوصية زوارنا ومستخدمينا. نحن نجمع المعلومات الشخصية فقط بغرض تحسين تجربتهم وتقديم خدمات
                أفضل. نحن لا نقوم بمشاركة أو بيع المعلومات الشخصية لأطراف ثالثة.
              </p>
            </div>
            <div class="feature">
              <span>2-</span>
              <p>
                نحن نلتزم بتأمين المعلومات التي يقدمها مستخدمونا عبر الموقع. نحن نستخدم تقنيات حديثة لحماية البيانات
                وتأمينها من الوصول غير المصرح به. كما نحرص على إجراء التحديثات الدورية للحفاظ على أمان المعلومات.
              </p>
            </div>
            <!-- last feature-->
            <div class="feature">
              <span>3-</span>
              <p>
                نحن نلتزم بتوفير خدمة عالية الجودة وموثوقة للمستخدمين. نحن نعمل على تحسين الموقع وتطويره بشكل مستمر لضمان
                تلبية احتياجات المستخدمين. كما نسعى لتوفير تجربة مستخدم مريحة وسهلة الاستخدام.
              </p>
            </div>
            <!-- last feature-->
            <div class="feature">
              <span>4-</span>
              <p>
                نحن نلتزم بتوفير خدمة عالية الجودة وموثوقة للمستخدمين. نحن نعمل على تحسين الموقع وتطويره بشكل مستمر لضمان
                تلبية احتياجات المستخدمين. كما نسعى لتوفير تجربة مستخدم مريحة وسهلة الاستخدام.
              </p>
            </div>
            <!-- last feature-->
          </div>
          <!-- <div class="land-img"><img src="../assets/imgs/polci.svg"></div> -->
        </div>
         <router-link to="/signup" class="term-link i-read">بالمتابعة ف انا قرأت و &nbsp;أوافق على الشروط والأحكام </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import SignUpHeader from '@/components/SignUpHeader.vue';

export default {
  name: 'TermsCondtions',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    SignUpHeader,
  },
};
</script>
