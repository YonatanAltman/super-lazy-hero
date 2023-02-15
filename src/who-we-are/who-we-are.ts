import './who-we-are.scss';

const onClick = (event: Event) => {
    console.log('User clicked');


}

document.getElementById('who-btn').addEventListener('click', onClick);
