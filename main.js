function copy_contract() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    navigator.clipboard.writeText("0x25sdDS5f1s561sF1S5F18ER8");
}

document.querySelectorAll('.nav_buttons a').forEach(function(link) {
    link.addEventListener('click', function(event) {
      var href = this.getAttribute('href');
      if (href.startsWith('#')) {
        event.preventDefault();
        var targetId = href.substring(1);
        var targetElement = document.getElementById(targetId);
        if (targetElement) {
          var targetTop = targetElement.getBoundingClientRect().top + window.scrollY - 70;
          window.scrollTo({
            top: targetTop,
            behavior: 'smooth'
          });
        }
      }
    });
});

$('#carousel').slick({
    slidesToShow:6,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 10000,
    cssEase:'linear',
    infinite: true,
    focusOnSelect: false,
    responsive: [{
        breakpoint: 768,
        settings: {
            arrows: false,
            slidesToShow: 6
        }
    }, {
        breakpoint: 480,
        settings: {
            arrows: false,
            slidesToShow: 3
        }
    }]
});