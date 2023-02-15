

export const getPdfLib = ():Promise<any>=>{
    return import(
        /* webpackPrefetch: true */
        /* webpackChunkName: my-chunk-name */
        'jspdf').then((lib)=>{
        console.log('jsPDF is here');
        return lib;
    })
}
