window.addEventListener('load', function(){
    new Glider(document.querySelector('.slider__lista'), {
        slidesToShow: 'auto',
        itemWidth: 325,
        slidesToScroll: 6,
        dots: '.slider__indicadores',
        arrows: {
            prev: '.slider__anterior',
            next: '.slider__siguiente'
        }
    });
});
