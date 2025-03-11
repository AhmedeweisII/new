<template>
  <section class="about">
    <!-- 0 header -->
    <header class="top" style="background-color: black">
      <div class="container" id="home">
        <nav class="navbar">
          <div class="icon2sy">
            <a href class="brand-link">
              <div class="logo">
                <img src="../assets/img/brand_logo.png" class="icon-special">
              </div>
              Falcon
              <span style="color:red;">&nbsp;Core</span>
            </a>
          </div>
          <ul class="nav-list" id="navi-list">
            <li class="list-item">
              <a href="#home" class="ref">Home</a>
            </li>
            <li class="list-item">
              <a href="#Projects" class="ref">Projects</a>
            </li>
            <li class="list-item">
              <a href="#pricing" class="ref">Pricing</a>
            </li>
            <li class="list-item">
              <a href="#skills" class="ref">Skills</a>
            </li>
            <li class="list-item hidden-phone">
              <a href="#experience" class="ref">Experience</a>
            </li>
            <li class="list-item hidden-phone">
              <a href="#testimonials" class="ref">Testimonials</a>
            </li>
            <li class="list-item hidden-phone">
              <a href="#Services" class="ref">Services</a>
            </li>
            <li class="list-item hidden-phone">
              <a href="#About" class="ref">About me</a>
            </li>
            <li class="list-item " id="more-item">
              <a class="ref hidden2" id="more-link" @click="toggleno">More</a>
              <!-- Nested List for Additional Links -->
              <ul class="sub-nav-list" v-if="isMoreVisible">
                <li><a href="#experience" class="ref">Experience</a></li>
                <li><a href="#testimonials" class="ref">Testimonials</a></li>
                <li><a href="#Services" class="ref">Services</a></li>
                <li><a href="#About" class="ref">About me</a></li>
              </ul>
            </li>
          </ul>
          <div class="menu" id="toggle-button" @click="toggleMenu">
            <div class="menu-line"></div>
            <div class="menu-line"></div>
            <div class="menu-line"></div>
          </div>
        </nav>
      </div>
    </header>
    <!-- 1 header -->

    <!-- 0 top2-->
    <!-- <section class="land-top" id="home">
      <div
        class="container"
        style="display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;"
      >
        <h1 class="top-head" style="margin-top: 80px;">Web & Front-end Designer</h1>
        <p class="bio">
          Hardworking professional skilled in Vue.js. Passionate about secure,
          optimized code. Eager to tackle new challenges and leverage cutting-edge technologies for impactful projects.
        </p>
        <div class="min-projects">
          <div class="projects-title">
            <h2>top of The Last Projects</h2>
            <p>the most desired Projects</p>
          </div>
       
          <a href="/fash/index.html" class="project" target="_blank">
            <img src="../assets/img/imgs/gallery-01.png" alt="none" class="p-cover" />
            <div class="info">
              <h2 class="p-title">Fashoin</h2>
            </div>
            <p>good design for fashoin ideas</p>
          </a>
      
          <a href="aqart/index.html" class="project" target="_blank">
            <img src="../assets/img/imgs/gallery-02.png" alt="none" class="p-cover" />
            <div class="info">
              <h2 class="p-title">Aqar Bot</h2>
            </div>
            <p>Landing page describe Bot</p>
          </a>
         
          <a href="/Scale/asset.html" class="project" target="_blank">
            <img src="../assets/img/pro1.png" alt="none" class="p-cover" />
            <div class="info">
              <h2 class="p-title">Scal</h2>
            </div>
            <p>Exam for students</p>
          </a>
        
          <a href="#Projects" class="more">
            <div class="sub-more">
              <p class="p-link">More Projects</p>
            </div>
            <img src="../assets/img/arrow-left.png" class="icon2 arrow" />
          </a>
        </div>
      </div>
    </section>-->
    <!-- 1 top2 -->

    <!--  <div class=""></div> -->

    <!-- 1 jops  -->
    <section class="make">
      <div class="container">
        <div class="left">
          <h1>Front-End Developer</h1>
          <p>
            Hardworking professional skilled in Vue.js. Passionate about secure,
            optimized code. Eager to tackle new challenges and leverage cutting-edge technologies for impactful
            projects.
          </p>
          <span>with 2+ years of experience</span>
          <div class="hot-buttons">
            <a class="cotact-me"
              href="https://drive.google.com/uc?export=download&id=1-4frfY68mzkV3dfB4dE5_9PBmtZK-jdp">
              Download CV
            </a>
            <a class="cotact-me" href="#Projects">
              View My work
            </a>
          </div>
        </div>
        <div class="right">
          <div class="photo-container">
            <img src="../assets/img/3.jpg" alt="Your Photo" class="profile-photo" />
            <div class="orbit">
              <a href="https://www.instagram.com/ahmed_eweis0/" class="social-icon" target="_blank">
                <img src="../assets/img/icon1.png" alt="Social Icon 1" />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ahmedeweiso@gmail.com" class="social-icon"
                target="_blank">
                <img src="../assets/img/icon2.png" alt="Social Icon 2" />
              </a>
              <a href="https://github.com/AhmedeweisII" class="social-icon" target="_blank">
                <img src="../assets/img/icon3.png" alt="Social Icon 3" />
              </a>
              <a href="https://www.linkedin.com/in/ahmed-eweis/" class="social-icon" target="_blank">
                <img src="../assets/img/icon4.png" alt="Social Icon 4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- 0 jops -->
    <section class="jops" id="Services">
      <div class="container">
        <div class="services-tilte">
          <span>what I can do</span>
          <h2>
            I work
            <br />Performed For
            <br />Client happy
          </h2>
          <button><a class="a-btn" href="#pricing">See Pricing Plan</a></button>
        </div>

        <div class="services">
          <div class="service">
            <img src="../assets/img/blog.png" class="icon2" />
            <div class="serv-info">
              <h3>Web design</h3>
              <p>I can Design UI for system Reaquiment</p>
              <a href>Read more</a>
            </div>
          </div>

          <div class="service">
            <img src="../assets/img/cloud-computing.png" class="icon2" />
            <div class="serv-info">
              <h3>Developing</h3>
              <p>I can Modfy your current project</p>
              <a href>Read more</a>
            </div>
          </div>

          <div class="service">
            <img src="../assets/img/code.png" class="icon2" />
            <div class="serv-info">
              <h3>Ui Coding</h3>
              <p>If you have PSD file or any ui a can code it</p>
              <a href>Read more</a>
            </div>
          </div>

          <div class="service">
            <img src="../assets/img/multi-channel.png" class="icon2" />
            <div class="serv-info">
              <h3>Api Connects</h3>
              <p>have problem with connect front & Back ?</p>
              <a href>Read more</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 1 jops  -->

    <!-- 0 about me  -->
    <section class="about-me" id="About">
      <div class="container">
        <div class="about-me-info">
          <div class="services-tilte">
            <span>Who I Am</span>
            <h2>Crafting Stories Through Design.</h2>
            <p>
              Since 2020 I have served as a Front-end Developer,
              <br />where I have Develop
              many Systems ..
              <br />I also provide high-quality designs at the lowest possible cost ..
              <br />Which
              gives me a high chance for Make your website ..
            </p>
            <div class="meddile-about">
              <img src="../assets/img/trophy.png" class="icon2-L icon2-left hiden-s" />
              <div>
                <h3 class="mession-h">My Mession</h3>
                <p>
                  I want to be best front-end in egypt and The Arab world
                  <br />make full websites make eyes happy
                </p>
              </div>
              <img src="../assets/img/brand_logo.png" class="icon2-L icon2-right" />
            </div>
            <button class="about-btn" @click="scrollToSkills">About more</button>
          </div>
        </div>
        <div class="photo-box">
          <div class="photoo">
            <img src="../assets/img/your-photoo.jpg" />
          </div>
        </div>
      </div>
    </section>
    <!-- 1  about me  -->

    <!-- 0 facts  -->
    <section class="facts">
      <div class="container">
        <div class="fact">
          <img src="../assets/img/list.png" class="icon2-m" />
          <h2 class="number">24</h2>
          <h3>Projects completed</h3>
        </div>
        <div class="fact">
          <img src="../assets/img/reputation.png" class="icon2-m" />
          <h2 class="number">10</h2>
          <h3>Satisfied clients</h3>
        </div>
        <div class="fact">
          <img src="../assets/img/responsive.png" class="icon2-m" />
          <h2 class="number">2</h2>
          <h3>Years experience</h3>
        </div>
        <div class="fact">
          <img src="../assets/img/trustworthiness.png" class="icon2-m" />
          <h2 class="number">11</h2>
          <h3>Certificates</h3>
        </div>
      </div>
    </section>
    <!-- 1 facts  -->

    <!-- 0 Gallery -->
    <div class="black" id="Projects">
      <div class="container">
        <div class="head-projects">
          <h2 class="main-title">Projects</h2>
          <button @click="showo">View All</button>
        </div>
      </div>
    </div>
    <div class="gallery" id="gallery">
      <div class="container">
        <a href="/fash/index.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Fashoin</h2>
            <h2>
              7
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-01.png" alt />
          </div>
        </a>
        <a href="furniture/index.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Tumpas</h2>
            <h2>
              7
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-04.png" alt />
          </div>
        </a>
        <a href="aqart/index.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Aqar Bot</h2>
            <h2>
              9
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-02.png" alt />
          </div>
        </a>
        <a href="/Scale/asset.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Scale</h2>
            <h2>
              9
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-03.png" alt />
          </div>
        </a>
        <a href="/Author_Identifcation/index.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Author Identifcation</h2>
            <h2>
              9
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-12.png" alt />
          </div>
        </a>

        <span class="box curser" @click="showo">
          <div class="infoo">
            <h2></h2>
            <h2></h2>
          </div>
          <div class="image flexe">
            <h1>+19 More</h1>
            <button>View</button>
          </div>
        </span>
      </div>
    </div>
    <div class="gallery"  v-if="shows === '1'">
      <div class="container">
        <a href="https://mashrouk-apis.vercel.app/main" class="box" target="_blank">
          <div class="infoo">
            <h2>mashrouk</h2>
            <h2>
              5
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-23.png" alt />
          </div>
        </a>
        <a href="/Tatweer/html/land.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Tatweer</h2>
            <h2>
              5
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-24.png" alt />
          </div>
        </a>
        <a href="/Kasper/temp2.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Kasper</h2>
            <h2>
              5
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-22.png" alt />
          </div>
        </a>
        <a href="/Leon/index.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Leon</h2>
            <h2>
              9
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-16.png" alt />
          </div>
        </a>
        <a href="/electricity-power/html/land.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Electricity Power</h2>
            <h2>
              9
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-10.png" alt />
          </div>
        </a>
        <a href="/Lava/index.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Lava</h2>
            <h2>
              9
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-07.png" alt />
          </div>
        </a>
        <a href="/My-Website/my_web_site.html" class="box" target="_blank">
          <div class="infoo">
            <h2>My-Website</h2>
            <h2>
              5
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-21.png" alt />
          </div>
        </a>
        <a href="/Light-Online/index.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Light Online</h2>
            <h2>
              5
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-14.png" alt />
          </div>
        </a>
        <a href="Corpo-link/index.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Corpo Link</h2>
            <h2>
              7
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-05.png" alt />
          </div>
        </a>
        <a href="/Mallory/index.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Mallory</h2>
            <h2>
              7
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-06.png" alt />
          </div>
        </a>
        <a href="/AI/main_Series_page/main.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Movies</h2>
            <h2>
              7
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-08.png" alt />
          </div>
        </a>
        <a href="/Construction-Company/index.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Construction Company</h2>
            <h2>
              9
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-09.png" alt />
          </div>
        </a>
        <a href="/FlyFly/index.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Fly Fly</h2>
            <h2>
              7
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-11.png" alt />
          </div>
        </a>

        <a href="/land-matcher/index.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Land Matcher</h2>
            <h2>
              7
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-13.png" alt />
          </div>
        </a>
        <a href="/research-gate-page/index.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Research Gate</h2>
            <h2>
              7
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-15.png" alt />
          </div>
        </a>
        <a href="/E-Commerce/index.html" class="box" target="_blank">
          <div class="infoo">
            <h2>E-Commerce</h2>
            <h2>
              7
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-17.png" alt />
          </div>
        </a>
        <a href="/luch/index.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Luch</h2>
            <h2>
              5
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-18.png" alt />
          </div>
        </a>
        <a href="/Logo-generator/authentication.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Logo generator</h2>
            <h2>
              7
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-19.png" alt />
          </div>
        </a>
        <a href="/Masafat/index.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Masafat</h2>
            <h2>
              7
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-20.png" alt />
          </div>
        </a>
      </div>
    </div>
    <!-- 1 Gallery -->

    <!-- 0 Pricing -->
    <section class="pricing" id="pricing">
      <div class="container">
        <h1 class="upper" style="text-align: center;">Pricing plan</h1>
        <h2>Pricing options that meets your</h2>
        <h2>budget and needs</h2>
        <div class="plans">
          <div class="plan">
            <div>
              <p>Hours Plan</p>
              <h2>
                100 EGP
                <span class="price-per">per Hour</span>
              </h2>
              <p>Ideal for companies or customers needing small-scale or trial tasks.</p>
            </div>
            <div class="flex-start">
              <div class="plan-det">
                <p>report upon completion hours</p>
              </div>
              <div class="plan-det">
                <p>Tasks start with a minimum of 1 hour.</p>
              </div>
              <div class="plan-det">
                <p>3 to 5 free revisions</p>
              </div>
              <div class="plan-det">
                <p>Quick response to work-related inquiries</p>
              </div>
              <div class="plan-det">
                <p>One hour free trial</p>
              </div>
              <div class="plan-det">
                <p>50% Payment Before work</p>
              </div>
            </div>
            <button class="about-btn plan-btn" @click="scrollToSkills"> Start Project</button>
          </div>
          <div class="plan populer">
            <div>
              <p>Project based</p>
              <h2>
                5k ~ 10k EG
                <span class="price-per">per Project</span>
              </h2>
              <p>For Companies or Customer who have spacific project requirment</p>
            </div>
            <div class="flex-start">
              <div class="plan-det">
                <p>Pricing is based on the project's scope</p>
              </div>
              <div class="plan-det">
                <p>30% free Edites</p>
              </div>
              <div class="plan-det">
                <p>Two weeks of support after project completion.</p>
              </div>
              <div class="plan-det">
                <p>Project status reports every 3 to 4 days.</p>
              </div>
              <div class="plan-det">
                <p>Project progress displayed in stages (design, development, and publication).</p>
              </div>
              <div class="plan-det">
                <p>A 35% payment is required before work begins.</p>
              </div>
            </div>
            <button class="about-btn plan-btn" @click="scrollToSkills">Start Project</button>
          </div>
          <div class="plan">
            <div>
              <p>Full Time Jop</p>
              <h2>
                13,000 EG
                <span class="price-per">per Month</span>
              </h2>
              <p>For companies or clients who need a full-time developer on a monthly basis.</p>
            </div>
            <div class="flex-start">
              <div class="plan-det">
                <p>160 hours (8 hours/day , 5 days/week)</p>
              </div>
              <!-- <div class="plan-det">
							<p>Task management(Design & Develop & Improvement)</p>
              </div>-->
              <div class="plan-det">
                <p>Weekly meetings to track progress</p>
              </div>
              <div class="plan-det">
                <p>Unlaimted free Edits</p>
              </div>
              <div class="plan-det">
                <p>10% - 20% discount if working for more than a month</p>
              </div>
              <div class="plan-det">
                <p>Work on multiple projects</p>
              </div>
              <div class="plan-det">
                <p>50% payment required before starting work</p>
              </div>
            </div>
            <button class="about-btn plan-btn" @click="scrollToSkills">Start Project</button>
          </div>
        </div>
      </div>
    </section>
    <!-- 1 Pricing -->

    <!-- 0 Lang -->
    <section class="langauge" id="skills">
      <div class="cotact">
        <form class="die-form" action="https://formsubmit.co/ahmedeweiso@gmail.com" method="POST">
          <!-- Hidden Inputs for FormSubmit -->
          <input type="hidden" name="_subject" value="New Message from Your Portfolio">
          <input type="hidden" name="_next" value="https://your-portfolio-url.com/thank-you.html">
          <input type="hidden" name="_captcha" value="false">

          <!-- Form Content -->
          <div class="icon">
            <img src="../assets/img/brand_logo.png" class="icon-special" />
          </div>
          <h2>Get Started today</h2>
          <div class="look-box">
            <div class="look-content">
              <span>Name</span>
              <input type="text" class="look-field" name="name" required />
            </div>
            <div class="look-content">
              <span>E-Mail</span>
              <input type="email" class="look-field" name="email" required />
            </div>
            <div class="look-content">
              <span>Budget</span>
              <input type="text" class="look-field" name="budget" required />
            </div>
            <div class="look-content">
              <span>Subject</span>
              <input type="text" class="look-field" name="subject" required />
              <div>form new upload</div>
            </div>
            <textarea class="styled-textarea" name="message" placeholder="Enter your text here..." required></textarea>
          </div>
          <button type="submit" class="sen-btn">Send</button>
        </form>
      </div>
      <div class="langauges">
        <div class="services-tilte">
          <span>Skills</span>
          <h2>My Technical Skills.</h2>
        </div>
        <div class="cols">
          <div class="col">
            <div class="min-col">
              <img class="icon2-m" />
              <h2>Front-End</h2>
            </div>
            <div class="min-col">
              <img class="icon2-m" src="../assets/img/skills/Html.png" />
              <h3>Html</h3>
            </div>
            <div class="min-col">
              <img class="icon2-m" src="../assets/img/skills/css.png" />
              <h3>Css</h3>
            </div>
            <div class="min-col">
              <img class="icon2-m" src="../assets/img/skills/js.png" />
              <h3>JS</h3>
            </div>
            <div class="min-col">
              <img class="icon2-m" src="../assets/img/skills/vue.png" />
              <h3>Vue Js</h3>
            </div>
          </div>
          <div class="col">
            <div class="min-col">
              <img class="icon2-m" />
              <h2>Back-End</h2>
            </div>
            <!-- <div class="min-col">
              <img class="icon2-m" />
              <h3>Php</h3>
            </div> -->
            <div class="min-col">
              <img class="icon2-m" src="../assets/img/skills/nodejs.png" />
              <h3>Node Js</h3>
            </div>
            <!-- <div class="min-col">
              <img class="icon2-m" />
              <h3>Laravel</h3>
            </div> -->
          </div>
          <div class="col">
            <div class="min-col">
              <img class="icon2-m" />
              <h2>Data Base</h2>
            </div>
            <div class="min-col">
              <img class="icon2-m" src="../assets/img/skills/postgress.png" />
              <h3>Postgres</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 1 Lang  -->




    <!-- 0 timeline -->
    <h2 class="time-line-head">Education & Experience</h2>
    <section class="timeline" id="experience">
      <div class="timeline-content dis">
        <h1>educations | Courses</h1>
      </div>
      <div class="timeline-item disapper">
        <div class="timeline-icon">
          <img src="../assets/img/degree-cap.png" class="icon2" />
        </div>
        <div class="timeline-content">
          <h1>educations</h1>
        </div>
      </div>
      <div class="timeline-item disapper">
        <div class="timeline-icon">
          <img src="../assets/img/bag.png" class="icon2" />
        </div>
        <div class="timeline-content">
          <h1>work experince</h1>
        </div>
      </div>

      <div class="timeline-item">
        <!-- <div class="timeline-icon"><i class="fas fa-briefcase"></i></div> -->
        <div class="timeline-content">
          <h3>Bachelor in Computer Science</h3>
          <span>Helwan University</span>
          <span class="timeline-date">Septemper 2019 - July 2023</span>
          <p>Studied core programming, data structures, and modern web development techniques.</p>
        </div>
      </div>

      <div class="timeline-item">
        <!-- <div class="timeline-icon"><i class="fas fa-briefcase"></i></div> -->
        <div class="timeline-content">
          <h3>Data Collector</h3>
          <span>StatsBomb Company</span>
          <span class="timeline-date">March 2022 - September 2022</span>
          <p>Gathered data from freeze-frame images using a desktop app .</p>
        </div>
      </div>

      <div class="timeline-item">
        <!-- <div class="timeline-icon"><i class="fas fa-briefcase"></i></div> -->
        <div class="timeline-content">
          <h3>Minders Workshops</h3>
          <span>Minders</span>
          <span class="timeline-date">Augast 2021 - October 2021 .</span>
          <p>Completed workshops focusing on creating responsive websites</p>
        </div>
      </div>

      <div class="timeline-item" style="visibility: hidden;"></div>
      <div class="timeline-item">
        <!-- <div class="timeline-icon"><i class="fas fa-graduation-cap"></i></div> -->
        <div class="timeline-content">
          <h3>Web Devolpment professional Tracke</h3>
          <span>Udacity</span>
          <span class="timeline-date">January 2022 - April 2022 .</span>
          <p>Studied core programming, data structures, and modern web development techniques.</p>
        </div>
      </div>
      <!-- Add more timeline items as needed -->
    </section>
    <!-- 1 timeline -->
    <!-- 0 certifcate  -->
    <section class="certifcate">
      <div class="container">
        <div class="services-tilte">
          <span class="tit">Certifications</span>
          <h2>Certified Skills <br>for a Digital World.</h2>
        </div>
        <div class="slider">
          <div class="slider-inner" :style="{ transform: `translateX(${offset}px)`, width: innerWidth + 'px' }">
            <img v-for="(image, index) in images" :key="index" :src="image" class="slide" @click="openModal(image)" />
          </div>
        </div>
        <!-- Full-Screen Image Modal -->
        <div v-if="isModalOpen" class="modal" @click.self="closeModal">
          <span class="close" @click="closeModal">&times;</span>
          <img class="modal-content" :src="currentImage" />
        </div>
      </div>
    </section>
    <!-- 1 certifcate -->
    <!-- 0 Quats -->
    <section class="talking" id="testimonials">
      <div class="container">
        <h2>What People Talk</h2>
        <span class="spano">About Me</span>
        <section class="testimonials">
          <!-- Left Avatars -->
          <div class="avatars">
            <a href="#" class="left-top" @click.prevent="showTestimonial(0)">
              <img :src="testimonials[0].avatar" class="floating" />
            </a>
            <a href="#" class="left-center" @click.prevent="showTestimonial(1)">
              <img :src="testimonials[1].avatar" class="floating" />
            </a>
            <a href="#" class="left-bottom" @click.prevent="showTestimonial(2)">
              <img :src="testimonials[2].avatar" class="floating" />
            </a>
          </div>

          <!-- Testimonial Container -->
          <div class="testimonial-container">
            <div class="testimonial">
              <img :src="currentTestimonial.avatar" alt="Profile" class="main-profile" />
              <p class="quote">
                <span class="fonty spano">&ldquo;</span>
                {{ currentTestimonial.details }}
                <span class="fonty spano" style="margin-top: -26px">&bdquo;</span>
              </p>
              <h3>{{ currentTestimonial.name }}</h3>
              <p class="position">
                {{ currentTestimonial.position }} - {{ currentTestimonial.company }}
              </p>
            </div>

            <!-- Arrows -->
            <div class="arrows">
              <span class="arrow left spano" @click="previousTestimonial">&#8592;</span>
              <span class="arrow right spano" @click="nextTestimonial">&#8594;</span>
            </div>
          </div>

          <!-- Right Avatars -->
          <div class="avatars">
            <a href="#" class="right-top" @click.prevent="showTestimonial(3)">
              <img :src="testimonials[3].avatar" class="floating" />
            </a>
            <a href="#" class="right-center" @click.prevent="showTestimonial(4)">
              <img :src="testimonials[4].avatar" class="floating" />
            </a>
            <a href="#" class="right-bottom" @click.prevent="showTestimonial(5)">
              <img :src="testimonials[5].avatar" class="floating" />
            </a>
          </div>
        </section>
      </div>
    </section>
    <!-- 1 Quats -->
    <!-- 0 footer -->
    <footer class="foot">
      <div class="container">
        <div class="up-footer">
          <div class="one-col">
            <div class="icon2sy">
              <a href class="brand-link brand-linkII">
                <div class="logo">
                  <img src="../assets/img/brand_logo.png" class="icon-special">
                </div>
                Falcon
                <span style="color:red;">&nbsp;Core</span>
              </a>
            </div>
            <div class="services-tilte">
              <span class="tit">Success Stories</span>
              <h4>
                "Success is Closer Than You Think".
              </h4>
              <ul class="socila-icons">
                <li class="li-item">
                  <a href="#" class="youtube-link">
                    <svg class="youtube-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                      <path
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                    </svg>
                  </a>
                </li>
                <li class="li-item">
                  <a href="#" class="youtube-link">
                    <svg class="youtube-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                      <path
                        d="M279.14 288l14.22-92.66h-88.91V140.62c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.61 0 225.36 0C141.09 0 89.09 54.42 89.09 143.39V195.3H0v92.66h89.09V512h107.78V288z" />
                    </svg>
                  </a>
                </li>
                <li class="li-item">
                  <a href="#" class="youtube-link">
                    <svg class="youtube-svg" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                      <path
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.975 12.995 1.624 20.167 1.624 9.421 0 18.843-1.299 27.614-3.573-48.081-9.747-84.143-51.98-84.143-103.001v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.502 46.782-104.283 104.281-104.283 30.214 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.502 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                    </svg>
                  </a>
                </li>
                <li class="li-item">
                  <a href="#" class="youtube-link">
                    <svg class="youtube-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path
                        d="M380.9 97.1c-92.8-92.8-243.5-92.8-336.3 0-89.2 89.2-92.6 231.1-10.3 325.1L7.1 507.7c-9.3 9.3-2.7 25.1 10.4 25.1h.3l96.6-23.9c92 59.3 213.1 47.6 292.9-32.2 92.8-92.8 92.8-243.5 0-336.3zm-51.3 285c-6.5 18.2-37.5 33.5-52.1 34.4-13.3.8-30.8 1.6-98.2-30.6-82.2-38.3-135.6-132.4-139.8-138.6-4.1-6.2-33.5-44.5-33.5-84.7s21.3-59.7 30.4-68.1c6.7-6.4 17.9-9.2 28.5-6.1s71.2 32.9 83.2 38.1c11.2 5 18.7 8.3 20.8 13.8 2.6 6.7 2.6 15.4 1.8 19.6-4.8 23.2-16.2 39.4-31.1 52.3-5.2 4.5-11.3 12.1-16.2 16.2-5.4 4.4-10.9 9.1-4.7 18.2 6 9 26.6 43.7 57.1 70.8 39.4 34.4 72.8 45.3 82.7 50.1 8.1 4.1 18.1 3.6 24.1-2.2 7.5-6.4 16.7-21.9 26.3-32.2 6.6-7.2 15-8.1 24.8-5.3 9.8 2.8 61.8 29.1 72.4 34.3 10.6 5.2 17.7 7.9 20.3 12.5 2.5 4.6 2.5 26.6-3.7 44.8z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="one-col servo">
            <h2>Servcieses</h2>
            <div class>
              <p>Web Development</p>
              <p>Web design</p>
              <p>Ui Coding</p>
              <p>Api Connects</p>
              <p>Improve SEO</p>
              <p>Responsive Design</p>
              <!-- <p>Web Development</p>
              <p>App Development</p>
              <p>Coud Engineering</p>
              <p>Strategy & Research</p>
              <p>Digital Agency</p>
              <p>UI/UX Design</p> -->
            </div>
          </div>
          <div class="one-col">
            <h2>Contacts</h2>
            <div class="contacty">
              <div class="contact-row">
                <img src="../assets/img/call.png" class="icon2" />
                <div>
                  <p>+20 1153161437</p>
                  <p>+20 1093057107</p>
                </div>
              </div>
            </div>
            <div class="contacty">
              <div class="contact-row">
                <img src="../assets/img/gmail.png" class="icon2" />
                <div>
                  <p>Ahmedeweiso@gmail.com</p>
                  <p>elkaseh95@gmail.com</p>
                </div>
              </div>
            </div>
            <div class="contacty">
              <div class="contact-row">
                <img src="../assets/img/placeholder.png" class="icon2" />
                <div>
                  <p>168/170 , Avenue 01 , mirpur</p>
                  <p>Cairo ,Egypt</p>
                </div>
              </div>
            </div>
          </div>
          <div class="photoos">
            <div>
              <div class="backgrond">
                <img src="../assets/img/imgs/gallery-07.png" class="icon2-L" />
              </div>
              <div class="backgrond">
                <img src="../assets/img/imgs/gallery-06.png" class="icon2-L" />
              </div>
            </div>

            <div>
              <div class="backgrond">
                <img src="../assets/img/imgs/gallery-02.png" class="icon2-L" />
              </div>
              <div class="backgrond">
                <img src="../assets/img/imgs/gallery-04.png" class="icon2-L" />
              </div>
            </div>
          </div>
        </div>
        <div class="down-footer">
          <div class="fr-d">F.design</div>
          <div>© 2025 All Rights Reserved | Design by Ahmed Eweis</div>
          <div>Privacy Policy . Terms and Conditions</div>
        </div>
      </div>
    </footer>
    <!-- 1 footer -->

    <!-- 0  -->
    <section class>
      <div class="container"></div>
    </section>
    <!-- 1 -->

    <!-- 0  -->
    <section class>
      <div class="container"></div>
    </section>
    <!-- 1 -->

  </section>
</template>

<script>
export default {
  data() {
    return {
      shows: "0",
      images: [
        require("@/assets/certifcate/cer1.png"),
        require("@/assets/certifcate/cer2.png"),
        require("@/assets/certifcate/cer3.png"),
        require("@/assets/certifcate/cer4.png"),
        require("@/assets/certifcate/cer5.png"),
        require("@/assets/certifcate/cer6.png")
      ],
      currentIndex: 0,
      offset: 0,
      slideWidth: 370, // 350px for image + 10px margin-left + 10px margin-right
      isModalOpen: false,
      currentImage: "",
      isMoreVisible: false,
      testimonials: [
        {
          id: 1,
          name: "John Doe",
          details: "Working with this team was an absolute pleasure. Their attention to detail and creative approach helped us achieve our goals faster than expected. Highly recommended!",
          position: "CEO",
          company: "Pixel Lab",
          avatar: require("@/assets/img/avatars/300-14.jpg"),
        },
        {
          id: 2,
          name: "Jane Smith",
          details: "The level of professionalism and expertise is unmatched. They delivered a flawless product that exceeded our expectations. Truly a game-changer for our business.",
          position: "CTO",
          company: "Tech Solutions",
          avatar: require("@/assets/img/avatars/300-27.jpg"),
        },
        {
          id: 3,
          name: "Ahmed Mohamed",
          details: "I was impressed by their ability to understand our vision and turn it into reality. The team is highly skilled and always delivers on time. Great work!",
          position: "Software Engineer",
          company: "CodeCraft",
          avatar: require("@/assets/img/avatars/300-4.jpg"),
        },
        {
          id: 4,
          name: "Wessam Ali",
          details: "Their innovative solutions helped us streamline our processes and improve efficiency. The team is reliable, creative, and always goes the extra mile.",
          position: "Product Manager",
          company: "InnovateX",
          avatar: require("@/assets/img/avatars/300-6.jpg"),
        },
        {
          id: 5,
          name: "Omar Hassan",
          details: "The team's dedication and expertise are second to none. They transformed our ideas into a stunning product that our users love. Thank you for your hard work!",
          position: "UI/UX Designer",
          company: "DesignHub",
          avatar: require("@/assets/img/avatars/300-9.jpg"),
        },
        {
          id: 6,
          name: "Hamza Showkat",
          details: "From start to finish, the team was professional and responsive. They delivered a high-quality product that has significantly boosted our online presence.",
          position: "Marketing Director",
          company: "Digital Boost",
          avatar: require("@/assets/img/avatars/300-20.jpg"),
        },
        {
          id: 7,
          name: "Harash Taka",
          details: "Their technical expertise and creative solutions helped us overcome complex challenges. The team is a pleasure to work with, and the results speak for themselves.",
          position: "Project Manager",
          company: "Tech Innovators",
          avatar: require("@/assets/img/avatars/300-22.jpg"),
        },
      ],
      currentTestimonialIndex: 0,
    };

  },
  computed: {
    innerWidth() {
      return this.images.length * this.slideWidth;
    },
    visibleSlides() {
      return Math.floor(this.$refs.slider.offsetWidth / this.slideWidth);
    },
    currentTestimonial() {
      return this.testimonials[this.currentTestimonialIndex];
    },
  },
  mounted() {
    window.addEventListener("resize", this.updateOffset);
    setInterval(this.showSlides, 3000); // Change slide every 5 seconds
  },
  methods: {
    toggleMenu() {
      const naviList = document.getElementById("navi-list");
      naviList.classList.toggle("active");
    },
    showo() {
      this.shows = this.shows === "0" ? "1" : "0";
      const alotSection = document.getElementById('pricing');
      if (alotSection) {
        alotSection.scrollIntoView({ behavior: 'smooth' });
      }
    },
    showSlides() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.updateOffset();
    },
    updateOffset() {
      this.offset = -this.currentIndex * this.slideWidth;
    },
    openModal(image) {
      this.currentImage = image;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.currentImage = "";
    },
    toggleno() {
      if (!this.isMoreVisible) {
        this.isMoreVisible = true;
      } else {
        this.isMoreVisible = false;
      }
    },
    scrollToSkills() {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        skillsSection.scrollIntoView({ behavior: 'smooth' });
      }
    },
    showTestimonial(index) {
      this.currentTestimonialIndex = index;
    },
    nextTestimonial() {
      this.currentTestimonialIndex =
        (this.currentTestimonialIndex + 1) % this.testimonials.length;
    },
    previousTestimonial() {
      this.currentTestimonialIndex =
        (this.currentTestimonialIndex - 1 + this.testimonials.length) %
        this.testimonials.length;
    },

  }
};
</script>

<style scoped>
@import "@/assets/style.css";
@import "@/assets/normalize.css";
</style>
