// anime({
//     targets: '.ball',
//     // translateX: ['40vw', '40vw', 0, 0],
//     // translateY: [0, '40vw', '40vw', 0],
//     // backgroundColor: ['#00ffff','#ff0000', '#00ff00', '#000000'],
//     keyframes: [
//         {
//             translateX: '40vw',
//             translateY: 0,
//             backgroundColor: '#00ffff', 
//             offset: '20%'
//         },
//         {
//             translateX: '40vw',
//             translateY: '40vw',
//             backgroundColor: '#ff0000', 
//             offset: '60%'
//         },
//         {
//             translateX: 0,
//             translateY: '40vw',
//             backgroundColor: '#00ff00', 
//             offset: '75%'
//         },
//         {
//             translateX: 0,
//             translateY: 0,
//             backgroundColor: '#000000', 
//             offset: '99%'
//         },
//     ],
//     duration: 3000,
//     loop: true,
//     easing: 'linear',
// });

anime({
    targets: '.ball',
    translateX: 270,
    loop: true,
    delay: anime.stagger(100, { direction: 'reverse'})
});

anime({
    targets: '.name-svg path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutQuad',
    duration: 3000
});