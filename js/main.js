(function ($) {
    "use strict";
    
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    new WOW().init();

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-white shadow-sm').css('top', '-1px');
        } else {
            $('.sticky-top').removeClass('bg-white shadow-sm').css('top', '-100px');
        }
    });

    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
})(jQuery);

function loadHTML(file, elementId) {
  var xhr = new XMLHttpRequest(); 

  xhr.open('GET', file, true);

  xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
      document.getElementById(elementId).innerHTML = xhr.responseText;
    } else {
      console.error('Error al cargar el archivo:', xhr.status, xhr.statusText);
    }
  };
  
  xhr.onerror = function() {
    console.error('Error en la solicitud XHR');
  };
  
  xhr.send();
}

window.onload = function() {
    const cookieBar = document.getElementById('cookieBar');
    const acceptBtn = document.getElementById('acceptBtn');
    const rejectBtn = document.getElementById('rejectBtn');

    // Mostrar la barra solo si no se ha tomado una decisión previamente
    if (!localStorage.getItem('cookiesAccepted')) {
        cookieBar.style.display = 'block';
    }

    // Acción al aceptar cookies
    acceptBtn.onclick = function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBar.style.display = 'none';
    }

    // Acción al rechazar cookies
    rejectBtn.onclick = function() {
        localStorage.setItem('cookiesAccepted', 'false');
        cookieBar.style.display = 'none';
    }
}