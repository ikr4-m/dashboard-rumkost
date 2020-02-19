// /* global $ */
// $(function () {
//   const navbar = $('.navbar-dashboard')
//   const offset = 100

//   if ($(document).find('.jmbtrn').length === 0) {
//     navbar.addClass('navbar-scroll')
//     return undefined
//   }

//   $(window).scroll(() => {
//     if (navbar.offset().top > offset || typeof navbar.data('popup') !== 'undefined') {
//       navbar.addClass('navbar-scroll', offset)
//     } else {
//       navbar.removeClass('navbar-scroll', offset)
//     }
//   })

//   $('.navbar-toggler').click(() => {
//     if (typeof navbar.data('popup') === 'undefined') {
//       navbar.addClass('navbar-scroll', offset)
//       navbar.data('popup', 'true')
//     } else {
//       navbar.removeData('popup')
//       if (navbar.offset().top < offset) {
//         navbar.removeClass('navbar-scroll', offset)
//       }
//     }
//   })
// })
