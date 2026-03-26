window.addEventListener('load', function () {

const loadAsset = (type, url) => {
  return new Promise((resolve, reject) => {
    const el = document.createElement(type === 'js' ? 'script' : 'link');
    if (type === 'js') {
      el.src = url;
      el.async = true;
    } else {
      el.rel = 'stylesheet';
      el.href = url;
    }
    el.onload = resolve;
    el.onerror = reject;
    document.body.style.display = "block";
    document.head.appendChild(el);
  });
};

// Load everything
Promise.all([
  loadAsset('link', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css'),
  loadAsset('link', 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css'),
  loadAsset('link', './css/style.css'),
  loadAsset('link', 'https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=search'),
  loadAsset('js', 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js'),
  loadAsset('js', 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.js')
]).then(() => {
  
const swiper1 = new Swiper('.swiper-1', {
  // Optional parameters
 
   effect: 'cube',
   grabCursor: true,
   slidesPerView: "auto", // Allows for the continuous flow of elements
   speed: 1000, // Adjust the speed of the animation (higher value = slower speed)
   loop: true, // Essential for continuous looping
   freeMode: true, // Allows for free-flowing, non-snapping movement
   
   cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    
    autoplay: {
      delay: 5000,
      disableOnInteraction: false, // Autoplay continues even after user interaction
    },

});

const swiper2 = new Swiper(".swiper-2", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      initialSlide: 2,
      loop: true, // Essential for continuous looping
      slidesPerView: "2.3", // Allows for the continuous flow of elements
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 250,
        modifier: 2.5,
        slideShadows: true,
      },

      autoplay: {
      delay: 5000, // No delay between transitions
      disableOnInteraction: false, // Autoplay continues even after user interaction
    },
    });


}).catch(err => console.error("Asset failed to load", err));


  this.document.head.insertAdjacentHTML('beforeend', `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Masses</title>
    `);

    class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `     
  <nav class="navbar navbar-expand-lg py-0">
  <div class="container-fluid">
    <a class="navbar-brand" href="../index.html">Masses</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>

    <div class="offcanvas justify-content-between offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
       <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Masses</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
      <ul class="navbar-nav mx-auto flex-grow-0 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Events</a>
        </li>
       <li class="nav-item">
          <a class="nav-link" href="#">Merch</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
      </ul>

      <form class="d-flex" role="search">
        <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
        <span class="material-symbols-outlined" onclick="document.getElementById('myForm').submit()">search</span>
      </form>
      </div>

    </div>
  </div>
</nav>
    `;
  }
}

class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="container">
  <footer>
    <ul class="nav justify-content-center border-bottom">
      <li class="nav-item"><a href="#" class="nav-link px-2">Home</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2">Events</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2">Merch</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2">FAQs</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2">About</a></li>
    </ul>
    <div class="media container">
    <!-- Section: Social media -->
    <div>
      <!-- Facebook -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="bi bi-facebook"></i
      ></a>

      <!-- Twitter -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="bi bi-twitter"></i
      ></a>

      <!-- Google -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="bi bi-google"></i
      ></a>

      <!-- Instagram -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="bi bi-instagram"></i
      ></a>

      <!-- Linkedin -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="bi bi-linkedin"></i
      ></a>

      <!-- Github -->
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="bi bi-github"></i
      ></a>
    </div>
  </div>
  <!-- Copyright -->
    <p class="text-center">&copy; 2026 Masses, Inc</p>
  </footer>
</div>
    `;
  }
}

customElements.define('app-header', AppHeader);
customElements.define('app-footer', AppFooter);



});


