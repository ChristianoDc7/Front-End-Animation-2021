

function scrollApear(){
    var text1=document.querySelector('.section2_description');
    var tits = document.querySelector('.tits')
    var tit2 = document.querySelector('.cont2_title2')
    var box= document.querySelector('.boxx')
    var textaf = document.querySelector('.txtlef')
    var imgslide= document.querySelector('.leftc')
    var titpos = tits.getBoundingClientRect().top
    var text1pos= text1.getBoundingClientRect().top;
    var screenpos= window.innerHeight / 2
    if(titpos<screenpos){
        text1.classList.add('appearp')
        tits.classList.add('appeart')
        tit2.classList.add('appeart')
        box.classList.add('appearb')
        textaf.classList.add('txtlefap')
        imgslide.classList.add('leftcap')
    }
}
 

window.addEventListener('scroll',scrollApear)

const previousbtn = document.querySelector('.prev')
const nextbtn = document.querySelector('.next')
const main = document.querySelector('.main')

previousbtn.onclick = function(){
        main.scrollLeft -= 650

}
nextbtn.onclick = function(){
    main.scrollLeft += 650
}