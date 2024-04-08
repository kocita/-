new Swiper('.image-slider',{
    navigation:
    {
        
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination:
    {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    slidesPerView: 3,
    loop: true,
  
});
function smoothScroll(target) {
    var targetElement = document.getElementById(target);
    targetElement.scrollIntoView({ behavior: 'smooth' });
}

// считываем кнопку
const goTopBtn = document.querySelector(".go-top");

// обработчик на скролл окна
window.addEventListener("scroll", trackScroll);
// обработчик на нажатии
goTopBtn.addEventListener("click", goTop);

function trackScroll() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;
  if (scrolled > coords) {
    goTopBtn.classList.add("go-top--show");
  } else {
    goTopBtn.classList.remove("go-top--show");
  }
}

function goTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -40); 
    setTimeout(goTop, 0); 
  }
}

window.addEventListener('scroll', function() {
    let banner = document.querySelector('.shapka');
    let scrollPosition = window.scrollY;

    if (scrollPosition > 100) { 
        banner.style.top = 0; 
        banner.style.height = 'calc(var(--index)*4)'; 
    } else {
        banner.style.height = 'calc(var(--index)*5)'; 
    }
});