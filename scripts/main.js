/* $('.cont5 .contin .thumnail').on('click', function(event){
    event.preventDefault();//a태그의 href기능을 막음
    $('.popup').show();
});
$('.popup').on('click', function(e){
    e.preventDefault();
    $('.popup').hide();
}); */
const sns = new Swiper(".sns_list", {
    slidesPerView: 3,
    spaceBetween: 40,
    autoplay : {delay:5000},
    loop: true,
    navigation:{
        prevEl : '.sns_list .swiper-button-prev',
        nextEl : '.sns_list .swiper-button-next',
    },
})
const bn = new Swiper(".bn_list", {
    slidesPerView: 2,
    spaceBetween: 50,
    autoplay : {delay:5000},
    loop: true,
    navigation:{
        prevEl : '.bn_list .swiper-button-prev',
        nextEl : '.bn_list .swiper-button-next',
    },
})
const thumnail_detail = document.querySelectorAll('#detailDesign .thumnail a')
const popup_detail = document.querySelector('#detailDesign .popup')
console.log(popup_detail)

for(i of thumnail_detail){
    i.addEventListener('click',function(e){
        e.preventDefault();
        console.log(this.children[0].src)
        popup_detail.style.display = 'block'
        popup_detail.scrollTo(0,0)
        popup_detail.children[0].src = this.children[0].src
        scrollbars = 1
        document.body.style.overflow = 'hidden'
    })
}

popup_detail.addEventListener('click',()=>{
    popup_detail.style.display = 'none'
    document.body.style.overflow = ''
})