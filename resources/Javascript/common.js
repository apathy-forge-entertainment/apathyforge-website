function getHeader()
{
    var  navBar = document.getElementById("header");
    navBar.innerHTML = 
    '<ul id="navBar">' +
    '<li><a href="/index.html">Home</a></li>' + 
    '<li><a href="/news.html">News</a></li>' +
    '<li><a href="/projects.html">Projects</a></li>' + 
    '<li><a href="/about.html">About</a></li>' +
    '<li><a href="/contact.html">Contact Us</a></li>' + 
    '</ul>';
}

function getFooter()
{
    var footer = document.getElementById("footer");
    footer.innerHTML = "<p>Apathy Forge Entertainment | site updated: September 2020</p>";
}