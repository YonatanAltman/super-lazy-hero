import './who-we-are.scss';
import {getPptxLib} from "./import.pttx";

const onClick = (event: Event) => {
    getPptxLib().then(getPptxLib => {
        console.log('User clicked');
        const pres = new getPptxLib.default();
        const slide = pres.addSlide();
        slide.addText(document.getElementById('who-we-are-p').innerText, {x: 1, y: 1, color: "363636"});
        pres.writeFile();
    })
}

document.getElementById('who-btn').addEventListener('click', onClick);
