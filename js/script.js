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


let circularProgress= document.querySelector(".circular-progress"),
progressValue = document.querySelector(".progress-value")

let progressStartvalue = 0,
progressEndvalue = 95,
speed = 100;

let progress = setInterval(() => {
    progressStartvalue++;


progressValue.textContent = `${progressStartvalue}%`
circularProgress.style.background =`conic-gradient(#7d2ae8 ${progressStartvalue * 3.6}deg, #ededed 0deg)`

if(progressStartvalue == progressEndvalue){
    clearInterval(progress)
}


},speed);


let circularey= document.querySelector(".progressone"),
progressVa = document.querySelector(".valueone")

let progressStart = 0,
progressEnd = 95,
race = 100;

let progresses = setInterval(() => {
    progressStart++;


progressVa.textContent = `${progressStart}%`
circularey.style.background =`conic-gradient(#7d2ae8 ${progressStart * 3.6}deg, #ededed 0deg)`

if(progressStart == progressEnd){
    clearInterval(progresses)
}


},race);



let circularthre= document.querySelector(".progresstwo"),
progressthre = document.querySelector(".valuetwo")

let progressStarthre = 0,
progressEndthre = 90,
racethre = 100;

let progressthree = setInterval(() => {
    progressStarthre++;


progressthre.textContent = `${progressStarthre}%`
circularthre.style.background =`conic-gradient(#7d2ae8 ${progressStarthre * 3.6}deg, #ededed 0deg)`

if(progressStarthre == progressEndthre){
    clearInterval(progressthree)
}


},racethre);


let circularfour= document.querySelector(".progressfour"),
progressfour = document.querySelector(".valuefour")

let progressStartfour = 0,
progressEndfour = 87,
racefour = 100;

let progressfo = setInterval(() => {
    progressStartfour++;


progressfour.textContent = `${progressStartfour}%`
circularfour.style.background =`conic-gradient(#7d2ae8 ${progressStartfour * 3.6}deg, #ededed 0deg)`

if(progressStartfour == progressEndfour){
    clearInterval(progressfo)
}


},racefour);


let circularfive= document.querySelector(".progressfive"),
progressfive = document.querySelector(".valuefive")

let progressStartfive = 0,
progressEndfive = 45,
racefive = 100;

let progressfi = setInterval(() => {
    progressStartfive++;


progressfive.textContent = `${progressStartfive}%`
circularfive.style.background =`conic-gradient(#7d2ae8 ${progressStartfive * 3.6}deg, #ededed 0deg)`

if(progressStartfive == progressEndfive){
    clearInterval(progressfi)
}


},racefive);


let circularsix= document.querySelector(".progresssix"),
progresssix = document.querySelector(".valuesix")

let progressStartsix = 0,
progressEndsix = 40,
racesix = 100;

let progresssi = setInterval(() => {
    progressStartsix++;


progresssix.textContent = `${progressStartsix}%`
circularsix.style.background =`conic-gradient(#7d2ae8 ${progressStartsix * 3.6}deg, #ededed 0deg)`

if(progressStartsix == progressEndsix){
    clearInterval(progresssi)
}


},racesix);

