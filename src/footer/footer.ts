import './footer.scss';
import {User} from "./footer.import";

const text = `© All rights reserved. E-SQUARE DEV LTD 2023`;


const footer = (document.getElementById('footer') as HTMLDivElement);// get initial position of the element
let currentUser: Partial<User>;
window.addEventListener('scroll', (event) => {                  // assign scroll event listener
    const position = footer.getBoundingClientRect();
    if (position.top < window.innerHeight && position.bottom >= 0) {
        if (!currentUser) {
            currentUser = {};
            import('./footer.import').then((logic) => {
                logic.footerLogic().then((user: User) => {
                    currentUser = user;
                    footer.innerText = `${user.name} phone: ${user.phone} ${text}`
                });
            })
        }
    }

});
