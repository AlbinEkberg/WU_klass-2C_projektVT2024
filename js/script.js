// hamburgermeny
const burger = document.getElementById('burger')
const linkList = document.getElementById('link_list')
const scrollingElement = (document.scrollingElement || document.body);

function toggleMenu() {
    linkList.classList.toggle('links_visible')
    burger.classList.toggle('burger_in_x_form')
}

burger.addEventListener('click', toggleMenu)

function scrollToBottom() {
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
}