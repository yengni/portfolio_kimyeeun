/* $('.cont5 .contin .thumnail').on('click', function(event){
    event.preventDefault();//a태그의 href기능을 막음
    $('.popup').show();
});
$('.popup').on('click', function(e){
    e.preventDefault();
    $('.popup').hide();
}); */

const thumnail_detail = document.querySelectorAll('#detailDesign .thumnail a')
const popup_detail = document.querySelector('#detailDesign .popup')
console.log(popup_detail)

for(i of thumnail_detail){
    i.addEventListener('click',function(e){
        e.preventDefault();
        console.log(this.children[0].src)
        popup_detail.style.display = 'block'
        popup_detail.children[0].src = this.children[0].src
        scrollbars = 1
        document.body.style.overflow = 'hidden'
    })
}

popup_detail.addEventListener('click',()=>{
    popup_detail.style.display = 'none'
    document.body.style.overflow = ''
})