"use strict"

$(document).ready(function () {
   $(window).scroll(function () {
      let scroll = $(window).scrollTop()
      let buttonBackToTop = $(".button-back-to-top")

      if (scroll >= 64) {
         buttonBackToTop.addClass("status-active")
      } else {
         buttonBackToTop.removeClass("status-active")
      }
   })
})
