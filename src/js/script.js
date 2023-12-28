window.onload


function changeText() {
let i = document.querySelector(".instagram").textContent = ("joshgunlynesil")
let f = document.querySelector(".instagram").style.cssText = "color: #051a46; font-weight:800; transition: 0.5s all"
}
function changeTextAgain() {
    let i = document.querySelector(".instagram").textContent = ("Instagram")
    let f = document.querySelector(".instagram").style.cssText = "style:none; transition: 0.5s all"
    
    }



function changeColor() {
    let x = document.querySelector(".mail").style.cssText = "color: #051a46; font-weight:800; transition: 0.5s all"
    let y = document.querySelector(".phone-contact").style.cssText = "color: #051a46; font-weight:800; transition: 0.5s all"
    let z = document.querySelector(".adress").style.cssText = "color: #051a46; font-weight:800; transition: 0.5s all"
}

function changeColorAgain() {
    let x = document.querySelector(".mail").style.cssText = "style:none; transition: 0.5s all"
    let y = document.querySelector(".phone-contact").style.cssText = "style:none; transition: 0.5s all"
    let z = document.querySelector(".adress").style.cssText = "style:none; transition: 0.5s all"
    }

document.querySelector(".hamburger").addEventListener("click", function() {
    document.querySelector(".menu").classList.toggle("menu_active")
    document.querySelector(".hamburger").classList.toggle("hamburger_active")
})


document.addEventListener('DOMContentLoaded', function() {
  let blocks = document.querySelectorAll('.my-container');

  function checkBlocksVisibility() {
      let windowHeight = window.innerHeight;

      blocks.forEach(block => {
          let blockPosition = block.getBoundingClientRect().top;

          if (blockPosition < windowHeight - 100) {
              block.style.opacity = "1";
              block.style.transform = "translateY(0)";
          }
      });
  }

  checkBlocksVisibility();

  window.addEventListener('scroll', function() {
      checkBlocksVisibility();
  });
});



const swiper = new Swiper('.swiper-container', {
    loop: true, 
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false, 
    },
    speed: 3000,
    
    slidesPerView: 3,
    slidesPerGroup: 3,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});



document.addEventListener('DOMContentLoaded', function () {
  let toggleButton = document.querySelector('.service_button');
  let toggleBlocks = document.querySelectorAll('.microinvest_item');

  toggleButton.addEventListener('click', function() {
    toggleBlocks.forEach(function(block) {
      block.classList.toggle('active');
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  let toggleButton2 = document.querySelector('.audit_button');
  let toggleBlock2 = document.querySelector('.audit_block');

  toggleButton2.addEventListener('click', function() {
    toggleBlock2.classList.toggle('active');
  });
});



ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [37.90747155670431, 58.33792974972362],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 18,
            controls: []
        });
        myMap.setCenter([37.90747155670431, 58.33792974972362], 17);
        
        var myPlacemark = new ymaps.Placemark([37.90747022851372,58.33802697980042]);
        myMap.geoObjects.add(myPlacemark);
        myMap.controls.add('zoomControl');
    }



