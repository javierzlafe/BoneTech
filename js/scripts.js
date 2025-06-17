window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // ✅ Envío de formulario a WhatsApp sin email ni teléfono
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !message) {
                alert("Por favor, completá todos los campos.");
                return;
            }

            const text = `Hola, soy ${name}. Vengo de la página de BoneTech. ${message}`;
            const encodedText = encodeURIComponent(text);

            // Número real de BoneTech con código de país, sin "+" ni espacios
            const phoneNumber = "1167570011";
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;

            window.open(whatsappURL, "_blank");
        });
    }

});

  function comprar(elemento) {
    // Obtenemos el valor del producto desde el atributo
    const producto = elemento.getAttribute("data-product");
    
    // Codificamos el texto para que sea compatible con URL
    const mensaje = encodeURIComponent(`Hola, quiero averiguar por ${producto}`);

    // Número de WhatsApp con el que querés que se comuniquen (agregalo con código de país sin +)
    const telefono = "1167570011"; // cambiá este número por el tuyo real

    // Creamos el enlace
    const url = `https://wa.me/${telefono}?text=${mensaje}`;

    // Abrimos el enlace en una nueva pestaña
    window.open(url, "_blank");
  }

