import './navigation.scss';

const wrapper = (document.getElementsByClassName('navMenu')[0] as HTMLDivElement);// get initial position of the element
const PADDING = 10;

window.addEventListener('scroll', (event) => {                  // assign scroll event listener
    const screenTop = (event.currentTarget as Window).scrollY;
    if (screenTop >= wrapper.offsetTop + PADDING) {           // apply position: fixed if you
        wrapper.classList.add('sticky');
    } else {                                   // apply position: static
        wrapper.classList.remove('sticky');
    }

});
