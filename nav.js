const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="navbar">
            <img src="C:\Users\Emmanuella Nkanang\Documents\YEAR 4 NOTES\CEN414\pine.jpg" class="brand logo" alt="" width="80px">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>                    
                    <a href="C:\Users\Emmanuella Nkanang\Documents\YEAR 4 NOTES\CEN414\e-commerce\index.html" id="user"><img src="img/user.png"  alt=""></a>
                    <a href="C:\Users\Emmanuella Nkanang\Documents\YEAR 4 NOTES\CEN414\e-commerce\cart.html" id="cart"><img src="img/cart.png" alt=""></a>
                </div>
                
            </div>
        </div>
        <ul class="links-container">
        <li class="link-item"><a href="C:\Users\Emmanuella Nkanang\Documents\YEAR 4 NOTES\CEN414\e-commerce\index.html" class="link">Home</a></link>
        <li class="link-item"><a href="C:\Users\Emmanuella Nkanang\Documents\YEAR 4 NOTES\CEN414\e-commerce\cart.html" class="link">Cart</a></link>
        <li class="link-item"><a href="C:\Users\Emmanuella Nkanang\Documents\YEAR 4 NOTES\CEN414\e-commerce\contact.html" class="link">Contact Us</a></link>
        </ul>
    `;   
}

createNav();