"use strict";$(document).ready((function(){$(".menu__btn").click((function(){$(".header__top").addClass("header__top--active"),$("body").addClass("overflow-hidden"),$("html").addClass("overflow-hidden"),$("body").addClass("bg-hide"),$(".menu__btn").css("opacity","0"),$(".menu__btn-mob").css("opacity","1"),$(".menu__btn-mob").css("display","flex")})),$(".menu__btn-mob").click((function(){hideWindiwsMenu()}))}));var hideWindiwsMenu=function(){$(".header__top").removeClass("header__top--active"),$("body").removeClass("overflow-hidden"),$("html").removeClass("overflow-hidden"),$("body").removeClass("bg-hide"),$(".menu__btn").css("opacity","1"),$(".menu__btn-mob").css("opacity","0"),$(".menu__btn-mob").css("display","none")};$(".ticker").simplemarquee({speed:50,cycles:1/0,space:25,delayBetweenCycles:.1,handleHover:!0,handleResize:!1});var animItems=document.querySelectorAll("._anim-items");if(console.log("window"),animItems.length>0){var animOnScroll=function(){for(var e=0;e<animItems.length;e++){var a=animItems[e],o=a.offsetHeight,t=offset(a).top,n=window.innerHeight-o/4;o>window.innerHeight&&(n=window.innerHeight-window.innerHeight/4),pageYOffset>t-n&&pageYOffset<t+o?a.classList.add("_active"):a.classList.contains("_anim-not")||a.classList.remove("_active")}},offset=function(e){var a=e.getBoundingClientRect(),o=window.pageXOffset||document.documentElement.scrollLeft,t=window.pageYOffset||document.documentElement.scrollTop;return{top:a.top+t,left:a.left+o}};window.addEventListener("scroll",animOnScroll),setTimeout((function(){animOnScroll()}),300)}function copyData(e){var a=document.createRange();a.selectNode(e),window.getSelection().removeAllRanges(),window.getSelection().addRange(a),document.execCommand("copy"),window.getSelection().removeAllRanges()}function copyDataTwo(e){var a=document.createRange();a.selectNode(e),window.getSelection().removeAllRanges(),window.getSelection().addRange(a),document.execCommand("copy"),window.getSelection().removeAllRanges()}$("body").width()<=930&&($(".roadmap__header--oct").addClass("active"),$(".roadmap__content--oct").addClass("active"),$(".roadmap__content--oct").children("ul").addClass("_active")),$(".roadmap__header--oct span").hover((function(){$(".roadmap__header--oct").addClass("active"),$(".roadmap__content--oct").addClass("active"),$(".roadmap__line-oct:last").addClass("active"),$(".roadmap__content--oct").children("ul").addClass("_active")}),(function(){$(".roadmap__header--oct").removeClass("active"),$(".roadmap__content--oct").removeClass("active"),$(".roadmap__line-oct:last").removeClass("active"),$(".roadmap__content--oct").children("ul").removeClass("_active")})),$(".roadmap__header--nov span").hover((function(){$(".roadmap__header--nov").addClass("active"),$(".roadmap__header--oct").addClass("active--nov"),$(".roadmap__content--nov").addClass("active"),$(".roadmap__line-nov:last").addClass("active"),$(".roadmap__content--nov").children("ul").addClass("_active"),$("body").width()<=930&&($(".roadmap__header--oct").removeClass("active"),$(".roadmap__content--oct").removeClass("active"))}),(function(){$(".roadmap__header--nov").removeClass("active"),$(".roadmap__header--oct").removeClass("active--nov"),$(".roadmap__content--nov").removeClass("active"),$(".roadmap__line-nov:last").removeClass("active"),$(".roadmap__content--nov").children("ul").removeClass("_active")})),$(".roadmap__header--ter span").hover((function(){$(".roadmap__header--ter").addClass("active"),$(".roadmap__header--nov").addClass("active--ter"),$(".roadmap__header--oct").addClass("active--nov"),$(".roadmap__content--ter").addClass("active"),$(".roadmap__line-ter:last").addClass("active"),$(".roadmap__content--ter").children("ul").addClass("_active"),$("body").width()<=930&&($(".roadmap__header--oct").removeClass("active"),$(".roadmap__content--oct").removeClass("active"))}),(function(){$(".roadmap__header--ter").removeClass("active"),$(".roadmap__header--nov").removeClass("active--ter"),$(".roadmap__header--oct").removeClass("active--nov"),$(".roadmap__content--ter").removeClass("active"),$(".roadmap__line-ter:last").removeClass("active"),$(".roadmap__content--ter").children("ul").removeClass("_active")})),$(".roadmap__content--oct").hover((function(){$(".roadmap__header--oct").addClass("active"),$(".roadmap__content--oct").addClass("active"),$(".roadmap__line-oct:last").addClass("active"),$(".roadmap__content--oct").children("ul").addClass("_active")}),(function(){$(".roadmap__header--oct").removeClass("active"),$(".roadmap__content--oct").removeClass("active"),$(".roadmap__line-oct:last").removeClass("active"),$(".roadmap__content--oct").children("ul").removeClass("_active")})),$(".roadmap__content--nov").hover((function(){$(".roadmap__header--nov").addClass("active"),$(".roadmap__header--oct").addClass("active--nov"),$(".roadmap__content--nov").addClass("active"),$(".roadmap__line-nov:last").addClass("active"),$(".roadmap__content--nov").children("ul").addClass("_active"),$("body").width()<=930&&($(".roadmap__header--oct").removeClass("active"),$(".roadmap__content--oct").removeClass("active"))}),(function(){$(".roadmap__header--nov").removeClass("active"),$(".roadmap__header--oct").removeClass("active--nov"),$(".roadmap__content--nov").removeClass("active"),$(".roadmap__line-nov:last").removeClass("active"),$(".roadmap__content--nov").children("ul").removeClass("_active")})),$(".roadmap__content--ter").hover((function(){$(".roadmap__header--ter").addClass("active"),$(".roadmap__header--nov").addClass("active--ter"),$(".roadmap__header--oct").addClass("active--nov"),$(".roadmap__content--ter").addClass("active"),$(".roadmap__line-ter:last").addClass("active"),$(".roadmap__content--ter").children("ul").addClass("_active"),$("body").width()<=930&&($(".roadmap__header--oct").removeClass("active"),$(".roadmap__content--oct").removeClass("active"))}),(function(){$(".roadmap__header--ter").removeClass("active"),$(".roadmap__header--nov").removeClass("active--ter"),$(".roadmap__header--oct").removeClass("active--nov"),$(".roadmap__content--ter").removeClass("active"),$(".roadmap__line-ter:last").removeClass("active"),$(".roadmap__content--ter").children("ul").removeClass("_active")})),$("body").width()<=768&&$(".app-mob__items").slick({arrows:!1,infinite:!1,swipeToSlide:!0}),$(".address__copy-btn").hover((function(){$(".address__popup--one").addClass("active")}),(function(){$(".address__popup--one").removeClass("active")})),$(".contactUs__copy-btn").hover((function(){$(".address__popup--tow").addClass("active")}),(function(){$(".address__popup--tow").removeClass("active")})),$(".address__copy-btn").click((function(){$(".address__popup--one-copy").addClass("active"),$(".address__popup--one").removeClass("active"),setTimeout((function(){$(".address__popup--one-copy").removeClass("active")}),2e3)})),$(".contactUs__copy-btn").click((function(){$(".address__popup--tow-copy").addClass("active"),$(".address__popup--tow").removeClass("active"),setTimeout((function(){$(".address__popup--tow-copy").removeClass("active")}),2e3)}));var scrolling=!1;$(window).scroll((function(e){scrolling=!0,console.log("event")})),setInterval((function(){scrolling?(scrolling=!1,$(".menu__btn").removeClass("_active")):(console.log("false"),$(".menu__btn").addClass("_active"))}),500),console.log("maxgraph");