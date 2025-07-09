function nav() {
  let navbar = document.createElement("div")
  navbar.innerHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <!-- Logo -->
                <a href="index.html" class="logo">AJIO</a>
                
                <!-- Navigation Menu -->
                <ul class="nav-menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link">Men</a>
                        <div class="mega-menu">
                            <div class="mega-menu-content">
                                <div class="mega-menu-sidebar">
                                    <div class="sidebar-item active" data-category="men-clothing">CLOTHING</div>
                                    <div class="sidebar-item" data-category="men-footwear">FOOTWEAR</div>
                                    <div class="sidebar-item" data-category="men-accessories">ACCESSORIES</div>
                                    <div class="sidebar-item" data-category="men-new">ALL THATS NEW</div>
                                    <div class="sidebar-item" data-category="men-curve">CURVE SIZE</div>
                                    <div class="sidebar-item" data-category="men-global">AJIO GLOBAL</div>
                                    <div class="sidebar-item" data-category="men-night">NIGHT & LOUNGEWEAR</div>
                                    <div class="sidebar-item" data-category="men-beauty">BEAUTY</div>
                                    <div class="sidebar-item" data-category="men-athleisure">ATHLEISURE</div>
                                    <div class="sidebar-item" data-category="men-fusion">FUSION WEAR</div>
                                </div>
                                <div class="mega-menu-main" id="men-content">
                                    <!-- Content will be dynamically updated -->
                                    <div class="mega-category">
                                        <h4 class="mega-category-title">ETHNIC WEAR</h4>
                                        <ul class="mega-category-links">
                                            <li><a href="#">Kurtas</a></li>
                                            <li><a href="#">Sherwanis</a></li>
                                            <li><a href="#">Nehru Jackets</a></li>
                                            <li><a href="#">Dhotis</a></li>
                                            <li><a href="#">Ethnic Sets</a></li>
                                            <li><a href="#">Modi Jackets</a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-category">
                                        <h4 class="mega-category-title">WESTERN WEAR</h4>
                                        <ul class="mega-category-links">
                                            <li><a href="#">T-Shirts</a></li>
                                            <li><a href="#">Shirts</a></li>
                                            <li><a href="#">Jeans</a></li>
                                            <li><a href="#">Trousers</a></li>
                                            <li><a href="#">Shorts</a></li>
                                            <li><a href="#">Jackets</a></li>
                                            <li><a href="#">Blazers</a></li>
                                            <li><a href="#">Suits</a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-category">
                                        <h4 class="mega-category-title">INNERWEAR</h4>
                                        <ul class="mega-category-links">
                                            <li><a href="#">Briefs</a></li>
                                            <li><a href="#">Boxers</a></li>
                                            <li><a href="#">Vests</a></li>
                                            <li><a href="#">Thermal Wear</a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-category">
                                        <h4 class="mega-category-title">ACCESSORIES</h4>
                                        <ul class="mega-category-links">
                                            <li><a href="#">Watches</a></li>
                                            <li><a href="#">Belts</a></li>
                                            <li><a href="#">Wallets</a></li>
                                            <li><a href="#">Sunglasses</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    
                    <li class="nav-item">
                        <a href="#" class="nav-link">Women</a>
                        <div class="mega-menu">
                            <div class="mega-menu-content">
                                <div class="mega-menu-sidebar">
                                    <div class="sidebar-item active" data-category="women-clothing">CLOTHING</div>
                                    <div class="sidebar-item" data-category="women-footwear">FOOTWEAR</div>
                                    <div class="sidebar-item" data-category="women-accessories">ACCESSORIES</div>
                                    <div class="sidebar-item" data-category="women-new">ALL THATS NEW</div>
                                    <div class="sidebar-item" data-category="women-curve">CURVE SIZE</div>
                                    <div class="sidebar-item" data-category="women-global">AJIO GLOBAL</div>
                                    <div class="sidebar-item" data-category="women-night">NIGHT & LOUNGEWEAR</div>
                                    <div class="sidebar-item" data-category="women-beauty">BEAUTY</div>
                                    <div class="sidebar-item" data-category="women-athleisure">ATHLEISURE</div>
                                    <div class="sidebar-item" data-category="women-fusion">FUSION WEAR</div>
                                </div>
                                <div class="mega-menu-main" id="women-content">
                                    <div class="mega-category">
                                        <h4 class="mega-category-title">WESTERN WEAR</h4>
                                        <ul class="mega-category-links">
                                            <li><a href="#">Tops</a></li>
                                            <li><a href="#">Dresses</a></li>
                                            <li><a href="#">T-Shirts</a></li>
                                            <li><a href="#">Jeans</a></li>
                                            <li><a href="#">Shirts</a></li>
                                            <li><a href="#">Trousers</a></li>
                                            <li><a href="#">Skirts</a></li>
                                            <li><a href="#">Shorts</a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-category">
                                        <h4 class="mega-category-title">ETHNIC WEAR</h4>
                                        <ul class="mega-category-links">
                                            <li><a href="#">Kurtas & Kurtis</a></li>
                                            <li><a href="#">Sarees</a></li>
                                            <li><a href="#">Salwar Suits</a></li>
                                            <li><a href="#">Lehenga Choli</a></li>
                                            <li><a href="#">Ethnic Dresses</a></li>
                                            <li><a href="#">Palazzos</a></li>
                                            <li><a href="#">Dupattas</a></li>
                                            <li><a href="#">Blouses</a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-category">
                                        <h4 class="mega-category-title">FOOTWEAR</h4>
                                        <ul class="mega-category-links">
                                            <li><a href="#">Heels</a></li>
                                            <li><a href="#">Flats</a></li>
                                            <li><a href="#">Sandals</a></li>
                                            <li><a href="#">Sneakers</a></li>
                                            <li><a href="#">Boots</a></li>
                                            <li><a href="#">Sports Shoes</a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-category">
                                        <h4 class="mega-category-title">ACCESSORIES</h4>
                                        <ul class="mega-category-links">
                                            <li><a href="#">Handbags</a></li>
                                            <li><a href="#">Watches</a></li>
                                            <li><a href="#">Sunglasses</a></li>
                                            <li><a href="#">Jewellery</a></li>
                                            <li><a href="#">Belts</a></li>
                                            <li><a href="#">Scarves</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    
                    <li class="nav-item">
                        <a href="#" class="nav-link">Kids</a>
                        <div class="mega-menu">
                            <div class="mega-menu-content">
                                <div class="mega-menu-sidebar">
                                    <div class="sidebar-item active" data-category="women-clothing">CLOTHING</div>
                                    <div class="sidebar-item" data-category="women-footwear">FOOTWEAR</div>
                                    <div class="sidebar-item" data-category="women-accessories">ACCESSORIES</div>
                                    <div class="sidebar-item" data-category="women-new">ALL THATS NEW</div>
                                    <div class="sidebar-item" data-category="women-curve">CURVE SIZE</div>
                                    <div class="sidebar-item" data-category="women-global">AJIO GLOBAL</div>
                                    <div class="sidebar-item" data-category="women-night">NIGHT & LOUNGEWEAR</div>
                                    <div class="sidebar-item" data-category="women-beauty">BEAUTY</div>
                                    <div class="sidebar-item" data-category="women-athleisure">ATHLEISURE</div>
                                    <div class="sidebar-item" data-category="women-fusion">FUSION WEAR</div>
                                </div>
                                <div class="mega-menu-main" id="women-content">
                                    <div class="mega-category">
                                        <h4 class="mega-category-title">WESTERN WEAR</h4>
                                        <ul class="mega-category-links">
                                            <li><a href="#">Tops</a></li>
                                            <li><a href="#">Dresses</a></li>
                                            <li><a href="#">T-Shirts</a></li>
                                            <li><a href="#">Jeans</a></li>
                                            <li><a href="#">Shirts</a></li>
                                            <li><a href="#">Trousers</a></li>
                                            <li><a href="#">Skirts</a></li>
                                            <li><a href="#">Shorts</a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-category">
                                        <h4 class="mega-category-title">ETHNIC WEAR</h4>
                                        <ul class="mega-category-links">
                                            <li><a href="#">Kurtas & Kurtis</a></li>
                                            <li><a href="#">Sarees</a></li>
                                            <li><a href="#">Salwar Suits</a></li>
                                            <li><a href="#">Lehenga Choli</a></li>
                                            <li><a href="#">Ethnic Dresses</a></li>
                                            <li><a href="#">Palazzos</a></li>
                                            <li><a href="#">Dupattas</a></li>
                                            <li><a href="#">Blouses</a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-category">
                                        <h4 class="mega-category-title">FOOTWEAR</h4>
                                        <ul class="mega-category-links">
                                            <li><a href="#">Heels</a></li>
                                            <li><a href="#">Flats</a></li>
                                            <li><a href="#">Sandals</a></li>
                                            <li><a href="#">Sneakers</a></li>
                                            <li><a href="#">Boots</a></li>
                                            <li><a href="#">Sports Shoes</a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-category">
                                        <h4 class="mega-category-title">ACCESSORIES</h4>
                                        <ul class="mega-category-links">
                                            <li><a href="#">Handbags</a></li>
                                            <li><a href="#">Watches</a></li>
                                            <li><a href="#">Sunglasses</a></li>
                                            <li><a href="#">Jewellery</a></li>
                                            <li><a href="#">Belts</a></li>
                                            <li><a href="#">Scarves</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Beauty</a>
                        <div class="mega-menu">
                            <div class="mega-menu-content">
                                <div class="mega-menu-sidebar">
                                    <div class="sidebar-item active" data-category="women-clothing">CLOTHING</div>
                                    <div class="sidebar-item" data-category="women-footwear">FOOTWEAR</div>
                                    <div class="sidebar-item" data-category="women-accessories">ACCESSORIES</div>
                                    <div class="sidebar-item" data-category="women-new">ALL THATS NEW</div>
                                    <div class="sidebar-item" data-category="women-curve">CURVE SIZE</div>
                                    <div class="sidebar-item" data-category="women-global">AJIO GLOBAL</div>
                                    <div class="sidebar-item" data-category="women-night">NIGHT & LOUNGEWEAR</div>
                                    <div class="sidebar-item" data-category="women-beauty">BEAUTY</div>
                                    <div class="sidebar-item" data-category="women-athleisure">ATHLEISURE</div>
                                    <div class="sidebar-item" data-category="women-fusion">FUSION WEAR</div>
                                </div>
                                <div class="mega-menu-main" id="women-content">
                                    <div class="mega-category">
                                        <h4 class="mega-category-title">WESTERN WEAR</h4>
                                        <ul class="mega-category-links">
                                            <li><a href="#">Tops</a></li>
                                            <li><a href="#">Dresses</a></li>
                                            <li><a href="#">T-Shirts</a></li>
                                            <li><a href="#">Jeans</a></li>
                                            <li><a href="#">Shirts</a></li>
                                            <li><a href="#">Trousers</a></li>
                                            <li><a href="#">Skirts</a></li>
                                            <li><a href="#">Shorts</a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-category">
                                        <h4 class="mega-category-title">ETHNIC WEAR</h4>
                                        <ul class="mega-category-links">
                                            <li><a href="#">Kurtas & Kurtis</a></li>
                                            <li><a href="#">Sarees</a></li>
                                            <li><a href="#">Salwar Suits</a></li>
                                            <li><a href="#">Lehenga Choli</a></li>
                                            <li><a href="#">Ethnic Dresses</a></li>
                                            <li><a href="#">Palazzos</a></li>
                                            <li><a href="#">Dupattas</a></li>
                                            <li><a href="#">Blouses</a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-category">
                                        <h4 class="mega-category-title">FOOTWEAR</h4>
                                        <ul class="mega-category-links">
                                            <li><a href="#">Heels</a></li>
                                            <li><a href="#">Flats</a></li>
                                            <li><a href="#">Sandals</a></li>
                                            <li><a href="#">Sneakers</a></li>
                                            <li><a href="#">Boots</a></li>
                                            <li><a href="#">Sports Shoes</a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-category">
                                        <h4 class="mega-category-title">ACCESSORIES</h4>
                                        <ul class="mega-category-links">
                                            <li><a href="#">Handbags</a></li>
                                            <li><a href="#">Watches</a></li>
                                            <li><a href="#">Sunglasses</a></li>
                                            <li><a href="#">Jewellery</a></li>
                                            <li><a href="#">Belts</a></li>
                                            <li><a href="#">Scarves</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Kitchen</a>
                        <div class="mega-menu">
                            <div class="mega-menu-content">
                                <div class="mega-menu-sidebar">
                                    <div class="sidebar-item active" data-category="women-clothing">CLOTHING</div>
                                    <div class="sidebar-item" data-category="women-footwear">FOOTWEAR</div>
                                    <div class="sidebar-item" data-category="women-accessories">ACCESSORIES</div>
                                    <div class="sidebar-item" data-category="women-new">ALL THATS NEW</div>
                                    <div class="sidebar-item" data-category="women-curve">CURVE SIZE</div>
                                    <div class="sidebar-item" data-category="women-global">AJIO GLOBAL</div>
                                    <div class="sidebar-item" data-category="women-night">NIGHT & LOUNGEWEAR</div>
                                    <div class="sidebar-item" data-category="women-beauty">BEAUTY</div>
                                    <div class="sidebar-item" data-category="women-athleisure">ATHLEISURE</div>
                                    <div class="sidebar-item" data-category="women-fusion">FUSION WEAR</div>
                                </div>
                                <div class="mega-menu-main" id="women-content">
                                    <div class="mega-category">
                                        <h4 class="mega-category-title">WESTERN WEAR</h4>
                                        <ul class="mega-category-links">
                                            <li><a href="#">Tops</a></li>
                                            <li><a href="#">Dresses</a></li>
                                            <li><a href="#">T-Shirts</a></li>
                                            <li><a href="#">Jeans</a></li>
                                            <li><a href="#">Shirts</a></li>
                                            <li><a href="#">Trousers</a></li>
                                            <li><a href="#">Skirts</a></li>
                                            <li><a href="#">Shorts</a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-category">
                                        <h4 class="mega-category-title">ETHNIC WEAR</h4>
                                        <ul class="mega-category-links">
                                            <li><a href="#">Kurtas & Kurtis</a></li>
                                            <li><a href="#">Sarees</a></li>
                                            <li><a href="#">Salwar Suits</a></li>
                                            <li><a href="#">Lehenga Choli</a></li>
                                            <li><a href="#">Ethnic Dresses</a></li>
                                            <li><a href="#">Palazzos</a></li>
                                            <li><a href="#">Dupattas</a></li>
                                            <li><a href="#">Blouses</a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-category">
                                        <h4 class="mega-category-title">FOOTWEAR</h4>
                                        <ul class="mega-category-links">
                                            <li><a href="#">Heels</a></li>
                                            <li><a href="#">Flats</a></li>
                                            <li><a href="#">Sandals</a></li>
                                            <li><a href="#">Sneakers</a></li>
                                            <li><a href="#">Boots</a></li>
                                            <li><a href="#">Sports Shoes</a></li>
                                        </ul>
                                    </div>
                                    <div class="mega-category">
                                        <h4 class="mega-category-title">ACCESSORIES</h4>
                                        <ul class="mega-category-links">
                                            <li><a href="#">Handbags</a></li>
                                            <li><a href="#">Watches</a></li>
                                            <li><a href="#">Sunglasses</a></li>
                                            <li><a href="#">Jewellery</a></li>
                                            <li><a href="#">Belts</a></li>
                                            <li><a href="#">Scarves</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                
                <!-- Search Bar -->
                <div class="search-container">
                    <input type="text" class="search-box" placeholder="Search AJIO">
                    <button class="search-btn">🔍</button>
                </div>
                
                <!-- Right Side Links and Icons -->
                <div class="nav-right">
                    <div class="nav-right-links">
                        <a href="#" class="nav-right-link">Sign In / Join AJIO</a>
                        <a href="#" class="nav-right-link">Customer Care</a>
                        <a href="#" class="nav-right-link visit-luxe">Visit AJIOLUXE</a>
                    </div>
                    <div class="nav-icons">
                        <a href="#" class="icon-link" title="Wishlist">
                        <i class="ri-heart-3-line"></i></a>
                        <a href="#" class="icon-link" title="Shopping Bag">
                            <i class="ri-shopping-bag-line"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Hamburger Menu -->

                <div class="hamburger" id="hamburgerBtn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                
                <!-- Mobile Menu -->
                <div class="mobile-menu" id="mobileMenu">
                    <div class="mobile-search">
                        <input type="text" placeholder="Search AJIO">
                    </div>
                    
                    <div class="mobile-nav-item">
                        <a href="#" class="mobile-nav-link">Men</a>
                    </div>
                    <div class="mobile-nav-item">
                        <a href="#" class="mobile-nav-link">Women</a>
                    </div>
                    <div class="mobile-nav-item">
                        <a href="#" class="mobile-nav-link">Kids</a>
                    </div>
                    <div class="mobile-nav-item">
                        <a href="#" class="mobile-nav-link">Beauty</a>
                    </div>
                    <div class="mobile-nav-item">
                        <a href="#" class="mobile-nav-link">Home & Kitchen</a>
                    </div>
                    
                    <div class="mobile-right-links">
                        <a href="#" class="nav-right-link">Sign In / Join AJIO</a>
                        <a href="#" class="nav-right-link">Customer Care</a>
                        <a href="#" class="nav-right-link visit-luxe">Visit AJIOLUXE</a>
                    </div>
                </div>
            </div>
        </nav>
    `
  return navbar
}
const categoryContent = {
  "men-clothing": {
    categories: [
      {
        title: "ETHNIC WEAR",
        links: ["Kurtas", "Sherwanis", "Nehru Jackets", "Dhotis", "Ethnic Sets", "Modi Jackets"],
      },
      {
        title: "WESTERN WEAR",
        links: ["T-Shirts", "Shirts", "Jeans", "Trousers", "Shorts", "Jackets", "Blazers", "Suits"],
      },
      {
        title: "INNERWEAR",
        links: ["Briefs", "Boxers", "Vests", "Thermal Wear"],
      },
      {
        title: "ACCESSORIES",
        links: ["Watches", "Belts", "Wallets", "Sunglasses"],
      },
    ],
  },
  "men-footwear": {
    categories: [
      {
        title: "CASUAL SHOES",
        links: ["Sneakers", "Loafers", "Canvas Shoes", "Boat Shoes"],
      },
      {
        title: "FORMAL SHOES",
        links: ["Oxford Shoes", "Derby Shoes", "Monk Straps", "Brogues"],
      },
      {
        title: "SPORTS SHOES",
        links: ["Running Shoes", "Training Shoes", "Basketball Shoes", "Football Shoes"],
      },
      {
        title: "SANDALS & SLIPPERS",
        links: ["Flip Flops", "Slides", "Sports Sandals", "House Slippers"],
      },
    ],
  },
  "men-accessories": {
    categories: [
      {
        title: "BAGS",
        links: ["Backpacks", "Laptop Bags", "Travel Bags", "Messenger Bags"],
      },
      {
        title: "WATCHES",
        links: ["Analog Watches", "Digital Watches", "Smart Watches", "Chronograph"],
      },
      {
        title: "WALLETS & BELTS",
        links: ["Leather Wallets", "Card Holders", "Leather Belts", "Canvas Belts"],
      },
      {
        title: "EYEWEAR",
        links: ["Sunglasses", "Reading Glasses", "Blue Light Glasses", "Sports Glasses"],
      },
    ],
  },
  "women-clothing": {
    categories: [
      {
        title: "WESTERN WEAR",
        links: ["Tops", "Dresses", "T-Shirts", "Jeans", "Shirts", "Trousers", "Skirts", "Shorts"],
      },
      {
        title: "ETHNIC WEAR",
        links: [
          "Kurtas & Kurtis",
          "Sarees",
          "Salwar Suits",
          "Lehenga Choli",
          "Ethnic Dresses",
          "Palazzos",
          "Dupattas",
          "Blouses",
        ],
      },
      {
        title: "FOOTWEAR",
        links: ["Heels", "Flats", "Sandals", "Sneakers", "Boots", "Sports Shoes"],
      },
      {
        title: "ACCESSORIES",
        links: ["Handbags", "Watches", "Sunglasses", "Jewellery", "Belts", "Scarves"],
      },
    ],
  },
  "women-footwear": {
    categories: [
      {
        title: "HEELS",
        links: ["Stilettos", "Block Heels", "Wedges", "Kitten Heels"],
      },
      {
        title: "FLATS",
        links: ["Ballet Flats", "Loafers", "Moccasins", "Slip-ons"],
      },
      {
        title: "SNEAKERS",
        links: ["Casual Sneakers", "Running Shoes", "High-tops", "Platform Sneakers"],
      },
      {
        title: "SANDALS",
        links: ["Flat Sandals", "Heeled Sandals", "Gladiator Sandals", "Ankle Strap Sandals"],
      },
    ],
  },
}

function updateMegaMenuContent(category, contentContainer) {
  if (categoryContent[category]) {
    const content = categoryContent[category]
    let html = ""

    content.categories.forEach((cat) => {
      html += `
                <div class="mega-category">
                    <h4 class="mega-category-title">${cat.title}</h4>
                    <ul class="mega-category-links">
                        ${cat.links.map((link) => `<li><a href="#">${link}</a></li>`).join("")}
                    </ul>
                </div>
            `
    })

    contentContainer.innerHTML = html
  }
}

function initializeMegaMenuHover() {
  const sidebarItems = document.querySelectorAll(".sidebar-item")

  sidebarItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      const category = this.getAttribute("data-category")
      const parentMegaMenu = this.closest(".mega-menu")
      const contentContainer = parentMegaMenu.querySelector(".mega-menu-main")

      const allSidebarItems = parentMegaMenu.querySelectorAll(".sidebar-item")
      allSidebarItems.forEach((sItem) => sItem.classList.remove("active"))

      this.classList.add("active")

      updateMegaMenuContent(category, contentContainer)
    })
  })
}

function toggleMobileMenu() {
  const hamburger = document.querySelector(".hamburger")
  const mobileMenu = document.getElementById("mobileMenu")

  hamburger.classList.toggle("active")
  mobileMenu.classList.toggle("active")
}

function handleOutsideClick(event) {
  const navbar = document.querySelector(".navbar")
  const mobileMenu = document.getElementById("mobileMenu")
  const hamburger = document.querySelector(".hamburger")

  if (navbar && !navbar.contains(event.target)) {
    if (mobileMenu) mobileMenu.classList.remove("active")
    if (hamburger) hamburger.classList.remove("active")
  }
}

function handleResize() {
  if (window.innerWidth > 768) {
    const mobileMenu = document.getElementById("mobileMenu")
    const hamburger = document.querySelector(".hamburger")
    if (mobileMenu) mobileMenu.classList.remove("active")
    if (hamburger) hamburger.classList.remove("active")
  }
}

window.initializeNavbar = () => {
  initializeMegaMenuHover()

  document.addEventListener("click", handleOutsideClick)
  window.addEventListener("resize", handleResize)

  const hamburgerBtn = document.getElementById("hamburgerBtn")
  if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", toggleMobileMenu)
  }

  window.toggleMobileMenu = toggleMobileMenu
}

export default nav
