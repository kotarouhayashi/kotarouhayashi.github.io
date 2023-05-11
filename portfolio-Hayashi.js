// 左からfedein
$(function(){
    // フェードする前のcssを定義
    $('.anchor').css({
        opacity: 0,
        transform: 'translateX(-50px)'
    });

    // 一定値までスクロールしたらエフェクト開始
    $(window).scroll(function (){
        $(".anchor").each(function(){
            var midasiPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > midasiPos - windowHeight + windowHeight/5){
                $(this).css({
                    opacity: 1,
                    transform: 'translateX(0)',
                    transition: 1200 + 'ms'
                });
            }
        });
    });
});

// studyのコンテンツの設定、画像と動画
// $(function() {
//     $(".eff").hover(function(){
//       $(this).css({
//           opacity: 0.4,
//           width:"110%",

//           transition: 200 + 'ms'
//         },);
//     }, function(){
//       $(this).css({
//           opacity: 1.0,
//           width:'100%',
//           transition: 50 + 'ms'
//         },);
//     });
//   });
