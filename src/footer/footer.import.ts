export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

export const footerLogic = (): Promise<any> => {
    return import('axios').then((axios) => {
        return axios.default.get('https://jsonplaceholder.typicode.com/users/1').then(res => res.data);
    })
}
