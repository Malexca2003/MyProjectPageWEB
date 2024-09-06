document.getElementById('searchToggle').addEventListener('click', function () {
    const searchForm = document.getElementById('search-form');
    if (searchForm.style.display === 'block') {
        searchForm.style.display = 'none';
    } else {
        searchForm.style.display = 'block';
    }
});

document.getElementById('cartToggle').addEventListener('click', function () {
    const cart = document.getElementById('cart');
    if (cart.style.display === 'block') {
        cart.style.display = 'none';
    } else {
        cart.style.display = 'block';
    }
});
function refreshPage() {
    location.reload();
}
document.addEventListener('DOMContentLoaded', function () {
    // Animación de barrido al recargar la página
    document.body.style.opacity = '0';
    window.onload = function () {
        document.body.style.transition = 'opacity 0.5s';
        document.body.style.opacity = '1';
    };

    // Mostrar/ocultar el formulario de búsqueda
    const searchToggle = document.getElementById('searchToggle');
    const searchForm = document.getElementById('search-form');
    searchToggle.addEventListener('click', function (event) {
        event.preventDefault();
        if (searchForm.style.display === 'none') {
            searchForm.style.display = 'block';
        } else {
            searchForm.style.display = 'none';
        }
    });

    // Mostrar/ocultar el carrito de compras
    const cartToggle = document.getElementById('cartToggle');
    const cart = document.getElementById('cart');
    cartToggle.addEventListener('click', function (event) {
        event.preventDefault();
        if (cart.style.display === 'none') {
            cart.style.display = 'block';
        } else {
            cart.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.zoomable-image');

    images.forEach(function (image) {
        image.addEventListener('mouseenter', function () {
            image.style.transition = 'transform 0.5s';
            image.style.transform = 'scale(1.1)';
        });

        image.addEventListener('mouseleave', function () {
            image.style.transition = 'transform 0.5s';
            image.style.transform = 'scale(1)';
        });
    });
});

let previousScrollPosition = window.pageYOffset;
const navbar = document.getElementById("navbar");

window.onscroll = function () {
    let currentScrollPosition = window.pageYOffset;

    if (previousScrollPosition > currentScrollPosition) {
        navbar.style.top = "0";  // Muestra la navbar
    } else {
        navbar.style.top = "-50px";  // Oculta la navbar cuando el usuario se desplaza hacia abajo
    }

    previousScrollPosition = currentScrollPosition;
}

function searchProducts() {
    // Obtener el valor de búsqueda
    var searchQuery = document.getElementById('searchInput').value.toLowerCase();

    // Obtener todos los elementos de producto
    var products = document.getElementsByClassName('product');

    // Iterar sobre los productos y mostrar/ocultar según la búsqueda
    for (var i = 0; i < products.length; i++) {
        var productName = products[i].getAttribute('data-name').toLowerCase();
        if (productName.includes(searchQuery)) {
            products[i].style.display = 'block'; // Mostrar el producto si coincide con la búsqueda
        } else {
            products[i].style.display = 'none'; // Ocultar el producto si no coincide con la búsqueda
        }
    }


}