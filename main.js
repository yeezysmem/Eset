let lastScroll = 0;
const defaultOffset = 200;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageXOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('.active');

window.addEventListener('scroll', () => {

    if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset){
        header.classList.add('.active');
    }
    else if(scrollPosition() < lastScroll && !containHide()) {
        header.classList.remove('.active');
        //sctol up
    }
    
    



    lastScroll = scrollPosition();
})

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
 
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
 
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
         
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 100);
    });
});

 