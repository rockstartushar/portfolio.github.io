const header1 = document.getElementById("header1");

const header2 = document.getElementById("header2");
const insideMenu = (menu) => {
  if (menu === "myself") {
    $("#header2 p strong").html("Let me  introduce myself ");
  }
  if (menu === "project") {
    $("#header2 p strong").html("Here's My Work");
  }
}

const visible = function(partial) {

  var $t = $(this),
  $w = $(window),
  viewTop = $w.scrollTop(),
  viewBottom = viewTop + $w.height(),
  _top = $t.offset().top,
  _bottom = _top + $t.height(),
  compareTop = partial === true ? _bottom: _top,
  compareBottom = partial === true ? _top: _bottom;

  return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
}
var win = $(window);
var allMods = $(".webpro-card");

// Already visible modules
allMods.each(function(i, el) {
  var el = $(el);
  if (visible(el)) {
    el.addClass("already-visible");
  }
});

win.scroll(function(event) {
  allMods.each(function(i, el) {
    if (el.is(":visible")) {
      el.addClass("come-in");
    }
  });
});

function showHideElements() {
  $("#back-area").hide();
  $("#project").hide();
  $("#main").show();
  $("#myself").hide();
  $("#achieve").hide();
  $("#project").hide();
}
$(document).ready(function() {
  $('#header1 h5').show(2000);
  $('#header1 a').show(3000);
  $('#header1 h3').show(4000);
  $('#myself-link').click(function() {
    $("#back-area").show();
    $("#project").hide();
    $("#main").hide();
    $("#myself").show();
    insideMenu("myself");
  });
  $('#achieve-link').click(function() {
    alert("nothing..pls check for others");
    insideMenu("achievement");
  });
  $('#project-link').click(function() {
    $("#back-area").show();
    $("#project").show();
    $("#main").hide();
    $("#myself").hide();
    $("#achieve").hide();
    insideMenu("project");
  });
  $('#contact-link').click(function() {
    $('.contact-item').css({
      display: 'block'
    });
    insideMenu("contact");
  });
  $('#back-from-contact').click(function() {
    $('.contact-item').css({
      display: 'none'
    });
  });
});

function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= -150 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
$(window).on("scroll", ()=> {
  if (!isInViewport(header1)) {
    console. log("hello");
    $("#back-area").show();
    header1.style.display = "none";
    header2.style.display = "block";
  }
});

$("#back-area").click(function() {
  rotatingElement(this);
});
function rotatingElement(elem) {
  var rol = 0;
  const rotate = setTimeout(function() {
    if (rol !== 360) {
      rol += 60;
      elem.style.transform = 'rotate(`${rol}+deg`)';
    }
  },
    10);
  showHideElements();
}