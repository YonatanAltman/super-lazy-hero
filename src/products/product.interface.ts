export interface Price {
    amount: number;
    currency: 'USD' | 'EUR' | 'ILS';
}

export interface Product {
    id: string;
    name: string;
    serialNumber: string;
    image?: string;
    price: Price;
}


export const createProduct = (id: string, name: string, price?: Price, serialNumber?: string): Partial<Product> => {
    return {id,name,price,serialNumber};
}
