document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        navbar.innerHTML = `
            <nav>
                <ul>
                    <li><a href="index.html" >homePage</a></li>
                    <li><a href="aboutUs.html">aboutUs</a></li>
                    <li><a href="productandServices.html">Product and services</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="news.html">News</a></li>
                </ul>
            </nav>
        `;
    }
});
