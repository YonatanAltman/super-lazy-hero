import './who-we-are.scss';
import pptxgen from "pptxgenjs";

const onClick = (event: Event) => {
    console.log('User clicked');
    const pres = new pptxgen();
    const slide = pres.addSlide();
    slide.addText(document.getElementById('who-we-are-p').innerText, { x: 1, y: 1, color: "363636" });
    pres.writeFile();

}

document.getElementById('who-btn').addEventListener('click', onClick);
