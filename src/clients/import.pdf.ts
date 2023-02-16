export const getPdfLib =():Promise<any> =>{

    return import('jspdf').then(lib =>{
        console.log('jspdf is here');
        return lib;
    })
}
