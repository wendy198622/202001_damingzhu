new WOW().init();

var $mobile = $('#mobile'),
    $toggle = $mobile.find('.toggle'),
    $menu = $mobile.find('.wrap');

$(function () {

    $toggle.click(function (e) {
        $menu.slideToggle()
    });
});

$('.close').on('click', function () {
    $('.popup').removeClass('is-acted');
    $('input:text').val('');
    $('.message').val('');
});

$('.openphoto').on('click', function () {
    var index = $(".openphoto").index(this)
    // $('.popup_img').attr("src","img/popup3-" + (index + 1) + ".jpg")
    $('.popup_photo' + (index + 1)).addClass('is-acted');
});

$('.popup_close').on('click', function () {
    $('.popup_photo').removeClass('is-acted');
});

function showInfo(name) {
    console.log(name)
    if (name == "陳永振")
        $('.popup_info_1').addClass('is-acted');
    else if (name == "陳志誠")
        $('.popup_info_2').addClass('is-acted');
    else if (name == "邵唯晏")
        $('.popup_info_3').addClass('is-acted');
    else if (name == "金石獎")
        $('.popup_info_4').addClass('is-acted');
    else if (name == "綠化")
        $('.popup_info_5').addClass('is-acted');
    else if (name == "節能")
        $('.popup_info_6').addClass('is-acted');
    else if (name == "空氣")
        $('.popup_info_7').addClass('is-acted');
    else if (name == "安全")
        $('.popup_info_8').addClass('is-acted');
    else if (name == "淨水")
        $('.popup_info_9').addClass('is-acted');
    else if (name == "關照")
        $('.popup_info_10').addClass('is-acted');
    else if (name == "捷運圖")
        $('.popup_info_11').addClass('is-acted');
    else {

    }
}

function isMobile() {
    try { document.createEvent("TouchEvent"); return true; }
    catch (e) { return false; }
}


$('.gotopage').on('click', function () {
    if (isMobile()) {
        $menu.slideUp()
    }
    var gotopageid = "#gotopage_" + $(this).data().page
    $('html, body').animate({
        scrollTop: $(gotopageid).offset().top - $(".logo__img").height() + 1
    }, 1000)
});


$('.slider').slick({
    infinite: true,
    dots: true,
    // arrows: false,
    // draggable: false,
    slidesToShow: 1,
    adaptiveHeight: true
});

