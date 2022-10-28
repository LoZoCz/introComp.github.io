var ham = document.querySelector('.hamburger');
var icon = document.querySelector('.hambicon');

function showMenu()
{
    var menu = document.createElement('div');
    menu.setAttribute('class', 'menu');

    menu.innerHTML = `
    <ul>
        <li><a href=#>Product</a></li>
        <li><a href=#>Features</a></li>
        <li><a href=#>Pricing</a></li>
        <hr>
        <li><a href=#>Login</a></li>
    </ul>`

    menu.style.display = 'none';

    var nav = document.querySelector('.navbar');

    nav.appendChild(menu);

    var menu = document.querySelector(".menu");

    if(menu.style.display === 'none')
    {
        menu.style.display = 'block'
        icon.innerHTML = '<img class="hamburger" src="images/icon-close.svg" alt="close">'
    } else
    {
        menu.style.display = 'none';
        icon.innerHTML = '<img class="hamburger" src="images/icon-hamburger.svg" alt="hamburger">'
    }
}

icon.addEventListener('click', showMenu);