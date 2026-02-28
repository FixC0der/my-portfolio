const links = document.querySelectorAll('nav a ');

for (const link of links) {
    link.addEventListener('click', (even) => {
        even.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({behaviour: 'smooth'});
    });
}