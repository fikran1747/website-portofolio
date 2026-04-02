const navlinks = document.querySelectorAll('header nav a');
const logolink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navlinks.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    sections.forEach(sections => {
        sections.classList.remove('active');
    });

    menuIcon.classList.toggle('bx-x');
    navbar.classList.remove('active');
}

navlinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

logolink.addEventListener('click', () => {
    if (!navlinks[0].classList.contains('active')) {
        activePage();

        navlinks[0].classList.add('active');

        setTimeout(() => {
        sections[0].classList.add('active');
        }, 1100);
    }
});

const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn,idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

const arrowRight = document.querySelector('.portofolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portofolio-box .navigation .arrow-left');

let index = 0;

const activePortofolio = () => {
    const imgSlide = document.querySelector('.portofolio-carousel .img-slide');
    const portofolioDetails = document.querySelectorAll('.portofolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portofolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portofolioDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
    if (index < 4) {
        index++;
        arrowLeft.classList.remove('disable');
    }
    else {
        index = 5;
        arrowRight.classList.add('disable');
    }

    activePortofolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disable');
    }
    else {
        index = 0;
        arrowLeft.classList.add('disable');
    }

    activePortofolio();
});