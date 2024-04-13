const navElement = document.querySelector('nav');
const navLinks = document.querySelectorAll('a');
const navPosition = navElement.getBoundingClientRect().top;

window.addEventListener('scroll',() =>{
    const scrollPosition = window.scrollY;
    navElement.style.top=scrollPosition + 'px';
    const offset=50;
    navLinks.forEach(link =>{
        const sectionElement = document.querySelector(link.hash);
        if (scrollPosition+offset >= sectionElement.offsetTop && scrollPosition+offset < sectionElement.offsetTop+sectionElement.offsetHeight) { 
            link.classList.add('active'); 
        } else {
            link.classList.remove('active');
        }
    });
});