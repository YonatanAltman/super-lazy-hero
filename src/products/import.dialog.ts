export const getDialog = (): Promise<any> => {
    return import('@material/dialog').then(lib => {
        console.log('jspdf is here');
        return lib;
    })
}
