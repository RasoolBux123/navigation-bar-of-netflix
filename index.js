document.addEventListener('DOMContentLoaded', () => {
    const open_btn = document.querySelector('.open-btn');
    const close_btn = document.querySelector('.close-btn');
    const nav = document.querySelectorAll('.nav');

    if (open_btn && close_btn && nav.length > 0) {
        open_btn.addEventListener('click', () => { 
            nav.forEach(nav_el => nav_el.classList.add('visible'));
        });

        close_btn.addEventListener('click', () => { 
            nav.forEach(nav_el => nav_el.classList.remove('visible'));
        });
    } else {
        console.error('One or more elements were not found.');
    }
});
