<template>
  <section class="about">
    <!-- 0 header -->
    <header class="top" style="background-color: black">
      <div class="container" id="home">
        <nav class="navbar">
          <div class="icon2sy">
            <a href class="brand-link">
              <div class="logo">
                <div class="circle1"></div>
                <div class="circle2"></div>
              </div>
              <span class="char" style="background-color:red;">B</span>
              <!-- <span class="sec-name">B</span> -->
              linder
            </a>
          </div>
          <ul class="nav-list" id="navi-list">
            <li class="list-item">
              <a href="#home" class="ref">Home</a>
            </li>
            <li class="list-item">
              <a href="#Services" class="ref">Services</a>
            </li>
            <li class="list-item">
              <a href="#About" class="ref">About me</a>
            </li>
            <li class="list-item">
              <a href="#Projects" class="ref">Projects</a>
            </li>
            <li class="list-item">
              <a href="#skills" class="ref">Skills</a>
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
    <section class="land-top" id="home">
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
          <!-- #1st -->
          <a href="/fash/index.html" class="project" target="_blank">
            <img src="../assets/img/imgs/gallery-01.png" alt="none" class="p-cover" />
            <div class="info">
              <h2 class="p-title">Fashoin</h2>
            </div>
            <p>good design for fashoin ideas</p>
          </a>
          <!-- #2sd -->
          <a href="aqart/index.html" class="project" target="_blank">
            <img src="../assets/img/imgs/gallery-02.png" alt="none" class="p-cover" />
            <div class="info">
              <h2 class="p-title">Aqar Bot</h2>
            </div>
            <p>Landing page describe Bot</p>
          </a>
          <!-- #3rd -->
          <a href="/Scale/asset.html" class="project" target="_blank">
            <img src="../assets/img/pro1.png" alt="none" class="p-cover" />
            <div class="info">
              <h2 class="p-title">Scal</h2>
            </div>
            <p>Exam for students</p>
          </a>
          <!-- #4th -->
          <a href="#Projects" class="more">
            <div class="sub-more">
              <p class="p-link">More Projects</p>
            </div>
            <img src="../assets/img/arrow-left.png" class="icon2 arrow" />
          </a>
        </div>
      </div>
    </section>
    <!-- 1 top2 -->
    <!--  <div class=""></div> -->
    <!-- 1 jops  -->
    <section class="jops" id="Services">
      <div class="container">
        <div class="services-tilte">
          <span>what I can do</span>
          <h2>
            I work
            <br />Performed For
            <br />Client happy
          </h2>
          <button>View All services</button>
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
    <!-- 1 about me  -->
    <section class="about-me" id="About">
      <div class="container">
        <div class="about-me-info">
          <div class="services-tilte">
            <span>About me</span>
            <h2>Direction With Me.</h2>
            <p>
              Since 2020 I have served as a Front-end Developer,
              <br />where I have Develop
              many Systems ..
              <br />I also provide high-quality designs at the lowest possible cost ..
              <br />Which
              gives me a high chance for Make your website ..
            </p>
            <div class="meddile-about">
              <img src="../assets/img/trophy.png" class="icon2-L icon2-left" />
              <div>
                <h3 class="mession-h">My Mession</h3>
                <p>
                  I want to be best front-end in egypt and The Arab world
                  <br />make full websites make eyes happy
                </p>
              </div>
              <img src="../assets/img/eagle.png" class="icon2-L icon2-right" />
            </div>
            <button class="about-btn">About more</button>
          </div>
        </div>
        <div class="photo-box">
          <div class="photoo">
            <img src="../assets/img/3.jpg" />
          </div>
        </div>
      </div>
    </section>
    <!-- 1  about me  -->
    <!--  -->
    <section class="facts">
      <div class="container">
        <div class="fact">
          <img src="../assets/img/list.png" class="icon2-m" />
          <h2 class="number">27</h2>
          <h3>Projects completed</h3>
        </div>
        <div class="fact">
          <img src="../assets/img/reputation.png" class="icon2-m" />
          <h2 class="number">10</h2>
          <h3>satisfied clients</h3>
        </div>
        <div class="fact">
          <img src="../assets/img/responsive.png" class="icon2-m" />
          <h2 class="number">3</h2>
          <h3>Years experience</h3>
        </div>
        <div class="fact">
          <img src="../assets/img/trustworthiness.png" class="icon2-m" />
          <h2 class="number">11</h2>
          <h3>Certificates</h3>
        </div>
      </div>
    </section>
    <!--  -->
    <!-- Start Gallery -->
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
              8
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-01.png" alt />
          </div>
        </a>
        <a href="aqart/index.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Aqar Bot</h2>
            <h2>
              7
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
              6
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-03.png" alt />
          </div>
        </a>
        <a href="furniture/index.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Tumpas</h2>
            <h2>
              8
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-04.png" alt />
          </div>
        </a>
        <a href="Corpo-link/index.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Corpo Link</h2>
            <h2>
              8
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-05.png" alt />
          </div>
        </a>
        <span class="box curser" @click="showo">
          <div class="infoo">
            <h2></h2>
            <h2></h2>
          </div>
          <div class="image flexe">
            <h1>+22 More</h1>
            <button>View</button>
          </div>
        </span>
      </div>
    </div>
    <div class="gallery" v-if="shows === '1'">
      <div class="container">
        <a href="/Mallory/index.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Mallory</h2>
            <h2>
              8
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-06.png" alt />
          </div>
        </a>
        <a href="/Lava/index.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Lava</h2>
            <h2>
              8
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-07.png" alt />
          </div>
        </a>
        <a href="/AI/main_Series_page/main.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Movies</h2>
            <h2>
              8
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
              8
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-09.png" alt />
          </div>
        </a>
        <a href="/electricity-power/html/land.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Electricity Power</h2>
            <h2>
              8
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-10.png" alt />
          </div>
        </a>
        <a href="/FlyFly/index.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Fly Fly</h2>
            <h2>
              8
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-11.png" alt />
          </div>
        </a>
        <a href="/Author_Identifcation/index.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Author Identifcation</h2>
            <h2>
              8
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-12.png" alt />
          </div>
        </a>
        <a href="/land-matcher/index.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Land Matcher</h2>
            <h2>
              8
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-13.png" alt />
          </div>
        </a>
        <a href="/Light-Online/index.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Light Online</h2>
            <h2>
              8
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-14.png" alt />
          </div>
        </a>
        <a href="/research-gate-page/index.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Research Gate</h2>
            <h2>
              8
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-15.png" alt />
          </div>
        </a>
        
        <a href="/Leon/index.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Leon</h2>
            <h2>
              8
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-16.png" alt />
          </div>
        </a>
        <a href="/E-Commerce/index.html" class="box" target="_blank">
          <div class="infoo">
            <h2>E-Commerce</h2>
            <h2>
              8
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
              8
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
              8
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
              8
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-20.png" alt />
          </div>
        </a>
        <a href="/My-Website/my_web_site.html" class="box" target="_blank">
          <div class="infoo">
            <h2>My-Website</h2>
            <h2>
              8
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-21.png" alt />
          </div>
        </a>
        <a href="/Kasper/temp2.html" class="box" target="_blank">
          <div class="infoo">
            <h2>Kasper</h2>
            <h2>
              8
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-22.png" alt />
          </div>
        </a>
        <a href="https://mashrouk-apis.vercel.app/main" class="box" target="_blank">
          <div class="infoo">
            <h2>mashrouk</h2>
            <h2>
              8
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
              8
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <img src="../assets/img/imgs/gallery-24.png" alt />
          </div>
        </a>
        <a href="/Lava/index.html" class="box" target="_blank">
          <div class="infoo">
            <h2>soon</h2>
            <h2>
              soon
              <img src="../assets/img/star.png" class="icon2" />
            </h2>
          </div>
          <div class="image">
            <h1>+19 coming soon</h1>
          </div>
        </a>
      </div>
    </div>
    <!-- 1 Gallery -->
    <!-- 0 Lang -->
    <section class="langauge" id="skills">
      <div class="cotact">
        <form class="die-form">
          <div class="icon">
            <img src="../assets/img/web.png" class="icon2" />
          </div>
          <h2>Get Started today</h2>
          <div class="look-box">
            <div class="look-content">
              <span>Name</span>
              <input type="text" class="look-field" />
            </div>
            <div class="look-content">
              <span>E-Mail</span>
              <input type="email" class="look-field" />
            </div>
            <textarea class="styled-textarea" placeholder="Enter your text here..."></textarea>
          </div>
          <button class="sen-btn">Send</button>
        </form>
      </div>
      <div class="langauges">
        <div class="services-tilte">
          <span>SKills</span>
          <h2>My Languages Skills.</h2>
        </div>
        <div class="cols">
          <div class="col">
            <div class="min-col">
              <img class="icon2-m" />
              <h2>Front-End</h2>
            </div>
            <div class="min-col">
              <img class="icon2-m" />
              <h3>Html</h3>
            </div>
            <div class="min-col">
              <img src class />
              <h3>Css</h3>
            </div>
            <div class="min-col">
              <img src class />
              <h3>JS</h3>
            </div>
            <div class="min-col">
              <img src class />
              <h3>Vue Js</h3>
            </div>
          </div>
          <div class="col">
            <div class="min-col">
              <img src class />
              <h2>Back-End</h2>
            </div>
            <div class="min-col">
              <img src class />
              <h3>Php</h3>
            </div>
            <div class="min-col">
              <img src class />
              <h3>Node Js</h3>
            </div>
            <div class="min-col">
              <img src class />
              <h3>Laravel</h3>
            </div>
          </div>
          <div class="col">
            <div class="min-col">
              <img src class />
              <h2>Data Base</h2>
            </div>
            <div class="min-col">
              <img src class />
              <h3>Postgres</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 1 Lang  -->
    <!-- 0 certifcate  -->
    <section class="certifcate">
      <div class="container">
        <div class="services-tilte">
          <span class="tit">Case Stady</span>
          <h2 style="color:black;">
            Success is
            <br />Just Around The
            <br />Next Online Corner.
          </h2>
        </div>
        <div class="slider">
          <div
            class="slider-inner"
            :style="{ transform: `translateX(${offset}px)`, width: innerWidth + 'px' }"
          >
            <img
              v-for="(image, index) in images"
              :key="index"
              :src="image"
              class="slide"
              @click="openModal(image)"
            />
          </div>
        </div>
        <!-- Full-Screen Image Modal -->
        <div v-if="isModalOpen" class="modal" @click.self="closeModal">
          <span class="close" @click="closeModal">&times;</span>
          <img class="modal-content" :src="currentImage" />
        </div>
      </div>
    </section>
    <!-- 0  -->
    <footer class="foot">
      <div class="container">
        <div class="up-footer">
          <div class="one-col">
            <div class="icon2sy">
              <a href class="brand-link brand-linkII">
                <div class="logo">
                  <div class="circle1"></div>
                  <div class="circle2"></div>
                </div>
                <span class="char" style="background-color:red;">B</span>
                <!-- <span class="sec-name">B</span> -->
                linder
              </a>
            </div>
            <div class="services-tilte">
              <span class="tit">Case Stady</span>
              <h4>
                Success is
                Just Around The
                Next Online Corner.
              </h4>
              <ul class="socila-icons">
                <li class="li-item">
                  <a href="#" class="youtube-link">
                    <svg
                      class="youtube-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                      />
                    </svg>
                  </a>
                </li>
                <li class="li-item">
                  <a href="#" class="youtube-link">
                    <svg
                      class="youtube-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M279.14 288l14.22-92.66h-88.91V140.62c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.61 0 225.36 0C141.09 0 89.09 54.42 89.09 143.39V195.3H0v92.66h89.09V512h107.78V288z"
                      />
                    </svg>
                  </a>
                </li>
                <li class="li-item">
                  <a href="#" class="youtube-link">
                    <svg
                      class="youtube-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.975 12.995 1.624 20.167 1.624 9.421 0 18.843-1.299 27.614-3.573-48.081-9.747-84.143-51.98-84.143-103.001v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.502 46.782-104.283 104.281-104.283 30.214 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.502 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                      />
                    </svg>
                  </a>
                </li>
                <li class="li-item">
                  <a href="#" class="youtube-link">
                    <svg
                      class="youtube-svg"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        d="M380.9 97.1c-92.8-92.8-243.5-92.8-336.3 0-89.2 89.2-92.6 231.1-10.3 325.1L7.1 507.7c-9.3 9.3-2.7 25.1 10.4 25.1h.3l96.6-23.9c92 59.3 213.1 47.6 292.9-32.2 92.8-92.8 92.8-243.5 0-336.3zm-51.3 285c-6.5 18.2-37.5 33.5-52.1 34.4-13.3.8-30.8 1.6-98.2-30.6-82.2-38.3-135.6-132.4-139.8-138.6-4.1-6.2-33.5-44.5-33.5-84.7s21.3-59.7 30.4-68.1c6.7-6.4 17.9-9.2 28.5-6.1s71.2 32.9 83.2 38.1c11.2 5 18.7 8.3 20.8 13.8 2.6 6.7 2.6 15.4 1.8 19.6-4.8 23.2-16.2 39.4-31.1 52.3-5.2 4.5-11.3 12.1-16.2 16.2-5.4 4.4-10.9 9.1-4.7 18.2 6 9 26.6 43.7 57.1 70.8 39.4 34.4 72.8 45.3 82.7 50.1 8.1 4.1 18.1 3.6 24.1-2.2 7.5-6.4 16.7-21.9 26.3-32.2 6.6-7.2 15-8.1 24.8-5.3 9.8 2.8 61.8 29.1 72.4 34.3 10.6 5.2 17.7 7.9 20.3 12.5 2.5 4.6 2.5 26.6-3.7 44.8z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="one-col servo">
            <h2>Servcieses</h2>
            <div class="">
              <p>Web Development</p>
              <p>App Development</p>
              <p>Coud Engineering</p>
              <p>Strategy & Research</p>
              <p>Digital Agency</p>
              <p>UI/UX Design</p>
            </div>
          </div>
          <div class="one-col">
            <h2>Contacts</h2>
            <div class="contacty">
              <div class="contact-row">
                <img src="../assets/img/call.png" class="icon2" />
                <div><p>+20 1153161437</p>
                <p>+20 1093057107</p></div>
                
              </div>
            </div>
            <div class="contacty">
              <div class="contact-row">
                <img src="../assets/img/gmail.png" class="icon2" />
                <div><p>Ahmedeweiso@gmail.com</p>
                <p>elkaseh95@gmail.com</p></div>
                
              </div>
            </div>
            <div class="contacty">
              <div class="contact-row">
                <img src="../assets/img/placeholder.png" class="icon2" />
                <div><p>168/170 , Avenue 01 , mirpur</p>
                <p>DOHS , Bangladesh</p></div>

                
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
            <div class="fr-d">B.design</div>
            <div>© 2024 All Rights Reserved Blinder | Design by Ahmed Eweis</div>
            <div>Privacy Policy . Terms and Conditions</div>
          </div>
      </div>
    </footer>
    <!-- 1 -->
    <!-- 1 certifcate -->
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
      currentImage: ""
    };
  },
  computed: {
    innerWidth() {
      return this.images.length * this.slideWidth;
    },
    visibleSlides() {
      return Math.floor(this.$refs.slider.offsetWidth / this.slideWidth);
    }
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
    }
  }
};
</script>

<style scoped>
@import "@/assets/style.css";
@import "@/assets/normalize.css";
</style>
