class AppHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Masses</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=search" />

       
    <nav class="navbar navbar-expand-lg py-0">
  <div class="container-fluid">
    <a class="navbar-brand" href="../index.html">Masses</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mb-lg-0">
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
</nav>
    `;
  }
}

class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer style="border:2px solid blue; padding:5px; margin-top: 20px;">
        <p>&copy; 2026 MassesBlueWave</p>
      </footer>
    `;
  }
}

customElements.define('app-header', AppHeader);
customElements.define('app-footer', AppFooter);
