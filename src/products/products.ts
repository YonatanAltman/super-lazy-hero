import './products.scss';
import {createProduct, Product} from "./product.interface";
import {getDialog} from "./import.dialog";

const products: Partial<Product>[] = [
    createProduct('p000012', 'Advance Rxjs'),
    createProduct('p000013', 'Angular Basics'),
    createProduct('p000014', 'Advance Angular'),
    createProduct('p000015', 'Advance React'),
    createProduct('p000016', 'Fullstack workshop'),
    createProduct('p000017', 'Advance Typescript'),
]

const dialogTemplate = `<div class="mdc-dialog">
  <div class="mdc-dialog__container">
    <div class="mdc-dialog__surface"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="my-dialog-title"
      aria-describedby="my-dialog-content">
      <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
      <h2 class="mdc-dialog__title" id="my-dialog-title"><!--
     -->Product's list<!--
   --></h2>
      <div class="mdc-dialog__content" id="my-dialog-content">
        <ul class="mdc-deprecated-list mdc-deprecated-list--avatar-list">
          <!-- ... -->
        </ul>
      </div>
    </div>
  </div>
  <div class="mdc-dialog__scrim"></div>
</div>`;
document.getElementById('products-dialog').innerHTML = dialogTemplate;


const getLIElement = (p: Partial<Product>, index: number): HTMLLIElement => {
    const li = document.createElement('li');
    li.innerHTML = `     <li class="mdc-deprecated-list-item" tabindex="${index}" data-mdc-dialog-action="none">
            <span class="mdc-deprecated-list-item__text">${p.name}</span>
          </li>
     `;
    return li;
}

const onClick = (event: Event) => {
    getDialog().then(materialDialog => {
        const dialog = new materialDialog.MDCDialog(document.querySelector('.mdc-dialog'));
        console.log('Our products', products);
        const ul = document.createElement('ul');
        ul.setAttribute('id', 'my-prod-list')
        products.forEach((p, i) => {
            ul.appendChild(getLIElement(p, i))
        })
        document.getElementById('my-dialog-content').appendChild(ul);
        dialog.open();
        dialog.listen('MDCDialog:closed', () => {
            const _u = document.getElementById('my-prod-list');
            _u && document.getElementById('my-dialog-content').removeChild(_u);
        });

    })
}


document.getElementById('products-btn').addEventListener('click', onClick);


