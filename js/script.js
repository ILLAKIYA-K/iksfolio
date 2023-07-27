const mainnav = document.querySelector('.main-nav');
const mainnavig = document.querySelector('.main-nav-list')
const btnone = document.querySelector('.btnse');
const btntwo = document.querySelector('.btn2');
// const overlay = document.querySelector('.overlay');


btnone.addEventListener('click',function(){
    mainnavig.classList.remove('hidden');
    document.querySelector('.btnse').style.color = '#886ee8';
    
})

btntwo.addEventListener('click',function(){
  mainnavig.classList.add('hidden');
  document.querySelector('.btnse').style.color = '#000';
})




const header = document.querySelector('.header')
const sect = document.querySelector('.section-head')
const clickhandle = function(entries){
const [entry] = entries

if(!entry.isIntersecting)
mainnav.classList.add('sticky')

else
mainnav.classList.remove('sticky')

}


const handleis = new IntersectionObserver(clickhandle, {
  root: null,
  threshold: 0,
})

handleis.observe(header)


const tabs = document.querySelectorAll('.operations__tab')
const tabcontainer = document.querySelector('.operations__tab-container');
const content = document.querySelectorAll('.operations__content ')

tabcontainer.addEventListener('click',function(e){
const clicked = e.target.closest('.operations__tab')

if(!clicked) return;

tabs.forEach(t => t.classList.remove('operations__tab--active'))
content.forEach(s => s.classList.remove('operations__content--active'))


clicked.classList.add('operations__tab--active');
document.querySelector(`.operations__content--${clicked.dataset.tab}`)
.classList.add('operations__content--active')
})

