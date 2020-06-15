// $(function(){
//     // $('#typo').css('color', '#ebc000');
//     // $('#typo .inner').css('transform', 'rotate(10deg)');
//     // $('.page-main > div:nth-child(1) .inner').css('opacity', 0.5);
//     $('#typo').on('click', function(){
//         $('#typo').css('background-color', '#ae5e9b')
//         $('header').css('color', '#ae5e9b')
//     })
// });
// $(function(){
//     $('#typo').on('mouseover', function(){
//         $('#typo').css({
//             color: '#ebc000',
//             backgroundColor: '#ae5e9b'
//         })
//     })
//     $('#typo').on('mouseout', function(){
//         $('#typo').css({
//             color: '',
//             backgroundColor: ''
//         })
//     })
// });
// $(function(){
//     $('#typo').on('click', function(){
//         $('#typo .inner').animate({
//             color: '#ebc000'
//         },
//         1500
//         );
//     });
// });
$(function(){
    $('#typo').on('mouseover', function(){
        $('#typo').stop(true).animate(
            {
                backgroundColor: '#ae5e9b'
            },
            500
        );
    })
    .on('mouseout', function(){
        $('#typo').stop(true).animate(
            {
                backgroundColor: '#3498db'
            },
            500
        );
    });
});