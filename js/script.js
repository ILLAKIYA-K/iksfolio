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
