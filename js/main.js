"use strict";

//toggle menu
$(document).ready(function () {
  $('.menu__btn').click(function () {
    $('.header__top').addClass('header__top--active');
    $('body').addClass('overflow-hidden');
    $('html').addClass('overflow-hidden');
    $('body').addClass('bg-hide');
    $('.menu__btn').css('opacity', '0');
    $('.menu__btn-mob').css('opacity', '1');
    $('.menu__btn-mob').css('display', 'flex');
  });
  $('.menu__btn-mob').click(function () {
    hideWindiwsMenu();
  });
});

var hideWindiwsMenu = function hideWindiwsMenu() {
  $('.header__top').removeClass('header__top--active');
  $('body').removeClass('overflow-hidden');
  $('html').removeClass('overflow-hidden');
  $('body').removeClass('bg-hide');
  $('.menu__btn').css('opacity', '1');
  $('.menu__btn-mob').css('opacity', '0');
  $('.menu__btn-mob').css('display', 'none');
}; //toggle menu
// $(document).ready(function () {
//   let ticker = document.querySelector('.ticker')
//     , list = document.querySelector('.ticker__list')
//     , clone = list.cloneNode(true)
//   ticker.append(clone)
// });


function lazyloadApp() {
  var wt = $(window).scrollTop(); //* top of the window

  var wb = wt + $(window).height(); //* bottom of the window

  $(".app").each(function () {
    var ot = $(this).offset().top; //* top of object (i.e. advertising div)

    var ob = ot + $(this).height(); //* bottom of object

    if (!$(this).attr("loaded") && wt <= ob && wb >= ot) {
      $(this).html("  <h3 class=\"app__title\">NFTNDR App</h3>\n" + "  <div class=\"app__wrapper\">\n" + "    <div class=\"app__inner\">\n" + "      <div class=\"app__item app__item--1\">\n" + "        <div class=\"app__icon\">\n" + "          <img src=\"./img/app/Start_conversation_icon.png\"\n" + "            srcset=\"./img/app/Start_conversation_icon.png 1x, ./img/app/x2/Start_conversation_icon.png 2x\" alt=\"icon\">\n" + "        </div>\n" + "        <div class=\"app__desc\">\n" + "          <b>Start conversation</b>\n" + "          <p>You can start a conversation </br> with other users and</br> negotiate offers.</p>\n" + "        </div>\n" + "      </div>\n" + "      <div class=\"app__item app__item--2\">\n" + "        <div>\n" + "          <img src=\"./img/app/Skip_icon.png\" srcset=\"./img/app/Skip_icon.png 1x, ./img/app/x2/Skip_icon.png 2x\"\n" + "            alt=\"icon\">\n" + "        </div>\n" + "        <div class=\"app__desc\">\n" + "          <b>Skip</b>\n" + "          <p>Don't like an</br> NFT? Skip.</p>\n" + "        </div>\n" + "      </div>\n" + "      <div class=\"app__item app__item--3\">\n" + "        <div>\n" + "          <img src=\"./img/app/Add_to_favourites_icon.png\"\n" + "            srcset=\"./img/app/Add_to_favourites_icon.png 1x, ./img/app/x2/Add_to_favourites_icon.png 2x\" alt=\"icon\">\n" + "        </div>\n" + "        <div class=\"app__desc\">\n" + "          <b>Add to Favorites</b>\n" + "          <p>If you liked an NFT but</br> cannot make a choice</br> now, you can save it</br> for later! </p>\n" + "        </div>\n" + "      </div>\n" + "      <div class=\"app__item\">\n" + "        <div class=\"app__desc\">\n" + "          <b>NFTndr app</b>\n" + "          <p>The application is designed to quickly connect\n" + "            <span>buyers</span> and <span>sellers of NFTs</span>, you can browse\n" + "            through NFTs that will be automatically sorted\n" + "            for you through our <span>AI filter</span>, you will be able to\n" + "            quickly swipe through different NFTs and then\n" + "            <span>trade your NFTs </span>/ <span>buy NFT instantly</span> / <span>start a </span>\n" + "            <span>conversation</span> with a seller and negotiate a\n" + "            better offer.</p>\n" + "        </div>\n" + "      </div>\n" + "    </div>\n" + "    <div class=\"app__center\">\n" + "      <picture>\n" + "        <img src=\"./img/app/x2/iPhone_12_Pro_mockup.png\"\n" + "          srcset=\"./img/app/iPhone_12_Pro_mockup.png 1x, ./img/app/x2/iPhone_12_Pro_mockup.png 2x\" alt=\"Logo\">\n" + "      </picture>\n" + "    </div>\n" + "    <div class=\"app__inner\">\n" + "      <div class=\"app__item app__item--4\">\n" + "        <div class=\"app__icon\">\n" + "          <img src=\"./img/app/Trade_offer_icon.png\"\n" + "            srcset=\"./img/app/Trade_offer_icon.png 1x, ./img/app/x2/Trade_offer_icon.png 2x\" alt=\"icon\">\n" + "        </div>\n" + "        <div class=\"app__desc\">\n" + "          <b>Trade offer</b>\n" + "          <p>If you own and NFT and</br> you like someone elses</br> NFT, you can always</br> offer a fair trade.</p>\n" + "        </div>\n" + "      </div>\n" + "      <div class=\"app__item app__item--5\">\n" + "        <div>\n" + "          <img src=\"./img/app/Buy_now_icon.png\" srcset=\"./img/app/Buy_now_icon.png 1x, ./img/app/x2/Buy_now_icon.png 2x\"\n" + "            alt=\"icon\">\n" + "        </div>\n" + "        <div class=\"app__desc\">\n" + "          <b>Buy Now</b>\n" + "          <p>If you fell in love with NFT on</br> first sight and the price is right,</br> you can buy it instantly\n" + "            without</br>\n" + "            unnecessary words.</p>\n" + "        </div>\n" + "      </div>\n" + "      <div class=\"app__item app__item--6\">\n" + "        <div>\n" + "          <img src=\"./img/app/Switch_mode_icon.png\"\n" + "            srcset=\"./img/app/Switch_mode_icon.png 1x, ./img/app/x2/Switch_mode_icon.png 2x\" alt=\"icon\">\n" + "        </div>\n" + "        <div class=\"app__desc\">\n" + "          <b>Switch Mode</b>\n" + "          <p>Browse <span>single</span> NFT's or</br> <span>whole collections</span> that a</br> person is looking to\n" + "            sell.</p>\n" + "        </div>\n" + "      </div>\n" + "      <div class=\"app__item\">\n" + "        <div class=\"app__desc\">\n" + "          <b>Multi-chain</b>\n" + "          <p>One of the major problems that users are facing\n" + "            right now is inability to browse and sell their NFTs\n" + "            on one platform, due to that users are always\n" + "            forced to switch between platforms and keep\n" + "            several tabs opened. Our aim is to remove the\n" + "            limitations between blockchains and make one\n" + "            <span>hub</span> that hosts everyone in one place: Solana,\n" + "            Ethereum, BSC, Polygon and more to come.</p>\n" + "        </div>\n" + "      </div>\n" + "    </div>\n" + "  </div>");
      $(this).attr("loaded", true);
    }
  });
}

function lazyloadAppRoadmap() {
  var wt = $(window).scrollTop(); //* top of the window

  var wb = wt + $(window).height(); //* bottom of the window

  $(".roadmap").each(function () {
    var ot = $(this).offset().top; //* top of object (i.e. advertising div)

    var ob = ot + $(this).height(); //* bottom of object

    if (!$(this).attr("loaded") && wt <= ob && wb >= ot) {
      $(this).html("  <div class=\"roadmap__right-svg\">\n" + "    <svg width=\"631\" height=\"1242\" viewBox=\"0 0 631 1242\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n" + "      <g opacity=\"0.15\" filter=\"url(#filter0_f_274:664)\">\n" + "        <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n" + "          d=\"M580.998 301.971C676.319 292.733 759.511 349.72 829.33 415.062C893.462 475.083 939.681 551.252 941.132 639.015C942.669 732.002 910.386 825.639 837.068 883.115C762.136 941.857 661.756 954.145 569.577 930.292C477.699 906.517 404.314 843.315 359.88 759.635C310.888 667.371 276.619 558.34 322.093 464.219C368.654 367.849 474.316 312.309 580.998 301.971Z\"\n" + "          fill=\"url(#paint0_linear_274:664)\" />\n" + "      </g>\n" + "      <defs>\n" + "        <filter id=\"filter0_f_274:664\" x=\"0.789062\" y=\"0.983398\" width=\"1240.4\" height=\"1240.77\"\n" + "          filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\">\n" + "          <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" />\n" + "          <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"BackgroundImageFix\" result=\"shape\" />\n" + "          <feGaussianBlur stdDeviation=\"150\" result=\"effect1_foregroundBlur_274:664\" />\n" + "        </filter>\n" + "        <linearGradient id=\"paint0_linear_274:664\" x1=\"930.021\" y1=\"562.081\" x2=\"384.763\" y2=\"425.132\"\n" + "          gradientUnits=\"userSpaceOnUse\">\n" + "          <stop stop-color=\"#6FDCFF\" />\n" + "          <stop offset=\"1\" stop-color=\"#FF248D\" />\n" + "        </linearGradient>\n" + "      </defs>\n" + "    </svg>\n" + "  </div>\n" + "  <div class=\"roadmap__container\">\n" + "    <div class=\"roadmap__title\">Roadmap</div>\n" + "    <div class=\"roadmap__lines\">\n" + "      <div class=\"roadmap__line\">\n" + "        <svg class=\"roadmap__line-oct\" width=\"287\" height=\"94\" viewBox=\"0 0 287 94\" fill=\"none\"\n" + "          xmlns=\"http://www.w3.org/2000/svg\">\n" + "          <path d=\"M1 93V55C1 49.4772 5.47715 45 11 45H276.5C282.023 45 286.5 40.5228 286.5 35V0.5\"\n" + "            stroke=\"url(#paint110_linear)\" stroke-linecap=\"round\" />\n" + "          <defs>\n" + "            <linearGradient id=\"paint110_linear\" x1=\"-298\" y1=\"51.7501\" x2=\"313.5\" y2=\"51.7501\"\n" + "              gradientUnits=\"userSpaceOnUse\">\n" + "              <stop stop-color=\"#FF248D\" stop-opacity=\"0\" />\n" + "              <stop offset=\"0.115785\" stop-color=\"#FF248D\" stop-opacity=\"0.9\" />\n" + "              <stop offset=\"1\" stop-color=\"#6FDCFF\" />\n" + "            </linearGradient>\n" + "          </defs>\n" + "        </svg>\n" + "        <svg class=\"roadmap__line-oct\" width=\"290\" height=\"97\" viewBox=\"0 0 290 97\" fill=\"none\"\n" + "          xmlns=\"http://www.w3.org/2000/svg\">\n" + "          <path d=\"M2 95V57C2 51.4772 6.47715 47 12 47H277.5C283.023 47 287.5 42.5228 287.5 37V2.5\"\n" + "            stroke=\"url(#painto0_linear)\" stroke-width=\"4\" stroke-linecap=\"round\" />\n" + "          <defs>\n" + "            <linearGradient id=\"painto0_linear\" x1=\"287.5\" y1=\"53.8048\" x2=\"-11.6715\" y2=\"53.8047\"\n" + "              gradientUnits=\"userSpaceOnUse\">\n" + "              <stop stop-color=\"#FCB5EF\" />\n" + "              <stop offset=\"1\" stop-color=\"#F7DE52\" />\n" + "            </linearGradient>\n" + "          </defs>\n" + "        </svg>\n" + "      </div>\n" + "      <div class=\"roadmap__line \">\n" + "        <svg class=\"roadmap__line-nov\" width=\"2\" height=\"93\" viewBox=\"0 0 2 93\" fill=\"none\"\n" + "          xmlns=\"http://www.w3.org/2000/svg\">\n" + "          <path d=\"M1 92V0.5\" stroke=\"url(#paint120_linear)\" stroke-linecap=\"round\" />\n" + "          <defs>\n" + "            <linearGradient id=\"paint120_linear\" x1=\"1\" y1=\"92\" x2=\"1\" y2=\"0.999986\" gradientUnits=\"userSpaceOnUse\">\n" + "              <stop stop-color=\"#FF248D\" />\n" + "              <stop offset=\"1\" stop-color=\"#6FDCFF\" />\n" + "            </linearGradient>\n" + "          </defs>\n" + "        </svg>\n" + "        <svg class=\"roadmap__line-nov\" width=\"4\" height=\"96\" viewBox=\"0 0 4 96\" fill=\"none\"\n" + "          xmlns=\"http://www.w3.org/2000/svg\">\n" + "          <path d=\"M2 94V2.5\" stroke=\"url(#paintn0_linear)\" stroke-width=\"4\" stroke-linecap=\"round\" />\n" + "          <defs>\n" + "            <linearGradient id=\"paintn0_linear\" x1=\"3\" y1=\"53.2502\" x2=\"1.95211\" y2=\"53.2502\"\n" + "              gradientUnits=\"userSpaceOnUse\">\n" + "              <stop stop-color=\"#FCB5EF\" />\n" + "              <stop offset=\"1\" stop-color=\"#F7DE52\" />\n" + "            </linearGradient>\n" + "          </defs>\n" + "        </svg>\n" + "      </div>\n" + "      <div class=\"roadmap__line\">\n" + "        <svg class=\"roadmap__line-ter\" width=\"287\" height=\"94\" viewBox=\"0 0 287 94\" fill=\"none\"\n" + "          xmlns=\"http://www.w3.org/2000/svg\">\n" + "          <path d=\"M286 93V55C286 49.4772 281.523 45 276 45H10.5C4.97715 45 0.5 40.5228 0.5 35V0.5\" stroke=\"white\"\n" + "            stroke-linecap=\"round\" />\n" + "          <path d=\"M286 93V55C286 49.4772 281.523 45 276 45H10.5C4.97715 45 0.5 40.5228 0.5 35V0.5\"\n" + "            stroke=\"url(#paint130_linear)\" stroke-linecap=\"round\" />\n" + "          <defs>\n" + "            <linearGradient id=\"paint130_linear\" x1=\"375.5\" y1=\"51.7502\" x2=\"-85\" y2=\"51.7502\"\n" + "              gradientUnits=\"userSpaceOnUse\">\n" + "              <stop stop-color=\"#FF248D\" stop-opacity=\"0\" />\n" + "              <stop offset=\"0.115785\" stop-color=\"#FF248D\" stop-opacity=\"0.9\" />\n" + "              <stop offset=\"1\" stop-color=\"#6FDCFF\" />\n" + "            </linearGradient>\n" + "          </defs>\n" + "        </svg>\n" + "        <svg class=\"roadmap__line-ter\" width=\"290\" height=\"97\" viewBox=\"0 0 290 97\" fill=\"none\"\n" + "          xmlns=\"http://www.w3.org/2000/svg\">\n" + "          <path d=\"M287.5 94.5V56.5C287.5 50.9772 283.023 46.5 277.5 46.5H12C6.47715 46.5 2 42.0228 2 36.5V2\"\n" + "            stroke=\"url(#painttt0_linear)\" stroke-width=\"4\" stroke-linecap=\"round\" />\n" + "          <defs>\n" + "            <linearGradient id=\"painttt0_linear\" x1=\"287.5\" y1=\"53.3048\" x2=\"-11.6715\" y2=\"53.3047\"\n" + "              gradientUnits=\"userSpaceOnUse\">\n" + "              <stop stop-color=\"#FCB5EF\" />\n" + "              <stop offset=\"1\" stop-color=\"#F7DE52\" />\n" + "            </linearGradient>\n" + "          </defs>\n" + "        </svg>\n" + "      </div>\n" + "    </div>\n" + "    <div class=\"roadmap__wrapper\">\n" + "      <div class=\"roadmap__item\">\n" + "        <picture>\n" + "          <!-- <source\n" + "          srcset=\"./img/Group_tablet.png\" media=\"(max-width: 1024px)\"> -->\n" + "          <img src=\"./img/Group-1.png\" alt=\"\">\n" + "        </picture>\n" + "      </div>\n" + "      <div class=\"roadmap__item\">\n" + "        <div class=\"roadmap__block\">\n" + "          <div class=\"roadmap__header roadmap__header--oct\">\n" + "            <div class=\"roadmap__header-svg-o\">\n" + "              <svg style=\"visibility: hidden; position: absolute;\" width=\"0\" height=\"0\"\n" + "                xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n" + "                <defs>\n" + "                  <filter id=\"roadmap__header--oct\">\n" + "                    <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"3\" result=\"blur\" />\n" + "                    <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9\"\n" + "                      result=\"roadmap__header--oct\" />\n" + "                    <feComposite in=\"SourceGraphic\" in2=\"roadmap__header--oct\" operator=\"atop\" />\n" + "                  </filter>\n" + "                </defs>\n" + "              </svg>\n" + "              <div class=\"roadmap__inside\">\n" + "                <div class=\"roadmap__inside-svg-o\">\n" + "                  <span>October</span>\n" + "                  <svg style=\"visibility: hidden; position: absolute;\" width=\"0\" height=\"0\"\n" + "                    xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n" + "                    <defs>\n" + "                      <filter id=\"roadmap__inside--oct\">\n" + "                        <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"3\" result=\"blur\" />\n" + "                        <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9\"\n" + "                          result=\"roadmap__inside--oct\" />\n" + "                        <feComposite in=\"SourceGraphic\" in2=\"roadmap__inside--oct\" operator=\"atop\" />\n" + "                      </filter>\n" + "                    </defs>\n" + "                  </svg>\n" + "                </div>\n" + "              </div>\n" + "            </div>\n" + "          </div>\n" + "          <div class=\"roadmap__header roadmap__header--nov\">\n" + "            <div class=\"roadmap__header-svg-n\">\n" + "              <svg style=\"visibility: hidden; position: absolute;\" width=\"0\" height=\"0\"\n" + "                xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n" + "                <defs>\n" + "                  <filter id=\"roadmap__header--nov\">\n" + "                    <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"3\" result=\"blur\" />\n" + "                    <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9\"\n" + "                      result=\"roadmap__header--nov\" />\n" + "                    <feComposite in=\"SourceGraphic\" in2=\"roadmap__header--nov\" operator=\"atop\" />\n" + "                  </filter>\n" + "                </defs>\n" + "              </svg>\n" + "              <div class=\"roadmap__inside\">\n" + "                <div class=\"roadmap__inside-svg-n\">\n" + "                  <span>November</span>\n" + "                  <svg style=\"visibility: hidden; position: absolute;\" width=\"0\" height=\"0\"\n" + "                    xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n" + "                    <defs>\n" + "                      <filter id=\"roadmap__inside--nov\">\n" + "                        <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"3\" result=\"blur\" />\n" + "                        <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9\"\n" + "                          result=\"roadmap__inside--nov\" />\n" + "                        <feComposite in=\"SourceGraphic\" in2=\"roadmap__inside--nov\" operator=\"atop\" />\n" + "                      </filter>\n" + "                    </defs>\n" + "                  </svg>\n" + "                </div>\n" + "              </div>\n" + "            </div>\n" + "          </div>\n" + "          <div class=\"roadmap__header roadmap__header--ter\">\n" + "            <div class=\"roadmap__header-svg-t\">\n" + "              <svg style=\"visibility: hidden; position: absolute;\" width=\"0\" height=\"0\"\n" + "                xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n" + "                <defs>\n" + "                  <filter id=\"roadmap__header--ter\">\n" + "                    <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"3\" result=\"blur\" />\n" + "                    <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9\"\n" + "                      result=\"roadmap__header--ter\" />\n" + "                    <feComposite in=\"SourceGraphic\" in2=\"roadmap__header--ter\" operator=\"atop\" />\n" + "                  </filter>\n" + "                </defs>\n" + "              </svg>\n" + "              <div class=\"roadmap__inside\">\n" + "                <div class=\"roadmap__inside-svg-t\">\n" + "                  <span>Long Term</span>\n" + "                  <svg style=\"visibility: hidden; position: absolute;\" width=\"0\" height=\"0\"\n" + "                    xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\">\n" + "                    <defs>\n" + "                      <filter id=\"roadmap__inside--ter\">\n" + "                        <feGaussianBlur in=\"SourceGraphic\" stdDeviation=\"3\" result=\"blur\" />\n" + "                        <feColorMatrix in=\"blur\" mode=\"matrix\" values=\"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9\"\n" + "                          result=\"roadmap__inside--ter\" />\n" + "                        <feComposite in=\"SourceGraphic\" in2=\"roadmap__inside--ter\" operator=\"atop\" />\n" + "                      </filter>\n" + "                    </defs>\n" + "                  </svg>\n" + "                </div>\n" + "              </div>\n" + "            </div>\n" + "          </div>\n" + "        </div>\n" + "        <!-- roadmap__inner--active -->\n" + "        <div class=\"roadmap__inner roadmap__inner--active\">\n" + "          <div class=\"roadmap__content roadmap__content--oct\">\n" + "            <ul>\n" + "              <li class=\"active\">Website Launch</li>\n" + "              <li class=\"active\">Private Presale</li>\n" + "              <li class=\"active\">Marketing Campaign</li>\n" + "              <li class=\"active\">Techrate Audit</li>\n" + "              <li>Launch on PCS</li>\n" + "              <li>Paid Dextools Trending</li>\n" + "              <li>Poocoin Ads</li>\n" + "              <li>Certik Audit</li>\n" + "              <li>List on CMC</li>\n" + "              <li>List on CG</li>\n" + "              <li>List on Whitebit</li>\n" + "              <li>AMA with Devs</li>\n" + "              <li>Trend on Twitter</li>\n" + "            </ul>\n" + "          </div>\n" + "          <div class=\"roadmap__content roadmap__content--nov\">\n" + "            <ul class=\"roadmap__fix\">\n" + "              <li class=\"active\">NFTNDR Release on Google Play Store and App Store</li>\n" + "              <li>NFTNDR NFT Collection Release for Holders</li>\n" + "              <li>Celebrities Ambassadors</li>\n" + "              <li>High Profile Artists from Opensea and Solanart</li>\n" + "              <li>Taxi Ads in NYC, Plane Ads in LA and Miami</li>\n" + "              <li>OpenSea and Rarible Partnership</li>\n" + "            </ul>\n" + "          </div>\n" + "          <div class=\"roadmap__content roadmap__content--ter\">\n" + "            <ul class=\"roadmap__trem\">\n" + "              <li class=\"active\">Asian marketing campaign</li>\n" + "              <li class=\"active\">Binance Listing</li>\n" + "              <li>Coinbase Listing</li>\n" + "              <li>Real Life NFT Auction House</li>\n" + "              <li>NFT Based Social Media</li>\n" + "              <li>Multi Layer NFT Generator</li>\n" + "            </ul>\n" + "          </div>\n" + "        </div>\n" + "      </div>\n" + "      <div class=\"roadmap__item\">\n" + "        <picture>\n" + "          <source srcset=\"./img/Group-tablet-botton.png\" media=\"(max-width: 1020px)\">\n" + "          <img src=\"./img/Group-2.png\" alt=\"\">\n" + "        </picture>\n" + "      </div>\n" + "    </div>\n" + "  </div>");
      $(this).attr("loaded", true);
    }
  });
}

$('.ticker').simplemarquee({
  speed: 50,
  cycles: Infinity,
  space: 25,
  delayBetweenCycles: .1,
  handleHover: true,
  handleResize: false
}); //heder anim
// if ($('body').width() > 1024) {

var animItems = document.querySelectorAll('._anim-items');
console.log('window');

if (animItems.length > 0) {
  var animOnScroll = function animOnScroll() {
    lazyloadApp();
    lazyloadAppRoadmap();

    for (var index = 0; index < animItems.length; index++) {
      var animItem = animItems[index];
      var animItemHeight = animItem.offsetHeight;
      var animItemOffset = offset(animItem).top;
      var animStart = 4;
      var animatemPoint = window.innerHeight - animItemHeight / animStart;

      if (animItemHeight > window.innerHeight) {
        animatemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (pageYOffset > animItemOffset - animatemPoint && pageYOffset < animItemOffset + animItemHeight) {
        animItem.classList.add('_active');
      } else {
        if (!animItem.classList.contains('_anim-not')) {
          animItem.classList.remove('_active');
        }
      }
    }
  };

  var offset = function offset(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  };

  window.addEventListener("scroll", animOnScroll);
  setTimeout(function () {
    animOnScroll();
  }, 300);
} // }
// var smallMediaQuery = window.matchMedia("(min-width:1025px)"),
//   mediumMediaQuery = window.matchMedia("(min-width:769px) and (max-width:1024px)"),
//   tableMediaQuery = window.matchMedia("(min-width:581px) and (max-width:768px)"),
//   mobMediaQuery = window.matchMedia("(min-width:320px) and (max-width:580px)");
// // largeMediaQuery = window.matchMedia("(min-width:769px) and (max-width:992px)");
// let interval = 30
// //Create listener for SMALL
// var smallListener = function (e) {
//   if (e.matches) {
//     var tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl.to(".banner-items-desc__item-1", { x: 100, duration: 1, opacity: 1 });
//     tl.to(".banner-items-desc__item-1", { x: 300, duration: 1, delay: interval });
//     tl.to(".banner-items-desc__item-1", { x: 300, duration: 1, delay: interval, opacity: 0 });
//     tl.to(".banner-items-desc__item-1", { x: 0, duration: 3, opacity: 0 });
//     var tl2 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl2.to(".banner-items-desc__item-2", { x: 200, duration: 1, opacity: 1 });
//     tl2.to(".banner-items-desc__item-2", { x: 400, duration: 1, delay: interval });
//     tl2.to(".banner-items-desc__item-2", { x: 400, duration: 1, delay: interval, opacity: 0 });
//     tl2.to(".banner-items-desc__item-2", { x: 0, duration: 3, opacity: 0 });
//     var tl3 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     // tl3.to(".banner-items-desc__item-3", { x: 200, duration: 1, opacity: 1 });
//     tl3.to(".banner-items-desc__item-3", { x: 400, duration: 1, opacity: 1 });
//     tl3.to(".banner-items-desc__item-3", { x: 600, duration: 1, delay: interval });
//     tl3.to(".banner-items-desc__item-3", { x: 600, duration: 1, delay: interval, opacity: 0 });
//     tl3.to(".banner-items-desc__item-3", { x: 0, duration: 3, opacity: 0 });
//     var tl4 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl4.to(".banner-items-desc__item-4", { x: 300, duration: 1, opacity: 1 });
//     tl4.to(".banner-items-desc__item-4", { x: 500, duration: 1, delay: interval });
//     tl4.to(".banner-items-desc__item-4", { x: 500, duration: 1, delay: interval, opacity: 0 });
//     tl4.to(".banner-items-desc__item-4", { x: 0, duration: 3, opacity: 0 });
//     var tl5 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     // tl5.to(".banner-items-desc__item-5", { x: 200, duration: 1, opacity: 1 });
//     tl5.to(".banner-items-desc__item-5", { x: 100, duration: 1, opacity: 1 });
//     tl5.to(".banner-items-desc__item-5", { x: 200, duration: 1, delay: interval });
//     tl5.to(".banner-items-desc__item-5", { x: 200, duration: 1, delay: interval, opacity: 0 });
//     tl5.to(".banner-items-desc__item-5", { x: 0, duration: 3, opacity: 0 });
//   }
// };
// var mediumListener = function (e) {
//   if (e.matches) {
//     var tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl.to(".banner-items-desc__item-1", { x: 77, duration: 1, opacity: 1 });
//     tl.to(".banner-items-desc__item-1", { x: 235, duration: 1, delay: interval });
//     tl.to(".banner-items-desc__item-1", { x: 235, duration: 1, delay: interval, opacity: 0 });
//     tl.to(".banner-items-desc__item-1", { x: 0, duration: 3, opacity: 0 });
//     var tl2 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl2.to(".banner-items-desc__item-2", { x: 155, duration: 1, opacity: 1 });
//     tl2.to(".banner-items-desc__item-2", { x: 312, duration: 1, delay: interval });
//     tl2.to(".banner-items-desc__item-2", { x: 312, duration: 1, delay: interval, opacity: 0 });
//     tl2.to(".banner-items-desc__item-2", { x: 0, duration: 3, opacity: 0 });
//     var tl3 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl3.to(".banner-items-desc__item-3", { x: 316, duration: 1, opacity: 1 });
//     tl3.to(".banner-items-desc__item-3", { x: 472, duration: 1, delay: interval });
//     tl3.to(".banner-items-desc__item-3", { x: 472, duration: 1, delay: interval, opacity: 0 });
//     tl3.to(".banner-items-desc__item-3", { x: 0, duration: 3, opacity: 0 });
//     var tl4 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl4.to(".banner-items-desc__item-4", { x: 234, duration: 1, opacity: 1 });
//     tl4.to(".banner-items-desc__item-4", { x: 390, duration: 1, delay: interval });
//     tl4.to(".banner-items-desc__item-4", { x: 390, duration: 1, delay: interval, opacity: 0 });
//     tl4.to(".banner-items-desc__item-4", { x: 0, duration: 3, opacity: 0 });
//     var tl5 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl5.to(".banner-items-desc__item-5", { x: 4, duration: 1, opacity: 1 });
//     tl5.to(".banner-items-desc__item-5", { x: 160, duration: 1, delay: interval });
//     tl5.to(".banner-items-desc__item-5", { x: 160, duration: 1, delay: interval, opacity: 0 });
//     tl5.to(".banner-items-desc__item-5", { x: 0, duration: 3, opacity: 0 });
//   }
// };
// var tableListener = function (e) {
//   if (e.matches) {
//     let tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl.to(".mob-icons__item--1", { x: -102, duration: 1, opacity: 1 });
//     tl.to(".mob-icons__item--1", { x: 6, duration: 1, delay: 1 });
//     tl.to(".mob-icons__item--1", { x: 6, duration: 1, delay: interval, opacity: 0 });
//     tl.to(".mob-icons__item--1", { x: -102, duration: 3, opacity: 0 });
//     let tl2 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl2.to(".mob-icons__item--2", { x: 0, duration: 1, opacity: 1 });
//     tl2.to(".mob-icons__item--2", { x: 217, duration: 1, delay: 1 });
//     tl2.to(".mob-icons__item--2", { x: 217, duration: 1, delay: interval, opacity: 0 });
//     tl2.to(".mob-icons__item--2", { x: 0, duration: 3, opacity: 0 });
//     let tl3 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl3.to(".mob-icons-b__item--3", { x: -232, duration: 1, opacity: 1 });
//     tl3.to(".mob-icons-b__item--3", { x: 220, duration: 1, delay: 1 });
//     tl3.to(".mob-icons-b__item--3", { x: 220, duration: 1, delay: interval, opacity: 0 });
//     tl3.to(".mob-icons-b__item--3", { x: -232, duration: 3, opacity: 0 });
//     let tlt = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tlt.to(".mob-icons-b__item--4", { x: 108, duration: 1, opacity: 1 });
//     tlt.to(".mob-icons-b__item--4", { x: 327, duration: 1, delay: 1 });
//     tlt.to(".mob-icons-b__item--4", { x: 327, duration: 1, delay: interval, opacity: 0 });
//     tlt.to(".mob-icons-b__item--4", { x: 108, duration: 3, opacity: 0 });
//     let tl5 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl5.to(".mob-icons-b__item--5", { x: 6, duration: 1, opacity: 1 });
//     tl5.to(".mob-icons-b__item--5", { x: 222, duration: 1, delay: 1 });
//     tl5.to(".mob-icons-b__item--5", { x: 222, duration: 1, delay: interval, opacity: 0 });
//     tl5.to(".mob-icons-b__item--5", { x: 6, duration: 3, opacity: 0 });
//     let tl6 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl6.to(".mob-icons-b__item--6", { x: 0, duration: 1, opacity: 1 });
//     tl6.to(".mob-icons-b__item--6", { x: 326, duration: 1, delay: 1 });
//     tl6.to(".mob-icons-b__item--6", { x: 326, duration: 1, delay: interval, opacity: 0 });
//     tl6.to(".mob-icons-b__item--6", { x: 0, duration: 3, opacity: 0 });
//   }
// };
// var mobListener = function (e) {
//   if (e.matches) {
//     let tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl.to(".mob-icons__item--1", { x: -152, duration: 1, opacity: 0 });
//     tl.to(".mob-icons__item--1", { x: 4, duration: 1, delay: 1, opacity: 1 });
//     tl.to(".mob-icons__item--1", { x: 4, duration: 1, delay: interval, opacity: 0 });
//     tl.to(".mob-icons__item--1", { x: -152, duration: 3, opacity: 0 });
//     let tl2 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl2.to(".mob-icons__item--2", { x: 0, duration: 1, opacity: 1 });
//     tl2.to(".mob-icons__item--2", { x: 117, duration: 1, delay: 1 });
//     tl2.to(".mob-icons__item--2", { x: 117, duration: 1, delay: interval, opacity: 0 });
//     tl2.to(".mob-icons__item--2", { x: 0, duration: 3, opacity: 0 });
//     let tl3 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl3.to(".mob-icons-b__item--3", { x: -232, duration: 1, opacity: 1 });
//     tl3.to(".mob-icons-b__item--3", { x: 372, duration: 1, delay: 1 });
//     tl3.to(".mob-icons-b__item--3", { x: 372, duration: 1, delay: interval, opacity: 0 });
//     tl3.to(".mob-icons-b__item--3", { x: -232, duration: 3, opacity: 0 });
//     let tlt = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tlt.to(".mob-icons-b__item--4", { x: 0, duration: 1, opacity: 1 });
//     tlt.to(".mob-icons-b__item--4", { x: 170, duration: 1, delay: 1 });
//     tlt.to(".mob-icons-b__item--4", { x: 170, duration: 1, delay: interval, opacity: 0 });
//     tlt.to(".mob-icons-b__item--4", { x: 0, duration: 3, opacity: 0 });
//     let tl5 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl5.to(".mob-icons-b__item--5", { x: 6, duration: 1, opacity: 1 });
//     tl5.to(".mob-icons-b__item--5", { x: 118, duration: 1, delay: 1 });
//     tl5.to(".mob-icons-b__item--5", { x: 118, duration: 1, delay: interval, opacity: 0 });
//     tl5.to(".mob-icons-b__item--5", { x: 6, duration: 3, opacity: 0 });
//     let tl6 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl6.to(".mob-icons-b__item--6", { x: 0, duration: 1, opacity: 1 });
//     tl6.to(".mob-icons-b__item--6", { x: 172, duration: 1, delay: 1 });
//     tl6.to(".mob-icons-b__item--6", { x: 172, duration: 1, delay: interval, opacity: 0 });
//     tl6.to(".mob-icons-b__item--6", { x: 0, duration: 3, opacity: 0 });
//   }
// };
// var largeListener = function(e){
//   if(e.matches){
//     var tl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl.to(".banner-items-desc__item-1", { x: 79, duration: 1, opacity: 1 });
//     tl.to(".banner-items-desc__item-1", { x: 235, duration: 1, delay: interval });
//     tl.to(".banner-items-desc__item-1", { x: 235, duration: 1, delay: interval, opacity: 0  });
//     tl.to(".banner-items-desc__item-1", { x: 0, duration: 3, opacity: 0  });
//     var tl2 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl2.to(".banner-items-desc__item-2", { x: 155, duration: 1, opacity: 1 });
//     tl2.to(".banner-items-desc__item-2", { x: 312, duration: 1, delay: interval });
//     tl2.to(".banner-items-desc__item-2", { x: 312, duration: 1, delay: interval, opacity: 0  });
//     tl2.to(".banner-items-desc__item-2", { x: 0, duration: 3, opacity: 0  });
//     var tl3 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl3.to(".banner-items-desc__item-3", { x: 316, duration: 1, opacity: 1 });
//     tl3.to(".banner-items-desc__item-3", { x: 472, duration: 1, delay: interval });
//     tl3.to(".banner-items-desc__item-3", { x: 472, duration: 1, delay: interval, opacity: 0  });
//     tl3.to(".banner-items-desc__item-3", { x: 0, duration: 3, opacity: 0  });
//     var tl4 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl4.to(".banner-items-desc__item-4", { x: 234, duration: 1, opacity: 1 });
//     tl4.to(".banner-items-desc__item-4", { x: 390, duration: 1, delay: interval });
//     tl4.to(".banner-items-desc__item-4", { x: 390, duration: 1, delay: interval, opacity: 0  });
//     tl4.to(".banner-items-desc__item-4", { x: 0, duration: 3,  opacity: 0  });
//     var tl5 = gsap.timeline({ repeat: -1, repeatDelay: 3 });
//     tl5.to(".banner-items-desc__item-5", { x: 4, duration: 1, opacity: 1 });
//     tl5.to(".banner-items-desc__item-5", { x: 160, duration: 1, delay: interval });
//     tl5.to(".banner-items-desc__item-5", { x: 160, duration: 1, delay: interval, opacity: 0  });
//     tl5.to(".banner-items-desc__item-5", { x: 0, duration: 3,  opacity: 0  });
//   }
// };
//Add the listener to MediaQueryList
// smallMediaQuery.addListener(smallListener);
// mediumMediaQuery.addListener(mediumListener);
// tableMediaQuery.addListener(tableListener);
// mobMediaQuery.addListener(mobListener);
// // largeMediaQuery.addListener(largeListener);
// // Initialise onload
// smallListener(smallMediaQuery);
// mediumListener(mediumMediaQuery);
// tableListener(tableMediaQuery);
// mobListener(mobMediaQuery);
// largeListener(largeMediaQuery);


if ($('body').width() <= 930) {
  $(".roadmap__header--oct").addClass("active");
  $(".roadmap__content--oct").addClass("active");
  $(".roadmap__content--oct").children('ul').addClass("_active");
}

$(".roadmap__header--oct span").hover(function () {
  $('.roadmap__header--oct').addClass("active");
  $(".roadmap__content--oct").addClass("active");
  $(".roadmap__line-oct:last").addClass("active");
  $(".roadmap__content--oct").children('ul').addClass("_active");
}, function () {
  $('.roadmap__header--oct').removeClass("active");
  $(".roadmap__content--oct").removeClass("active");
  $(".roadmap__line-oct:last").removeClass("active");
  $(".roadmap__content--oct").children('ul').removeClass("_active");
});
$(".roadmap__header--nov span").hover(function () {
  $('.roadmap__header--nov').addClass("active");
  $(".roadmap__header--oct").addClass("active--nov");
  $(".roadmap__content--nov").addClass("active");
  $(".roadmap__line-nov:last").addClass("active");
  $(".roadmap__content--nov").children('ul').addClass("_active");

  if ($('body').width() <= 930) {
    $(".roadmap__header--oct").removeClass("active");
    $(".roadmap__content--oct").removeClass("active");
  }
}, function () {
  $('.roadmap__header--nov').removeClass("active");
  $(".roadmap__header--oct").removeClass("active--nov");
  $(".roadmap__content--nov").removeClass("active");
  $(".roadmap__line-nov:last").removeClass("active");
  $(".roadmap__content--nov").children('ul').removeClass("_active");
});
$(".roadmap__header--ter span").hover(function () {
  $('.roadmap__header--ter').addClass("active");
  $(".roadmap__header--nov").addClass("active--ter");
  $(".roadmap__header--oct").addClass("active--nov");
  $(".roadmap__content--ter").addClass("active");
  $(".roadmap__line-ter:last").addClass("active");
  $(".roadmap__content--ter").children('ul').addClass("_active");

  if ($('body').width() <= 930) {
    $(".roadmap__header--oct").removeClass("active");
    $(".roadmap__content--oct").removeClass("active");
  }
}, function () {
  $('.roadmap__header--ter').removeClass("active");
  $(".roadmap__header--nov").removeClass("active--ter");
  $(".roadmap__header--oct").removeClass("active--nov");
  $(".roadmap__content--ter").removeClass("active");
  $(".roadmap__line-ter:last").removeClass("active");
  $(".roadmap__content--ter").children('ul').removeClass("_active");
}); //////////////

$(".roadmap__content--oct").hover(function () {
  $('.roadmap__header--oct').addClass("active");
  $(".roadmap__content--oct").addClass("active");
  $(".roadmap__line-oct:last").addClass("active");
  $(".roadmap__content--oct").children('ul').addClass("_active");
}, function () {
  $('.roadmap__header--oct').removeClass("active");
  $(".roadmap__content--oct").removeClass("active");
  $(".roadmap__line-oct:last").removeClass("active");
  $(".roadmap__content--oct").children('ul').removeClass("_active");
});
$(".roadmap__content--nov").hover(function () {
  $('.roadmap__header--nov').addClass("active");
  $(".roadmap__header--oct").addClass("active--nov");
  $(".roadmap__content--nov").addClass("active");
  $(".roadmap__line-nov:last").addClass("active");
  $(".roadmap__content--nov").children('ul').addClass("_active");

  if ($('body').width() <= 930) {
    $(".roadmap__header--oct").removeClass("active");
    $(".roadmap__content--oct").removeClass("active");
  }
}, function () {
  $('.roadmap__header--nov').removeClass("active");
  $(".roadmap__header--oct").removeClass("active--nov");
  $(".roadmap__content--nov").removeClass("active");
  $(".roadmap__line-nov:last").removeClass("active");
  $(".roadmap__content--nov").children('ul').removeClass("_active");
});
$(".roadmap__content--ter").hover(function () {
  $('.roadmap__header--ter').addClass("active");
  $(".roadmap__header--nov").addClass("active--ter");
  $(".roadmap__header--oct").addClass("active--nov");
  $(".roadmap__content--ter").addClass("active");
  $(".roadmap__line-ter:last").addClass("active");
  $(".roadmap__content--ter").children('ul').addClass("_active");

  if ($('body').width() <= 930) {
    $(".roadmap__header--oct").removeClass("active");
    $(".roadmap__content--oct").removeClass("active");
  }
}, function () {
  $('.roadmap__header--ter').removeClass("active");
  $(".roadmap__header--nov").removeClass("active--ter");
  $(".roadmap__header--oct").removeClass("active--nov");
  $(".roadmap__content--ter").removeClass("active");
  $(".roadmap__line-ter:last").removeClass("active");
  $(".roadmap__content--ter").children('ul').removeClass("_active");
});

if ($('body').width() <= 768) {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: -20,
    freeMode: true
  });
} //copy text


function copyData(containerid) {
  var range = document.createRange();
  range.selectNode(containerid); //changed here

  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}

function copyDataTwo(containeridTwo) {
  var range = document.createRange();
  range.selectNode(containeridTwo); //changed here

  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
}

$(".address__copy-btn").hover(function () {
  $('.address__popup--one').addClass('active');
}, function () {
  $('.address__popup--one').removeClass('active');
});
$(".contactUs__copy-btn").hover(function () {
  $('.address__popup--tow').addClass('active');
}, function () {
  $('.address__popup--tow').removeClass('active');
});
$(".address__copy-btn").click(function () {
  $('.address__popup--one-copy').addClass('active');
  $('.address__popup--one').removeClass('active');
  setTimeout(function () {
    $('.address__popup--one-copy').removeClass('active');
  }, 2000);
});
$(".contactUs__copy-btn").click(function () {
  $('.address__popup--tow-copy').addClass('active');
  $('.address__popup--tow').removeClass('active');
  setTimeout(function () {
    $('.address__popup--tow-copy').removeClass('active');
  }, 2000);
});
var scrolling = false;
$(window).scroll(function (event) {
  scrolling = true;
  console.log("event");
});
setInterval(function () {
  if (scrolling) {
    scrolling = false;
    $(".menu__btn").removeClass('_active');
  } else {
    console.log("false");
    $(".menu__btn").addClass('_active');
  }
}, 500);
"use strict";

console.log('maxgraph');
/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */
"use strict";
//# sourceMappingURL=main.js.map
