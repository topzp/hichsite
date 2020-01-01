function Homepage() {
  this.$document = $(document);
  var i = $(document).width();
  this.swiperWidth = 707,
    this.swiperLeft = (i - this.swiperWidth) / 2,
    this.init(),
    $(".panorama-education-list .mobile-education").mouseenter(function () {
      console.log("p;"),
        "400px" != $(this).css("width") && ($(".panorama-education-list .mobile-education").css("width", "200px"),
          $(".panorama-education-list .mobile-education").find(".big-mobile-education").css("display", "none"),
          $(this).css("width", "400px"),
          $(this).find(".big-mobile-education").fadeIn("fast"))
    })
}
$(function () {
  new Homepage
}),
  Homepage.prototype = {
    initSwiper: function () {
      var i = new Swiper(".swiper-customer", {
        loop: !0,
        speed: 1500,
        pagination: ".swiper-pagination",
        paginationClickable: !0,
        nextButton: ".channelAdvantage.btnNext",
        prevButton: ".channelAdvantage.btnPrev",
        width: this.swiperWidth,
        slidesOffsetBefore: this.swiperLeft,
        spaceBetween: 30,
        noSwiping: !0,
        simulateTouch: !1
      });
      this.bindSwiperChange(i)
    },
    initBannerSwiper: function () {
      var i = new Swiper(".swiper-banner", {
        loop: !0,
        autoplay: 8e3,
        speed: 1500,
        pagination: ".swiper-pagination",
        paginationClickable: !0,
        nextButton: ".channelAdvantage.btnNext",
        prevButton: ".channelAdvantage.btnPrev"
      });
      this.bindBannerSwiperOver(i)
    },
    initClientSwiper: function () {
      var i = new Swiper(".swiper-container-client", {
        loop: !0,
        autoplay: 3e3,
        speed: 1500,
        nextButton: ".client-button-next",
        prevButton: ".client-button-prev"
      });
      this.bindClientSwiperOver(i)
    },
    bindBannerSwiperOver: function (i) {
      $(".swiper-container").mouseenter(function () {
        i.stopAutoplay()
      }).mouseleave(function () {
        i.startAutoplay()
      })
    },
    bindClientSwiperOver: function (i) {
      $(".swiper-container-client").mouseenter(function () {
        i.stopAutoplay()
      }).mouseleave(function () {
        i.startAutoplay()
      })
    },
    bindWindowScroll: function () {
      var i = this;
      $(window).bind("scroll", function () {
        2350 < i.$document.scrollTop() && i.beginCountUp()
      })
    },
    beginCountUp: function () {
      $(window).unbind("scroll");
      var i = new CountUp("dataShop", 0, 68)
        , e = new CountUp("dataMoney", 0, 55)
        , t = new CountUp("dataGoods", 0, 750)
        , n = new CountUp("dataUsers", 0, 4);
      i.start(),
        e.start(),
        t.start(),
        n.start()
    },
    bindSwiperChange: function (n) {
      var o = $(".js-customer-item");
      o.mouseenter(function (i) {
        var e = $(this);
        if (!e.hasClass("customer-item_selected")) {
          o.removeClass("customer-item_selected"),
            e.addClass("customer-item_selected");
          var t = e.index() + 1;
          n.slideTo(t, 1500, !1)
        }
      })
    },
    bindActivityBox: function () {
      $(".activity-wrapper .close").click(function (i) {
        i.stopPropagation(),
          $(".activity-wrapper").hide()
      }),
        $(".activity-wrapper").click(function (i) {
          i.stopPropagation(),
            $(".activity-wrapper").hide()
        })
    },
    initHotshotSlide: function () {
      $(".gallery-thumbs .swiper-slide-1 li").click(function () {
        var i = $(this).index();
        $(".gallery-thumbs .swiper-slide-2 li").removeClass("opcity"),
          $(this).addClass("opcity").siblings().removeClass("opcity"),
          $(".gallery-top-item").eq(i).addClass("active").siblings().removeClass("active"),
          $(".gallery-text-item").eq(i).fadeIn().siblings().hide()
      }),
        $(".gallery-thumbs .swiper-slide-2 li").click(function () {
          var i = $(this).index();
          $(".gallery-thumbs .swiper-slide-1 li").removeClass("opcity"),
            $(this).addClass("opcity").siblings().removeClass("opcity"),
            $(".gallery-top-item").eq(i + 6).addClass("active").siblings().removeClass("active"),
            $(".gallery-text-item").eq(i + 6).fadeIn().siblings().hide()
        })
    },
    goReadDetails: function () {
      $(".read-item").click(function () {
        var i = $(this).data("read_id");
        console.log(i),
          window.open(i)
      })
    },
    init: function () {
      this.initSwiper(),
        this.initBannerSwiper(),
        this.bindWindowScroll(),
        this.initClientSwiper(),
        this.initHotshotSlide(),
        this.bindActivityBox(),
        this.goReadDetails()
    }
  };
