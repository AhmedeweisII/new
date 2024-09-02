<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <!--  -->
  <FormBack />
  <!--  -->
  <!--  -->
  <h1 style="text-align: center;">
    نموذج طلب شريك
  </h1>
  <section>
    <div class="container">
      <h2>نوع الشريك</h2>
      <form class="roleForm">
        <label class="radio-lab">
          <input type="radio" class="radio-circle" v-model="partner_type" value="0">
          عقاري
        </label>
        <label class="radio-lab">
          <input type="radio" class="radio-circle" v-model="partner_type" value="1">
          تجاري
        </label>
      </form>
    </div>
  </section>
  <!--  -->
  <!--  -->
  <section v-if="partner_type === '0'">
    <div class="container">
      <h2>غرض الشراكة</h2>
      <form class="roleForm">
        <label class="radio-lab">
          <input type="radio" class="radio-circle" v-model="purpose" value="0">
          استثمار
        </label>
        <label class="radio-lab">
          <input type="radio" name="role" class="radio-circle" v-model="purpose" value="1">
          تملك
        </label>
      </form>
    </div>

    <section>
      <div class="container">
        <form class="property-form roleForm" v-if="purpose === '0'">
          <h2> اختر نوع العقار </h2>
          <label class="radio-lab">
            <input type="radio" name="investment-Type" value="land" class="radio-circle" v-model="property_type_help">
            أرض
          </label>
          <label class="radio-lab">
            <input type="radio" name="investment-Type" value="building" class="radio-circle" v-model="property_type_help">
            عمارة
          </label>
          <form class="property-form roleForm">
            <h2>لديك عقار ؟</h2>
            <label class="radio-lab">
              <input type="radio" name="aqar-type" value="1" class="radio-circle" v-model="have_property">
              نعم
            </label>
            <label class="radio-lab">
              <input type="radio" name="aqar-type" value="0" class="radio-circle" v-model="have_property">
              لا
            </label>
          </form>
        </form>
        <form class="property-form roleForm" v-if="purpose === '1'">
          <h2> اختر نوع العقار </h2>
          <label class="radio-lab">
            <input type="radio" name="Own-Type" value="land" class="radio-circle" v-model="property_type_help">
            أرض قابلة للتجزئة
          </label>
          <label class="radio-lab">
            <input type="radio" name="Own-Type" value="villa" class="radio-circle" v-model="property_type_help">
            فيلا (وحدات مفرزة )
          </label>
          <label class="radio-lab">
            <input type="radio" name="Own-Type" value="building" class="radio-circle" v-model="property_type_help">
            عمارة شقق مفرزة
          </label>
          <form class="property-form roleForm">
            <h2>لديك عقار ؟</h2>
            <label class="radio-lab">
              <input type="radio" name="aqar-type" value="1" class="radio-circle" v-model="have_property">
              نعم
            </label>
            <label class="radio-lab">
              <input type="radio" name="aqar-type" value="0" class="radio-circle" v-model="have_property">
              لا
            </label>
          </form>
        </form>
      </div>
    </section>
    <!--  -->
    <!--  -->
    <section v-if="RenderNo()">
      <div class="container">
        <div class="dropdown">
          <label class="cell-label">اختر المدينة *</label>
          <select class="dropdown-select" v-model="city_id" @change="updateNeighborhoods">
            <option disabled selected value="0">اختر المدينة *</option>
            <option v-for="city in cities" :value="city.city_id" :key="city.city_id">{{ city.name_ar }}</option>
          </select>
        </div>

        <div class="dropdown">
          <label class="cell-label">اختر الأحياء *</label>
          <details>
            <summary>اختر الأحياء</summary>
            <form style="padding: 0px 0px 8px 8px;" class="summry-form">
              <label v-for="neighborhood in filteredNeighborhoods" :key="neighborhood.district_id">
                <input type="checkbox" v-model="selectedNeighborhoods" :value="neighborhood.name_ar" class="summry-input">
                {{ neighborhood.name_ar }}
              </label><br>
              <label>
                <input type="checkbox" value="otherNeighborhood" class="summry-input" v-model="empaty">
                احياء اخري
              </label><br>
            </form>
          </details>
        </div>

        <div class="cell" v-if="showOtherNeighborhoodInput()">
          <div class="cell-label absolut">
            <span class="cell-name"> اكتب اسم الاحياء </span>
            <div class="star"></div>
          </div>
          <input type="text" class="cell-entery place-tiny" placeholder="اكتب اسم الاحياء" v-model="Empaty">
        </div>

        <div class="cell">
          <div class="cell-label absolut">
            <span class="cell-name"> المساحة بالمتر المربع </span>
            <div class="star"></div>
          </div>
          <input type="text" class="cell-entery place-tiny" placeholder="المساحة بالمتر المربع" v-model="property_area">
        </div>

        <h2 style="margin: 0; margin-bottom:5px;">الواجهة</h2>
        <form class="cheky form-flex">
          <div class="form-div">
            <input type="checkbox" class="chek" value="شمال" v-model="directions">
            <p class="acceptt"> شمال</p>
          </div>

          <div class="form-div">
            <input type="checkbox" class="chek" value="شرق" v-model="directions">
            <p class="acceptt"> شرق</p>
          </div>

          <div class="form-div">
            <input type="checkbox" class="chek" value="جنوب" v-model="directions">
            <p class="acceptt"> جنوب</p>
          </div>
          <div class="form-div">
            <input type="checkbox" class="chek" value="غرب" v-model="directions">
            <p class="acceptt"> غرب</p>
          </div>

        </form>

        <div class="cell">
          <div class="cell-label absolut">
            <span class="cell-name">عرض الشارع بالمتر </span>
            <div class="star"></div>
          </div>
          <input type="text" name="" class="cell-entery place-tiny" placeholder="عرض الشارع بالمتر"
            v-model="street_width">
        </div>
      </div>
    </section>
    <!--  -->
    <!--  -->
    <section v-if="RenderLand()">
      <div class="container">
        <div class="dropdown">
          <label class="cell-label">اختر المدينة *</label>
          <select class="dropdown-select" v-model="city_id" @change="updateNeighborhoods">
            <option disabled selected value="0">اختر المدينة *</option>
            <option v-for="city in cities" :value="city.city_id" :key="city.city_id">{{ city.name_ar }}</option>
          </select>
        </div>

        <div class="dropdown">
          <label class="cell-label">اختر الحي *</label>
          <select class="dropdown-select" name="" v-model="Neighborhood_id">
            <option disabled selected value="option0">اختر الحي *</option>
            <option v-for="neighborhood in filteredNeighborhoods" :value="neighborhood.name_ar"
              :key="neighborhood.name_ar">{{ neighborhood.name_ar }}</option>
            <option value="0">غير ذلك</option>
          </select>
        </div>

        <div class="cell neighborhoodField" v-if="Neighborhood_id === '0'">
          <div class="cell-label absolut">
            <span class="cell-name">اسم الحي</span>
            <div class="star"></div>
          </div>
          <input type="text" name="" class="cell-entery place-tiny" placeholder="اكتب اسم الحي يدويا" v-model="Empaty">
        </div>

        <h2>نوع الأرض *</h2>
        <form class="roleForm">
          <label class="radio-lab">
            <input type="radio" name="land-type" value="12" class="radio-circle" v-model="property_type">
            سكني
          </label>
          <label class="radio-lab">
            <input type="radio" name="land-type" value="13" class="radio-circle" v-model="property_type">
            سكني تجاري
          </label>
          <label class="radio-lab">
            <input type="radio" name="land-type" value="14" class="radio-circle" v-model="property_type">
            تجاري
          </label>
          <label class="radio-lab">
            <input type="radio" name="land-type" value="15" class="radio-circle" v-model="property_type">
            زراعي
          </label>
          <label class="radio-lab">
            <input type="radio" name="land-type" value="16" class="radio-circle" v-model="property_type">
            صناعي
          </label>
        </form>

        <div class="cell">
          <div class="cell-label absolut">
            <span class="cell-name"> رقم المخطط </span>
            <div class="star"></div>
          </div>
          <input type="text" class="cell-entery place-tiny" placeholder=" رقم المخطط" v-model="plan_number">
        </div>

        <div class="cell">
          <div class="cell-label absolut">
            <span class="cell-name"> رقم القطعة </span>
            <div class="star"></div>
          </div>
          <input type="text" class="cell-entery place-tiny" placeholder=" رقم القطعة " v-model="property_number">
        </div>

        <div class="cell">
          <div class="cell-label absolut">
            <span class="cell-name"> المساحة بالمتر المربع </span>
            <div class="star"></div>
          </div>
          <input type="text" class="cell-entery place-tiny" placeholder="المساحة بالمتر المربع" v-model="property_area">
        </div>

        <h2 style="margin: 0; margin-bottom:5px;">الواجهة</h2>
        <form class="cheky form-flex">
          <div class="form-div">
            <input type="checkbox" class="chek" value="شمال" v-model="directions">
            <p class="acceptt"> شمال</p>
          </div>

          <div class="form-div">
            <input type="checkbox" class="chek" value="شرق" v-model="directions">
            <p class="acceptt"> شرق</p>
          </div>

          <div class="form-div">
            <input type="checkbox" class="chek" value="جنوب" v-model="directions">
            <p class="acceptt"> جنوب</p>
          </div>
          <div class="form-div">
            <input type="checkbox" class="chek" value="غرب" v-model="directions">
            <p class="acceptt"> غرب</p>
          </div>

        </form>

        <div class="cell">
          <div class="cell-label absolut">
            <span class="cell-name">عرض الشارع بالمتر </span>
            <div class="star"></div>
          </div>
          <input type="text" name="" class="cell-entery place-tiny" placeholder="عرض الشارع بالمتر"
            v-model="street_width">
        </div>
      </div>
    </section>
    <!--  -->
    <!--  -->
    <section v-if="RenderVilla()">
      <div class="container">
        <div class="dropdown">
          <label class="cell-label">اختر المدينة *</label>
          <select class="dropdown-select" v-model="city_id" @change="updateNeighborhoods">
            <option disabled selected value="0">اختر المدينة *</option>
            <option v-for="city in cities" :value="city.city_id" :key="city.city_id">{{ city.name_ar }}</option>
          </select>
        </div>

        <div class="dropdown">
          <label class="cell-label">اختر الحي *</label>
          <select class="dropdown-select" name="" v-model="Neighborhood_id">
            <option disabled selected value="option0">اختر الحي *</option>
            <option v-for="neighborhood in filteredNeighborhoods" :value="neighborhood.name_ar"
              :key="neighborhood.name_ar">{{ neighborhood.name_ar }}</option>
            <option value="0">غير ذلك</option>
          </select>
        </div>

        <div class="cell neighborhoodField" v-if="Neighborhood_id === '0'">
          <div class="cell-label absolut">
            <span class="cell-name">اسم الحي</span>
            <div class="star"></div>
          </div>
          <input type="text" name="" class="cell-entery place-tiny" placeholder="اكتب اسم الحي يدويا" v-model="Empaty">
        </div>

        <h2> نوع الفيلا</h2>
        <form class="roleForm" id="aqarTypeForm">
          <label class="radio-lab">
            <input type="radio" name="aqar-type" value="17" class="radio-circle" v-model="property_type">
            فيلا درج داخلي وشقة
          </label>

          <label class="radio-lab">
            <input type="radio" name="aqar-type" value="18" class="radio-circle" v-model="property_type">
            فيلا دورين
          </label>

          <label class="radio-lab">
            <input type="radio" name="aqar-type" value="20" class="radio-circle" v-model="property_type">
            فيلا دورين وملحق
          </label>
        </form>

        <div class="cell">
          <div class="cell-label absolut">
            <span class="cell-name"> رقم المخطط </span>
            <div class="star"></div>
          </div>
          <input type="text" class="cell-entery place-tiny" placeholder=" رقم المخطط" v-model="plan_number">
        </div>

        <div class="cell">
          <div class="cell-label absolut">
            <span class="cell-name"> رقم القطعة </span>
            <div class="star"></div>
          </div>
          <input type="text" class="cell-entery place-tiny" placeholder=" رقم القطعة " v-model="property_number">
        </div>

        <div class="cell">
          <label for="myRange2" class="Renge-style">
            عمر العقار :
            <p style="margin-right: 5px;">{{ property_age }}</p>
          </label>
          <input type="range" min="0" max="20" step="1" class="styled-range" v-model="property_age">
        </div>
        <div class="Reng-flex">
          <div>0</div>
          <div>20+</div>
        </div>

        <!-- Range Input 1 -->

        <div class="cell">
          <div class="cell-label absolut">
            <span class="cell-name"> المساحة بالمتر المربع </span>
            <div class="star"></div>
          </div>
          <input type="text" class="cell-entery place-tiny" placeholder="المساحة بالمتر المربع" v-model="property_area">
        </div>

        <h2 style="margin: 0; margin-bottom:5px;">الواجهة</h2>
        <form class="cheky form-flex">
          <div class="form-div">
            <input type="checkbox" class="chek" value="شمال" v-model="directions">
            <p class="acceptt"> شمال</p>
          </div>

          <div class="form-div">
            <input type="checkbox" class="chek" value="شرق" v-model="directions">
            <p class="acceptt"> شرق</p>
          </div>

          <div class="form-div">
            <input type="checkbox" class="chek" value="جنوب" v-model="directions">
            <p class="acceptt"> جنوب</p>
          </div>
          <div class="form-div">
            <input type="checkbox" class="chek" value="غرب" v-model="directions">
            <p class="acceptt"> غرب</p>
          </div>

        </form>

        <div class="cell">
          <div class="cell-label absolut">
            <span class="cell-name">عرض الشارع بالمتر </span>
            <div class="star"></div>
          </div>
          <input type="text" name="" class="cell-entery place-tiny" placeholder="عرض الشارع بالمتر"
            v-model="street_width">
        </div>

        <div class="cell">
          <label for="myRange2" class="Renge-style">
            عدد الوحدات :
            <p style="margin-right: 5px;">{{ units_number }}</p>
          </label>
          <input type="range" min="0" max="20" step="1" class="styled-range" v-model="units_number">
        </div>

        <div class="Reng-flex">
          <div>0</div>
          <div>20+</div>
        </div>

        <h2>اختر صورة أو أكثر للعقار</h2>
        <div class="photos-flex">
          <div class="upload-box" v-for="(box, index) in uploadBoxes" :key="index">
            <!-- Input element for file selection -->
            <input type="file" :class="'file-input file-input-' + index" accept="image/*" :id="'fileInput' + index"
              @change="handleFileInput(index)" ref="fileInputRef" />
            <label :for="'fileInput' + index" class="upload-label">
              <!-- Preview div with delete icon -->
              <div class="file-preview" :style="filePreviewStyles[index]">
                <!-- <span class="delete-icon" @click="clearFile(index, $event)" @keydown.enter="clearFile(index, $event)" tabindex="0">&times;</span> -->
              </div>
            </label>
          </div>
        </div>
      </div>
    </section>
    <!--  -->
    <!--  -->
    <section v-if="RenderBuilding()">
      <div class="container">
        <div class="dropdown">
          <label class="cell-label">اختر المدينة *</label>
          <select class="dropdown-select" v-model="city_id" @change="updateNeighborhoods">
            <option disabled selected value="0">اختر المدينة *</option>
            <option v-for="city in cities" :value="city.city_id" :key="city.city_id">{{ city.name_ar }}</option>
          </select>
        </div>

        <div class="dropdown">
          <label class="cell-label">اختر الحي *</label>
          <select class="dropdown-select" name="" v-model="Neighborhood_id">
            <option disabled selected value="option0">اختر الحي *</option>
            <option v-for="neighborhood in filteredNeighborhoods" :value="neighborhood.name_ar"
              :key="neighborhood.name_ar">{{ neighborhood.name_ar }}</option>
            <option value="0">غير ذلك</option>
          </select>
        </div>

        <div class="cell neighborhoodField" v-if="Neighborhood_id === '0'">
          <div class="cell-label absolut">
            <span class="cell-name">اسم الحي</span>
            <div class="star"></div>
          </div>
          <input type="text" name="" class="cell-entery place-tiny" placeholder="اكتب اسم الحي يدويا" v-model="Empaty">
        </div>

        <h2>نوع العمارة</h2>
        <form class="roleForm">
          <label class="radio-lab">
            <input type="radio" name="BuildType" value="4" class="radio-circle" v-model="property_type">
            عماره (شقق سكنية)
          </label>
          <label class="radio-lab">
            <input type="radio" name="BuildType" value="5" class="radio-circle" v-model="property_type">
            عماره شقق مفروشه
          </label>
          <label class="radio-lab">
            <input type="radio" name="BuildType" value="6" class="radio-circle" v-model="property_type">
            عماره محلات و شقق سكنية
          </label>
          <label class="radio-lab">
            <input type="radio" name="BuildType" value="7" class="radio-circle" v-model="property_type">
            عماره محلات و شقق مفروشه
          </label>
          <label class="radio-lab">
            <input type="radio" name="BuildType" value="8" class="radio-circle" v-model="property_type">
            عمارة محلات
          </label>
          <label class="radio-lab">
            <input type="radio" name="BuildType" value="9" class="radio-circle" v-model="property_type">
            عمارة محلات ومكاتب
          </label>
          <label class="radio-lab">
            <input type="radio" name="BuildType" value="10" class="radio-circle" v-model="property_type">
            عمارة مكاتب
          </label>
          <label class="radio-lab">
            <input type="radio" name="BuildType" value="11" class="radio-circle" v-model="property_type">
            بلازا
          </label>
        </form>

        <div class="cell">
          <div class="cell-label absolut">
            <span class="cell-name"> رقم المخطط </span>
            <div class="star"></div>
          </div>
          <input type="text" class="cell-entery place-tiny" placeholder=" رقم المخطط" v-model="plan_number">
        </div>

        <div class="cell">
          <div class="cell-label absolut">
            <span class="cell-name"> رقم القطعة </span>
            <div class="star"></div>
          </div>
          <input type="text" class="cell-entery place-tiny" placeholder=" رقم القطعة " v-model="property_number">
        </div>

        <div class="cell">
          <div class="cell-label absolut">
            <span class="cell-name"> المساحة بالمتر المربع </span>
            <div class="star"></div>
          </div>
          <input type="text" class="cell-entery place-tiny" placeholder="المساحة بالمتر المربع" v-model="property_area">
        </div>

        <div class="cell">
          <label for="myRange2" class="Renge-style">
            عمر العقار :
            <p style="margin-right: 5px;">{{ property_age }}</p>
          </label>
          <input type="range" min="0" max="20" step="1" class="styled-range" v-model="property_age">
        </div>
        <div class="Reng-flex">
          <div>0</div>
          <div>20+</div>
        </div>

        <div class="cell">
          <label for="myRange2" class="Renge-style">
            عدد الادوار :
            <p style="margin-right: 5px;">{{ levels_number }}</p>
          </label>
          <input type="range" min="1" max="10" v-model="levels_number" step="1" class="styled-range">
        </div>
        <div class="Reng-flex">
          <div>0</div>
          <div>10+</div>
        </div>

        <div v-if="RenderApartments()">
          <div class="cell">
            <label for="myRange2" class="Renge-style">
              عدد الشقق:
              <p style="margin-right: 5px;">{{ apartments_number }}</p>
            </label>
            <input type="range" min="1" max="10" v-model="apartments_number" step="1" class="styled-range">
          </div>
          <div class="Reng-flex">
            <div>1</div>
            <div>10+</div>
          </div>
        </div>

        <div v-if="Rendershops()">
          <div class="cell">
            <label for="myRange2" class="Renge-style">
              عدد المحلات:
              <p style="margin-right: 5px;">{{ shop_number }}</p>
            </label>
            <input type="range" min="1" max="10" v-model="shop_number" step="1" class="styled-range">
          </div>
          <div class="Reng-flex">
            <div>1</div>
            <div>10+</div>
          </div>
        </div>

        <div v-if="Renderoffices()">
          <div class="cell">
            <label for="myRange2" class="Renge-style">
              عدد المكاتب:
              <p style="margin-right: 5px;">{{ office_number }}</p>
            </label>
            <input type="range" min="1" max="10" v-model="office_number" step="1" class="styled-range">
          </div>
          <div class="Reng-flex">
            <div>1</div>
            <div>10+</div>
          </div>
        </div>

        <div class="cell">
          <div class="cell-label absolut">
            <span class="cell-name">عرض الشارع بالمتر </span>
            <div class="star"></div>
          </div>
          <input type="text" name="" class="cell-entery place-tiny" placeholder="عرض الشارع بالمتر"
            v-model="street_width">
        </div>

        <h2>اختر صورة أو أكثر للعقار</h2>
        <div class="photos-flex">
          <div class="upload-box" v-for="(box, index) in uploadBoxes" :key="index">
            <!-- Input element for file selection -->
            <input type="file" :class="'file-input file-input-' + index" accept="image/*" :id="'fileInput' + index"
              @change="handleFileInput(index)" ref="fileInputRef" />
            <label :for="'fileInput' + index" class="upload-label">
              <!-- Preview div with delete icon -->
              <div class="file-preview" :style="filePreviewStyles[index]">
                <!-- <span class="delete-icon" @click="clearFile(index, $event)" @keydown.enter="clearFile(index, $event)" tabindex="0">&times;</span> -->
              </div>
            </label>
          </div>
        </div>
      </div>
    </section>
    <!--  -->
    <!--  -->
    <div class="container">
      <div class="cell">
        <label for="myRange2" class="Renge-style">
          عدد الشركاء (بما فيهم انت) :
          <p style="margin-right: 5px;">{{ partners_count }}</p>
        </label>
        <input type="range" min="2" max="10" v-model="partners_count" step="1" class="styled-range">
      </div>
      <div class="Reng-flex">
        <div>2</div>
        <div class="paddI">3</div>
        <div class="paddI">4</div>
        <div class="paddI">5</div>
        <div class="padd">6</div>
        <div class="padd">7</div>
        <div class="padd">8</div>
        <div class="padd">9</div>
        <div>10</div>
      </div>

      <div class="cell">
        <label for="myRange2" class="Renge-style">
          مبلغ كل شريك: <p style="margin-right: 5px;">{{ investment_cost }}</p>
          <p style="font-weight: bold;">&nbsp;&nbsp;صافي (يشمل الضريبة)</p>
        </label>
        <input type="range" min="100000" max="5000000" step="50000" class="styled-range" v-model="investment_cost">
      </div>
      <div class="Reng-flex">
        <div>100,000&nbsp;ريال</div>
        <div class="paddI"></div>
        <div class="paddI"></div>
        <div class="paddI"></div>
        <div class="padd"></div>
        <div class="padd">5,000,000&nbsp;ريال</div>
      </div>
      <div class="cheky">
        <input type="checkbox" class="chek" v-model="negotiable">
        <p class="acceptt"> قابل للتفاوض </p>
      </div>

      <div class="cheky">
        <input type="checkbox" class="chek" v-model="needs_money">
        <p class="acceptt"> ارغب في تمويل عقاري </p>
      </div>
    </div>
  </section>

  <section v-if="Rendersave()">
    <div class="container handle-save-btn">
      <input type="submit" value="حفظ" @click="saveForm" class="small-btn" />
      <router-link to="/main">
        <a class="small-btn"
          style="background-color:transparent; color:var(--main-color); border:none; font-weight:bold;">رجوع</a>
      </router-link>
    </div>
  </section>
  <!--  -->
  <!--  -->
  <section v-if="partner_type === '1'">
    <div class="container">
      <div class="dropdown">
        <label class="cell-label">اختر المدينة *</label>
        <select class="dropdown-select" v-model="city_id" @change="updateNeighborhoods">
          <option disabled selected value="0">اختر المدينة *</option>
          <option v-for="city in cities" :value="city.city_id" :key="city.city_id">{{ city.name_ar }}</option>
        </select>
      </div>

      <div class="cell ">
        <input type="text" class="cell-entery" placeholder="وصف مختصر" v-model="title">
      </div>

      <div class="dropdown">
        <label class="cell-label">اختر المجال</label>
        <select class="dropdown-select" v-model="domain_id">
          <option disabled selected value="0"> اختر المجال *</option>
          <option v-for="domain in domains" :key="domain.id" :value="domain.id">{{ domain.name }}</option>
        </select>
      </div>

      <div class="text">
        <h2> تفاصيل اضافية</h2>
        <p><textarea placeholder="اكتب المزيد من التفاصيل ..." class="multiline-input" v-model="description"></textarea>
        </p>
      </div>

      <div class="cell">
        <label for="myRange2" class="Renge-style">
          مبلغ كل شريك: <p style="margin-right: 5px;">{{ investment_cost }}</p>
          <p style="font-weight: bold;">&nbsp;ريال</p>
        </label>
        <input type="range" min="100000" max="5000000" step="50000" class="styled-range" v-model="investment_cost">
      </div>
      <div class="Reng-flex">
        <div>100,000&nbsp;ريال</div>
        <div class="paddI"></div>
        <div class="paddI"></div>
        <div class="paddI"></div>
        <div class="padd"></div>
        <div class="padd">5,000,000&nbsp;ريال</div>
      </div>

      <h2>حالة المشروع </h2>
      <form class="roleForm">
        <label class="radio-lab">
          <input type="radio" name="project_status" value="0" class="radio-circle" v-model="project_status">
          قائم
        </label>
        <label class="radio-lab">
          <input type="radio" name="project_status" value="1" class="radio-circle" v-model="project_status">
          جديد
        </label>
      </form>

      <h2>ما هي مساهمتك</h2>
      <form class="roleForm">
        <label class="radio-lab">
          <input type="radio" name="user_contribution" value="0" v-model="user_contribution" class="radio-circle">
          المجهود
        </label>
        <label class="radio-lab">
          <input type="radio" name="user_contribution" value="1" v-model="user_contribution" class="radio-circle">
          رأس المال
        </label>
      </form>

      <h2>ما هي مساهمة الشريك الاخر</h2>
      <form class="roleForm">
        <label class="radio-lab">
          <input type="radio" name="typo" value="0" v-model="other_contribution" class="radio-circle">
          المجهود
        </label>
        <label class="radio-lab">
          <input type="radio" name="typo" value="1" v-model="other_contribution" class="radio-circle">
          رأس المال
        </label>
      </form>
      <input type="submit" value="حفظ" @click="saveForm" class="small-btn" />
      <router-link to="/main">
        <a class="small-btn"
          style="background-color:transparent; color:var(--main-color); border:none; font-weight:bold;">رجوع</a>
      </router-link>
    </div>
  </section>
  <!--  -->
</template>

<script>
import { BASE_URL } from '@/api-config';
import axios from 'axios';
// import createToaster from '@meforma/vue-toaster';
// eslint-disable-next-line import/no-extraneous-dependencies
// import qs from 'qs';
import FormBack from '../../components/FormComponents/FormBack.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Form',
  data() {
    return {
      token: '',

      investment_cost: 100000,
      cities: [],
      city_id: 0,
      cond: true,

      description: '',
      directions: [],
      concatenatedDirections: '',

      domain_id: 0,
      domains: [
        { id: 1, name: 'محلل' },
        { id: 2, name: 'ورشة' },
        { id: 3, name: 'مصنع' },
        { id: 4, name: 'بضاعة' },
      ],

      Empaty: '', //  API neighborhood_name

      filePreviewStyles: Array(5).fill({}),
      filteredNeighborhoods: [],

      have_property: '',

      images: [],

      needs_money: false,
      negotiable: false,
      needsMoneyResult: 0,
      negotiableResult: 0,
      neighborhood_id: '',
      Neighborhood_id: '',
      Neighborhood_ids: [],
      Neighborhood: '',

      other_contribution: '',

      office_number: 0,
      apartments_number: 0,
      levels_number: 0,
      shop_number: 0,
      units_number: 0,

      partnerNeighborhoods: [],
      concatenatedNeighborhoods: '',
      partners_count: '2',
      partner_type: '',
      plan_number: '',
      project_status: '',
      property_age: '0',
      property_area: '',
      property_floors: '1',
      property_number: '',
      property_type: 0,
      property_type_help: '',
      PropertyTypes: [],
      purpose: '',

      street_width: '',

      title: 'dsd',
      true: true,
      user_contribution: '',
      uploadBoxes: [0, 1, 2, 3, 4],
      userId: '',
      selectedNeighborhoods: [],
      concatenatedValues: '',
      empaty: false,
    };
  },
  mounted() {
    this.fetchCities();
    this.fetchneighborhoods();
    this.user = localStorage.getItem('userr');
    this.token = localStorage.getItem('token');
    this.userId = localStorage.getItem('userId');
    this.updateConcatenatedValues();
    // this.PutIdOfProbrtyByproperty_type_help();
    // this.makecondtrue();
  },
  watch: {
    city_id: 'updateNeighborhoods',
    property_type_help(newValue) {
      this.putIdOfPropertyByPropertyTypeHelp(newValue);
    },
    selectedNeighborhoods: {
      handler(newVal) {
        this.concatenatedNeighborhoods = newVal.join(', ') + (this.Empaty ? `, ${this.Empaty}` : '');
      },
      immediate: true,
    },
    Empaty(newVal) {
      this.concatenatedNeighborhoods = this.selectedNeighborhoods.join(', ') + (newVal ? `, ${newVal}` : '');
    },
    directions: {
      handler(newVal) {
        this.concatenatedDirections = newVal.join(', ');
      },
      immediate: true,
    },
    negotiable(newVal) {
      this.negotiableResult = newVal ? 1 : 0;
    },
    needs_money(newVal) {
      this.needsMoneyResult = newVal ? 1 : 0;
    },
    office_number: 'updateConcatenatedValues',
    apartments_number: 'updateConcatenatedValues',
    levels_number: 'updateConcatenatedValues',
    shop_number: 'updateConcatenatedValues',
    units_number: 'updateConcatenatedValues',
  },
  computed: {
    // showOtherNeighborhoodInput() {
    //   return this.empaty;
    // },
  },
  methods: {
    showOtherNeighborhoodInput() {
      return this.empaty;
    },
    updateConcatenatedValues() {
      // Extract values from the data properties
      const officeNumber = this.office_number || 0;
      const apartmentsNumber = this.apartments_number || 0;
      const levelsNumber = this.levels_number || 0;
      const shopNumber = this.shop_number || 0;
      const unitsNumber = this.units_number || 0;

      // Concatenate the values
      const concatenatedValues = `${unitsNumber},${officeNumber},${apartmentsNumber},${levelsNumber},${shopNumber}`;

      // Assign the concatenated string to the data property
      this.concatenatedValues = concatenatedValues;
    },
    // makecondtrue() {
    //   this.cond = this.have_property === '1' && this.property_type_help === 'land';
    //   return this.cond;
    // },
    fetchCities() {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      };

      axios.get(`${BASE_URL}/Home/GetCities`, { headers })
        .then((response) => {
          this.cities = response.data;
        })
        .catch((error) => {
          console.error('Error fetching cities:', error);
        });
    },
    fetchneighborhoods() {
      axios.get(`${BASE_URL}/Home/GetRegions`)
        .then((response) => {
          this.partnerNeighborhoods = response.data;
        })
        .catch((error) => {
          console.error('Error fetching neighborhoods:', error);
        });
    },
    updateNeighborhoods() {
      // Filter neighborhoods based on the selected city_id
      this.filteredNeighborhoods = this.partnerNeighborhoods.filter(
        (neighborhood) => neighborhood.city_id === this.city_id,
      );

      // Reset the selected neighborhood
      this.Neighborhood_id = 'option0';
    },
    updateConcatenatedNeighborhoods() {
      // Join the elements of the selectedNeighborhoods array into a single string
      this.concatenatedNeighborhoods = this.selectedNeighborhoods.join(', ');
    },
    updateConcatenatedDirections() {
      // Join the elements of the selectedNeighborhoods array into a single string
      this.concatenatedDirections = this.directions.join(', ');
    },
    putIdOfPropertyByPropertyTypeHelp(value) {
      if (value === 'land') {
        this.property_type = 1;
      } else if (value === 'villa') {
        this.property_type = 2;
      } else if (value === 'building') {
        this.property_type = 3;
      }
    },
    calculateResults() {
      this.negotiableResult = this.negotiable ? 1 : 0;
      this.needsMoneyResult = this.needs_money ? 1 : 0;
    },
    // handleFileInput(index) {
    //   const fileInput = this.$refs.fileInputRef[index];
    //   const file = fileInput.files[0];
    //   if (file) {
    //     const reader = new FileReader();
    //     reader.onload = (e) => {
    //       this.filePreviewStyles[index] = {
    //         backgroundImage: `url('${e.target.result}')`,
    //         display: 'block',
    //       };
    //       // Push the uploaded image to the images array
    //       this.images[index] = file;
    //     };
    //     reader.readAsDataURL(file);
    //   }
    // },
    handleFileInput(index) {
      const fileInput = this.$refs.fileInputRef[index];
      const file = fileInput.files[0];
      console.log('Selected file:', file);

      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.filePreviewStyles[index] = {
            backgroundImage: `url('${e.target.result}')`,
            display: 'block',
          };
          // Push the uploaded image to the images array
          this.images[index] = file;
          console.log('Updated images array:', this.images);
        };
        reader.readAsDataURL(file);
      }
      console.log('Images array before API call:', this.images);
    },

    // fetchDomains() {
    //   axios.get(`${BASE_URL}locations/get-all-domains`)
    //     .then((response) => {
    //       this.domains = response.data.data;
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching cities:', error);
    //     });
    // },

    // fetchPropertyTypes() {
    //   axios.get(`${BASE_URL}locations/get-all-property-types`)
    //     .then((response) => {
    //       this.PropertyTypes = response.data.data;
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching cities:', error);
    //     });
    // },
    RenderNo() {
      return this.have_property === '0';
    },
    RenderLand() {
      return this.have_property === '1' && this.property_type_help === 'land';
    },
    RenderVilla() {
      return this.have_property === '1' && this.property_type_help === 'villa';
    },
    RenderBuilding() {
      return this.have_property === '1' && this.property_type_help === 'building';
    },
    Rendersave() {
      return this.have_property === '1' || this.have_property === '0';
    },
    RenderApartments() {
      return (
        this.property_type === '4'
        || this.property_type === '5'
        || this.property_type === '6' // Corrected value
        || this.property_type === '7' // Corrected value
        || this.property_type === '11'
      );
    },
    Rendershops() {
      return (
        this.property_type === '8'
        || this.property_type === '9'
        || this.property_type === '6' // Corrected value
        || this.property_type === '7' // Corrected value
        || this.property_type === '11'
      );
    },
    Renderoffices() {
      return (
        this.property_type === '10'
        || this.property_type === '9'
        || this.property_type === '11'
      );
    },
    async saveForm() {
      if (this.partner_type === '1') {
        const apiUrl = `${BASE_URL}/Home/AddCommercialPost`;
        const formData = {
          partner_type: this.partner_type,
          city_id: this.city_id,
          investment_cost: this.investment_cost,
          description: this.description,
          partners_count: this.partners_count,
          title: this.title,
          domain_id: this.domain_id,
          project_status: this.project_status,
          user_contribution: this.user_contribution,
          other_contribution: this.other_contribution,
          userId: this.userId,
        };
        try {
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${this.token}`,
            },
            body: JSON.stringify(formData),
          });

          if (!response.ok) {
            throw new Error(`Failed to save form. Status: ${response.status}`);
          }

          const responseData = await response.json();
          console.log('Form saved successfully:', responseData);
          this.$router.push('/FormSuccess');
        // Do something with the response data if needed
        } catch (error) {
          console.error('Error saving form:', error.message);
        // Handle the error
        }
      }
      if (this.partner_type === '0' && this.have_property === '0') {
        const apiUrl = `${BASE_URL}/Home/Addreal_estate_noPost`;
        const formData = {
          partner_type: this.partner_type,
          purpose: this.purpose,
          property_type: this.property_type,
          city_id: this.city_id,
          partnerNeighborhoods: this.concatenatedNeighborhoods,
          street_width: this.street_width,
          property_area: this.property_area,
          directions: this.concatenatedDirections,
          partners_count: this.partners_count,
          investment_cost: this.investment_cost,
          needs_money: this.needsMoneyResult,
          negotiable: this.negotiableResult,
          userID: this.userId,
        };

        try {
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${this.token}`,
            },
            body: JSON.stringify(formData),
          });

          if (!response.ok) {
            throw new Error(`Failed to save form. Status: ${response.status}`);
          }

          const responseData = await response.json();
          console.log('Form saved successfully:', responseData);
          this.$router.push('/FormSuccess');
        // Do something with the response data if needed
        } catch (error) {
          console.error('Error saving form:', error.message);
        // Handle the error
        }
      }
      if (this.partner_type === '0' && this.have_property === '1') {
        const formData = new FormData();
        formData.append('partner_type', this.partner_type);
        formData.append('purpose', this.purpose);
        formData.append('property_type', this.property_type);
        formData.append('city_id', this.city_id);
        formData.append('partnerNeighborhoods', this.Neighborhood_id === '0' ? this.Empaty : this.Neighborhood_id);
        formData.append('street_width', this.street_width);
        formData.append('property_area', this.property_area);
        formData.append('directions', this.concatenatedDirections);
        formData.append('partners_count', this.partners_count);
        formData.append('investment_cost', this.investment_cost);
        formData.append('needs_money', this.needsMoneyResult);
        formData.append('negotiable', this.negotiableResult);
        formData.append('UserID', this.userId);
        formData.append('plan_number', this.plan_number);
        formData.append('property_number', this.property_number);
        formData.append('property_age', this.property_age);

        formData.append('description', this.concatenatedValues);
        // Check if images array is empty
        if (this.images.length === 0) {
          const defaultImage = new File([new ArrayBuffer(1)], 'default_image.jpg', { type: 'image/jpeg' });
          formData.append('images', defaultImage);
        } else {
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < this.images.length; i++) {
            formData.append('images', this.images[i]);
          }
        }
        fetch(`${BASE_URL}/Home/Addreal_estate_yesPost`, {
          method: 'POST',
          body: formData,
        })
          .then(async (response) => {
            if (response.status === 200) {
              const responseData = await response.json();
              console.log('Form saved successfully:', responseData);

              // Extract idPost from the response
              const { idPost } = responseData;

              // Call addConversation with the obtained idPost
              await this.addConversation(idPost);
              // Redirect to '/FormSuccess'
              this.$router.push('/FormSuccess');
            }
            return response.json();
          })
          .then((data) => {
            console.log('Response:', data);
            console.log(this.images);
          })
          .catch((error) => {
            console.error('Error:', error);
            // Handle errors
          });
      }
    },
    async addConversation(idPost) {
      try {
        // Make an API request to add conversation
        await axios.post('http://localhost:3000/api/conversations', {
          post_id: idPost,
        });
        // Optionally, you can emit an event to notify the parent component about the update
        this.$emit('conversationAdded');

        // Optionally, you can also redirect to another route or display a success message
      } catch (error) {
        console.error('Error adding conversation:', error);
        // Handle error and display an error message if needed
      }
    },
  },
  components: {
    FormBack,
  },
};
</script>
