function getNavBar()
{
    var  navBar = document.getElementById("navBar");
    navBar.innerHTML = 
    '<ul>' +
    '<li><a href="index.html">Home</a></li>' + 
    '<li><a href="about.html">About</a></li>' +
    '<li><a href="projects.html">Projects</a></li>' + 
    '<li><a href="contact.html">Home</a></li>' + 
    '</ul>';
}

function getFooter()
{
    var footer = document.getElementById("footer");
    footer.innerHTML = '<p>Apathy Forge Entertainment | Site Updated: May 2020</p>';
}