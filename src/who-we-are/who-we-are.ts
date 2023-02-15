import './who-we-are.scss';
export const onClick = (event: Event) => {
    console.log('User clicked');


}

document.getElementById('who-btn').addEventListener('click', onClick);
