function PageBase() {
  this.navId = "",
    this.$document = $(document),
    this.$nav = $("#nav"),
    this.$navFooter = $("#navFooter"),
    this.$navFooterSpace = $("#navFooterSpace"),
    this.$aboutUs = $("#aboutUs"),
    this.$aboutUsItem = $("#aboutUs .more-item"),
    this.$product = $("#product"),
    this.$xecloud = $("#xecloud"),
    this.init(),
    this.addFlag(),
    this.setActivity()
}
$(function () {
  new PageBase
}),
  PageBase.prototype = {
    setActivity: function () {
      var t = "active" + (new Date).getDate();
      localStorage.getItem(t) || ($(".activity-time-body").addClass("activity-body"),
        $("#activity-close").click(function (e) {
          localStorage.setItem(t, "true"),
            $("body").removeClass("activity-body")
        }))
    },
    bindWindowScroll: function () {
      var e = this;
      e.$nav.hasClass("blueNav") && $(window).bind("scroll", function () {
        70 < e.$document.scrollTop() ? (e.$nav.removeClass("blueNav").addClass("whiteNav"),
          e.$navFooter.addClass("nav-white")) : (e.$nav.removeClass("whiteNav").addClass("blueNav"),
            e.$navFooter.removeClass("nav-white"))
      })
    },
    getCookie: function (e) {
      for (var t = document.cookie.split("; "), a = 0, o = t.length; a < o; a++) {
        var i = t[a].split("=");
        if (i[0] == e)
          return decodeURIComponent(i[1])
      }
      return ""
    },
    xiaoeClickCount: function () {
      var i = this.getCookie("cookie_channel");
      console.log(i, "cookie_channerl"),
        $("body").click(function (e) {
          var t = $(e.target)
            , a = t.data("count") || t.parent().data("count");
          if (a) {
            var o = [{
              et: 1,
              actn: a,
              actsn: i
            }];
            _YS_report.push(o)
          }
        })
    },
    clickCount: function () {
      $("body").click(function (e) {
        var t = $(e.target)
          , a = t.data("count") || t.parent().data("count");
        if (a) {
          var o = a.split("_");
          _hmt.push(["_trackEvent", o[0] || "", o[1] || "", o[2] || ""])
        }
      })
    },
    getPathName: function () {
      return window.location.pathname
    },
    navHighLight: function () {
      var e = "";
      switch (this.getPathName()) {
        case "/":
          e = "#navRoot";
          break;
        case "/business_college":
          e = "#businessCollege";
          break;
        case "/channel_proxy":
          e = "#channelProxy";
          break;
        case "/distribution":
          e = "#distribution";
          break;
        case "/companyProfile":
        case "/joinUs":
        case "/mediaReport":
        case "/extendRead":
        case "/readDetails":
        case "/helpCenter/index":
          e = "#aboutUs";
          break;
        case "/server_price":
          e = "#serverPrice";
          break;
        case "/clientCases":
          e = "#clientCases";
          break;
        default:
          e = "#product"
      }
      $(e).addClass("nav-item_select")
    },
    handleCustomerService: function () {
      var e = document.getElementById("sidebar_box")
        , t = window.localStorage.getItem("customerFeedbackShow")
        , a = this.getTodayDate();
      console.log("todayDate = " + a),
        t != a && (window.localStorage.setItem("customerFeedbackShow", a),
          setTimeout(function () {
            e.style.display = "block"
          }, 1e3),
          setTimeout(function () {
            e.removeAttribute("style")
          }, 4e3))
    },
    getTodayDate: function () {
      var e = new Date
        , t = e.getFullYear()
        , a = e.getMonth() + 1
        , o = e.getDate();
      return t + "-" + (a = 9 < a ? a : "0" + a) + "-" + (o = 9 < o ? o : "0" + o)
    },
    init: function () {
      this.bindWindowScroll(),
        this.clickCount(),
        this.xiaoeClickCount(),
        this.navHighLight(),
        this.handleCustomerService()
    },
    addFlag: function () {
      var e = "xeuti=ituex";
      if (-1 === window.location.href.indexOf(e)) {
        var t = window.location.search
          , a = window.location.hash;
        t = t ? t + "&" + e + a : "?" + e + a,
          window.history.replaceState(null, null, t)
      }
    }
  };
