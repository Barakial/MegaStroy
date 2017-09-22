/**
 * Created by Developer Barakial.com on 22.09.2017.
 */

var owl = $('.slider-discont');
owl.owlCarousel({
    items:1,
    loop:false,
    margin:0,
    dots: true,
    nav: true,
    navText: ["<i class='fa fa-caret-left shares-prev'></i>", "<i class='fa fa-caret-right shares-next'></i>"],
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});
$('#phone').mask("+38(099) 999-99-99");
$('#phone_2').mask("+38(099) 999-99-99");
$('#phone_3').mask("+38(099) 999-99-99");
$('#phone_4').mask("+38(099) 999-99-99");