(function () {
  (function () {
    javascript: (function (e, s) {
      e.src = s;
      e.onload = function () {
        jQuery.noConflict();
        console.log("jQuery injected");
      };
      document.head.appendChild(e);
    })(
      document.createElement("script"),
      "//code.jquery.com/jquery-3.7.0.min.js"
    );
  })();

  runNotificationCenter();
})();

function runNotificationCenter() {
  var svgClose =
    '<?xml version="1.0" ?><svg data-name="Livello 1" id="Livello_1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><title/><path d="M64,0a64,64,0,1,0,64,64A64.07,64.07,0,0,0,64,0Zm0,122a58,58,0,1,1,58-58A58.07,58.07,0,0,1,64,122Z"/><path d="M92.12,35.79a3,3,0,0,0-4.24,0L64,59.75l-23.87-24A3,3,0,0,0,35.88,40L59.76,64,35.88,88a3,3,0,0,0,4.25,4.24L64,68.25l23.88,24A3,3,0,0,0,92.13,88L68.24,64,92.13,40A3,3,0,0,0,92.12,35.79Z"/></svg>';
  var svgRing =
    '<?xml version="1.0" ?><svg data-name="Layer 3" id="Layer_3" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1,.cls-2{fill:none;stroke:#0832ff;stroke-linecap:round;stroke-linejoin:round;}.cls-1{stroke-width:2px;}.cls-3{fill:#0832ff;}</style></defs><title/><path class="cls-1" d="M16,7h0a7,7,0,0,1,7,7v9a0,0,0,0,1,0,0H9a0,0,0,0,1,0,0V14A7,7,0,0,1,16,7Z"/><line class="cls-1" x1="7" x2="25" y1="23" y2="23"/><line class="cls-2" x1="9.5" x2="22.5" y1="20.5" y2="20.5"/><line class="cls-1" x1="16" x2="16" y1="7" y2="5"/><path class="cls-3" d="M19,24.5a3,3,0,0,1-6,0"/></svg>';

  var list = [
    {
      title: " LCW Casual Standart Kalıp Erkek Bermuda Şort ",
      description:
        "Kargo cepli tasarıma sahip bermuda şort, rahat ve enerjik kombinler için idealdir. %100 pamuk dokunun cilde nefes aldıran ve terletmeyen yapısıyla konfor sunan tasarım, standart kalıbı ve normal bel fitiyle hareket özgürlüğü de sağlar. ",
      img: "https://img-lcwaikiki.mncdn.com/mnresize/230/306/pim/productimages/20231/6180168/v1/l_20231-s31278z8-rql-90-77-100-184_5.jpg",
      url: "https://www.lcwaikiki.com/tr-TR/TR/urun/LC-WAIKIKI/erkek/Tisort/6041132/2629446",
    },
    {
      title: " LCW Casual Standart Kalıp Erkek Bermuda Şort ",
      description:
        "Kargo cepli tasarıma sahip bermuda şort, rahat ve enerjik kombinler için idealdir. %100 pamuk dokunun cilde nefes aldıran ve terletmeyen yapısıyla konfor sunan tasarım, standart kalıbı ve normal bel fitiyle hareket özgürlüğü de sağlar. ",
      img: "https://img-lcwaikiki.mncdn.com/mnresize/230/306/pim/productimages/20231/6180168/v1/l_20231-s31278z8-rql-90-77-100-184_5.jpg",
      url: "https://www.lcwaikiki.com/tr-TR/TR/urun/LC-WAIKIKI/erkek/Bermuda/6180168/2834621",
    },
    {
      title: " LCW Casual Standart Kalıp Erkek Bermuda Şort ",
      description:
        "Kargo cepli tasarıma sahip bermuda şort, rahat ve enerjik kombinler için idealdir. %100 pamuk dokunun cilde nefes aldıran ve terletmeyen yapısıyla konfor sunan tasarım, standart kalıbı ve normal bel fitiyle hareket özgürlüğü de sağlar. ",
      img: "https://img-lcwaikiki.mncdn.com/mnresize/230/306/pim/productimages/20231/6180168/v1/l_20231-s31278z8-rql-90-77-100-184_5.jpg",
      url: "https://www.lcwaikiki.com/tr-TR/TR/urun/LC-WAIKIKI/erkek/Bermuda/6180168/2834621",
    },
  ];

  var badgeCss = {
    width: "50px",
    height: "50px",
    position: "fixed",
    top: "80%",
    right: "0",
    "z-index": "9999",
    display: "none",
  };
  var badgeContent = {
    display: "none",
  };

  var elementHeader = {
    width: "100%",
    "background-color": "rgb(226 232 240)",
    "font-size": "25px",
    "font-weight": "700",
    "text-align": "center",
    "padding-bottom": "15px",
  };

  var clsBtn = {
    "background-color": "white",
    color: "black",
    width: "30px",
    height: "30px",
    display: "grid",
    "place-items": "center",
    "padding-top": "auto",
    "padding-bottom": "auto",
    "border-radius": "9999px",
    position: "absolute",
    top: "4px",
    right: "4px",
  };

  var contentUl = {
    "background-color": "rgb(226 232 240)",
    display: "flex",
    "flex-direction": "column",
    "justify-content": "space-between",
    width: "100%",
    height: "80%",
    "padding-left": "10px",
    "list-style-type": "none",
  };

  var notificationIcon = jQuery("<div></div>")
    .attr("id", "notification-icon")
    .css(badgeCss);
  notificationIcon.html(svgRing);
  jQuery("body").append(notificationIcon);

  var element2 = jQuery("<div></div>")
    .attr("id", "notification-center")
    .css(badgeContent);

  jQuery("body").append(element2);

  var elementTitle = jQuery("<div></div>")
    .attr("id", "element-title")
    .css(elementHeader);

  jQuery("#notification-center").append(elementTitle);

  var closeBtn = jQuery("<div></div>").attr("id", "close-btn").css(clsBtn);
  jQuery("#notification-center").append(closeBtn);
  jQuery("#close-btn").html(svgClose);

  var elementUl = jQuery("<ul></ul>").attr("id", "content-ul").css(contentUl);
  jQuery("#notification-center").append(elementUl);

  jQuery("#notification-icon").click(function () {
    // menü aç
    jQuery("#notification-icon").css("display", "none");
    jQuery("#notification-center").css({
      "background-color": "rgb(226 232 240)",
      borderRadius: "12px",
      width: "400px",
      height: "400px",
      position: "fixed",
      top: "20%",
      right: "1px",
      zIndex: "9999",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    });
  });

  jQuery(window).resize(function () {
    if (jQuery(window).width() <= 500) {
      jQuery("#notification-center").css({
        width: "250px",
        height: "300px",
      });
    } else {
      jQuery("#notification-center").css({
        width: "400px",
        height: "400px",
      });
    }
  });

  jQuery("#close-btn").click(function () {
    // menü kapa
    jQuery("#notification-center").css("display", "none");
    jQuery("#notification-icon").css("display", "block");
  });

  jQuery(document).ready(function () {
    setData([
      {
        title: " LCW Casual Standart Kalıp Erkek Bermuda Şort ",
        description:
          "Kargo cepli tasarıma sahip bermuda şort, rahat ve enerjik kombinler için idealdir. %100 pamuk dokunun cilde nefes aldıran ve terletmeyen yapısıyla konfor sunan tasarım, standart kalıbı ve normal bel fitiyle hareket özgürlüğü de sağlar. ",
        img: "https://img-lcwaikiki.mncdn.com/mnresize/230/306/pim/productimages/20231/6180168/v1/l_20231-s31278z8-rql-90-77-100-184_5.jpg",
        url: "https://www.lcwaikiki.com/tr-TR/TR/urun/LC-WAIKIKI/erkek/Tisort/6041132/2629446",
      },
      {
        title: " LCW Casual Standart Kalıp Erkek Bermuda Şort ",
        description:
          "Kargo cepli tasarıma sahip bermuda şort, rahat ve enerjik kombinler için idealdir. %100 pamuk dokunun cilde nefes aldıran ve terletmeyen yapısıyla konfor sunan tasarım, standart kalıbı ve normal bel fitiyle hareket özgürlüğü de sağlar. ",
        img: "https://img-lcwaikiki.mncdn.com/mnresize/230/306/pim/productimages/20231/6180168/v1/l_20231-s31278z8-rql-90-77-100-184_5.jpg",
        url: "https://www.lcwaikiki.com/tr-TR/TR/urun/LC-WAIKIKI/erkek/Bermuda/6180168/2834621",
      },
      {
        title: " LCW Casual Standart Kalıp Erkek Bermuda Şort ",
        description:
          "Kargo cepli tasarıma sahip bermuda şort, rahat ve enerjik kombinler için idealdir. %100 pamuk dokunun cilde nefes aldıran ve terletmeyen yapısıyla konfor sunan tasarım, standart kalıbı ve normal bel fitiyle hareket özgürlüğü de sağlar. ",
        img: "https://img-lcwaikiki.mncdn.com/mnresize/230/306/pim/productimages/20231/6180168/v1/l_20231-s31278z8-rql-90-77-100-184_5.jpg",
        url: "https://www.lcwaikiki.com/tr-TR/TR/urun/LC-WAIKIKI/erkek/Bermuda/6180168/2834621",
      },
    ]);

    list = getData();

    var isProductPage = location.href.includes("/urun/");

    if (isProductPage) {
      var newImage = jQuery(jQuery("#divImage img")[0]).attr("smallimages");
      var newTitle = jQuery(jQuery(".product-code")[0]).text();
      var newDesc = jQuery(jQuery(".product-title")[0]).text();

      list.push({
        title: newTitle,
        description: newDesc,
        img: newImage,
        url: location.href,
      });

      reloadList();

      setData(list);
    }

    if (list.length >= 3) {
      jQuery("#notification-icon").css("display", "block");
    }
  });

  function reloadList() {
    jQuery("#element-title").append("Son ziyaret ettkileriniz");
    list.forEach((d) => {
      var imgElement =
        "<img style='width:60px; height:50px; border-radius:5px;' src='" +
        d.img +
        "'/>";

      var titleElement =
        "<p style='font-size:12px; font-weight:bold;'>" + d.title + "</p>";

      var descElement =
        "<p style='font-size:12px; font-weight:bold;'>" +
        d.description +
        "</p>";

      var titleHref = "<a href='" + d.url + "'>" + titleElement + "</a>";

      var liContent =
        "<div style='display:flex; gap:5px'><div style='flex:none;height:40px;'>" +
        imgElement +
        "</div><div style='display:flex; flex-direction:column;'><div style='flex-grow: 1;'>" +
        titleHref +
        "<div style='overflow:hidden; text-overflow: ellipsis; white-space: nowrap;'>" +
        descElement +
        "</div>";
      ("</div></div></div>");

      var ulLi = jQuery("<li></li>");
      ulLi.html(liContent);

      elementUl.append(ulLi);
    });
  }

  function setData(data) {
    localStorage.setItem("products", JSON.stringify(data));
  }
  function getData() {
    return JSON.parse(localStorage.getItem("products"));
  }
}
