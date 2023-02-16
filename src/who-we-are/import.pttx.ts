export const getPptxLib =():Promise<any> =>{

    return import('pptxgenjs').then(lib =>{
        console.log('jspdf is here');
        return lib;
    })
}
