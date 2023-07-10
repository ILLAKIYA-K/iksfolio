'use strict';

const mainnav = document.querySelector('.main-nav');
const btnone = document.querySelector('.btnse');
const btntwo = document.querySelector('.btn2');
// const overlay = document.querySelector('.overlay');


btnone.addEventListener('click',function(){
    mainnav.classList.remove('hidden');
    document.querySelector('.btnse').style.color = '#886ee8';
    
    
})

btntwo.addEventListener('click',function(){
  mainnav.classList.add('hidden');
    document.querySelector('.btnse').style.color = '#000';
    
})
