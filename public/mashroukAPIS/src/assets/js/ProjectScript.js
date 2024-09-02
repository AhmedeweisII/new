/* 0 show label shen i get type input */
// document.addEventListener('DOMContentLoaded', () => {
//   const inputFields = document.querySelectorAll('.cell-entery');

//   inputFields.forEach((inputField, index) => {
//     const labelId = `absolutLabel${index + 1}`;
//     const absolutLabel = document.getElementById(labelId);

//     if (absolutLabel && inputField) {
//       inputField.addEventListener('input', () => {
//         absolutLabel.style.display = inputField.value.trim() === '' ? 'none' : 'block';
//       });
//     }
//   });
// });

/* 1 show label shen i get type input */

/* 0 upload photo boxes handle script */
// const uploadBoxes = document.querySelectorAll('.upload-box');

// uploadBoxes.forEach((box, index) => {
//   const fileInput = box.querySelector('.file-input');
//   const filePreview = box.querySelector('.file-preview');
//   const deleteIcon = box.querySelector('.delete-icon');

//   fileInput.addEventListener('change', function () {
//     const file = this.files[0];
//     if (file) {
//       const reader = new FileReader();
//       // eslint-disable-next-line func-names
//       reader.onload = function (e) {
//         filePreview.style.backgroundImage = `url('${e.target.result}')`;
//         filePreview.style.display = 'block';
//       };
//       reader.readAsDataURL(file);
//     }
//   });

//   deleteIcon.addEventListener('click', () => {
//     fileInput.value = 0;
//     filePreview.style.backgroundImage = '';
//     filePreview.style.display = 'none';
//   });
// });

/* 0 chat script */
// document.getElementById('toggleDiv').addEventListener('click', () => {
//   const hiddenDiv = document.getElementById('hiddenDiv');
//   if (hiddenDiv.style.display === 'none' || hiddenDiv.style.display === '') {
//     hiddenDiv.style.display = 'flex';
//   } else {
//     hiddenDiv.style.display = 'none';
//   }
// });
/* 0 chat script */

// /* 1 upload photo boxes handle script */

// /* 0 slider image script */
// const slider = document.querySelector('.slider');
// const slides = document.querySelectorAll('.slide');
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');
// const sliderNav = document.querySelector('.slider-nav'); // Store the nav container
// let currentIndex = 0;

// function showSlide(index) {
//   const slideWidth = slides[0].offsetWidth; // Get the width of a slide
//   const translateXValue = index * slideWidth;

//   // If the direction is RTL, reverse the translation direction
//   const { direction } = getComputedStyle(document.body);
//   if (direction === 'rtl') {
//     slider.style.transform = `translateX(${translateXValue}px)`;
//   } else {
//     slider.style.transform = `translateX(-${translateXValue}px)`;
//   }
// }

// function setActiveBullet(index) {
//   const bullets = sliderNav.querySelectorAll('button');
//   bullets.forEach((bullet, bulletIndex) => {
//     if (bulletIndex === index) {
//       // eslint-disable-next-line no-param-reassign
//       bullet.style.backgroundColor = 'rgb(2, 136, 209)'; // Set active bullet background
//     } else {
//       // eslint-disable-next-line no-param-reassign
//       bullet.style.backgroundColor = '#ddd'; // Reset other bullets' background
//     }
//   });
// }

// function prevSlide() {
//   currentIndex = (currentIndex + 1) % slides.length;
//   showSlide(currentIndex);
//   setActiveBullet(currentIndex); // Set active bullet on slide change
// }

// function nextSlide() {
//   currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//   showSlide(currentIndex);
//   setActiveBullet(currentIndex); // Set active bullet on slide change
// }

// prevBtn.addEventListener('click', prevSlide);
// nextBtn.addEventListener('click', nextSlide);

// slides.forEach((_, index) => {
//   const bullet = document.createElement('button');
//   bullet.textContent = '•';
//   bullet.addEventListener('click', () => {
//     showSlide(index);
//     setActiveBullet(index);
//   });
//   sliderNav.appendChild(bullet);
// });

// // Show the initial slide and set the active bullet
// showSlide(currentIndex);
// setActiveBullet(currentIndex);
// /* 1 slider image script */

// /**/

// /**/
