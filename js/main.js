/*============ CHANGE BACKGROUND HEADER ============*/
function scrollHeader() {
  let header = document.querySelector(".header");

  if (scrollY >= 50) {
    header.classList.add("scroll-header");
  }

  if (scrollY < 50) {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener('scroll',scrollHeader)


/*============ SWIPERJS Library ============*/
const swiperPopular = new Swiper('.popular__container', {
  // Global Optional parameters
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 32,
  slidesPerView: 'auto',


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


/*============ Accordion ============*/
let accordionItems = document.querySelectorAll('.accordion__item')
accordionItems.forEach(item => {
  let itemHeader = item.querySelector('.accordion__header')
  let itemContent = item.querySelector('.accordion__content')

  itemHeader.addEventListener('click', function () {
    if(itemContent.classList.contains('opened') === true) {
      item.classList.remove('item__opened')
      itemContent.classList.remove('opened')
      itemContent.style.height = '0px'
    }

    else {
      item.classList.add('item__opened')
      itemContent.classList.add('opened')
      itemContent.style.height = `${itemContent.scrollHeight}px`
    }
  })
})



/*============ Scroll Sections Active Link ============*/
let sections = document.querySelectorAll('section[id]')
function scrollActive() {
  sections.forEach(section => {
    let sectionTop = section.offsetTop - 58
    let sectionBottom = sectionTop + section.offsetHeight
    let sectionId = section.getAttribute('id')
    let sectionNavLink = document.querySelector(`.nav__menu a[href*='${sectionId}']`)

    if(scrollY > sectionTop && scrollY <= sectionBottom) {
      sectionNavLink.classList.add('active__link')
    }
    else {
      sectionNavLink.classList.remove('active__link')
    }

  })
}
window.addEventListener('scroll',scrollActive)



/*============ SCROLLUP ============*/
let scrollUp = document.querySelector('.scrollup')

window.onscroll = ()=> {
  scrollY > 400 ? scrollUp.classList.add('show') : scrollUp.classList.remove('show')
}



/*============ THEME CHANGER ============*/
let themeButton = document.querySelector('#theme__button')
let pageTheme = localStorage.getItem('pageTheme')
let body = document.body

if(pageTheme !== null && pageTheme === 'dark') {
    body.setAttribute('theme','dark')
    themeButton.classList.remove('bx-moon')
    themeButton.classList.add('bx-sun')
}

function themeFunction(theme,previousIcon,currentIcon) {
  body.setAttribute('theme',theme)
  themeButton.classList.remove(previousIcon)
  themeButton.classList.add(currentIcon)
  localStorage.setItem('pageTheme',theme)
  localStorage.setItem('themeIcon',currentIcon)
}

themeButton.onclick = ()=> {
  if(body.getAttribute('theme') === 'light') {
    themeFunction('dark','bx-moon','bx-sun')
  }
  else {
    themeFunction('light','bx-sun','bx-moon')
  }
}




/*============ SCROLLREVEAL ============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 300,
  reset: true
})

sr.reveal('.home__title, .popular__container, .subscribe__container, .footer__container')
sr.reveal('.home__description, .footer__info',{delay: 400})
sr.reveal('.home__search',{delay: 500})
sr.reveal('.home__value',{delay: 600})
sr.reveal('.home__images',{delay: 700 , origin: 'bottom'})
sr.reveal('.logo',{interval: 100})
sr.reveal('.value__images, .contact__images',{origin: 'left'})
sr.reveal('.value__content, .contact__content',{origin: 'right'})