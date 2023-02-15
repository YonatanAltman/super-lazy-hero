import './products.scss';
import {createProduct, Product} from "./product.interface";

const products: Partial<Product>[] = [
    createProduct('p000012', 'Advance Rxjs'),
    createProduct('p000013', 'Angular Basics'),
    createProduct('p000014', 'Advance Angular'),
    createProduct('p000015', 'Advance React'),
    createProduct('p000016', 'Fullstack workshop'),
    createProduct('p000017', 'Advance Typescript'),
]

const onClick = (event: Event) => {
    console.log('Our products', products);
}


document.getElementById('products-btn').addEventListener('click', onClick);


