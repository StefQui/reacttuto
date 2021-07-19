import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Blotter from '../blotter/blotter'
import { Product } from '../../model/product';
import ProductForm from '../product/product';
import Detail from '../detail/detail';

const initial: Product[] = [
    { id: 1, name: 'coca' },
    { id: 2, name: 'pepsi' }
];

export default function Blog() {
    const [products, setProducts] = useState<Product[]>(initial);
    const [product, setProduct] = useState<Product | null>(null);
    const [mode, setMode] = useState<'VIEW' | 'EDIT'>('VIEW');


    const editProduct = (pr: Product) => {
        setProduct(pr);
        setMode('EDIT');
    }

    const viewProduct = (pr: Product) => {
        setProduct(pr);
        setMode('VIEW');
    }

    const saveProduct = (product: Product) => {
        if (product.id) {
            const index = products.findIndex(p => p.id === product.id);

            if (index !== -1) {
                const ps = products.slice();
                ps[index].name = product.name;
                setProducts(ps);
                closeProduct();
            }
        } else {
            const max = products.length === 0 ? 0 : Math.max.apply(Math, products.map(p => p.id ? p.id : 0));
            const ps = products.slice();
            setProducts(products.concat({ id: max + 1, name: product.name }));
            closeProduct();
        }
    }

    const deleteProduct = (product: Product) => {
        setProduct(null);
        if (product.id) {
            const index = products.findIndex(p => p.id === product.id);
            const ps = products.slice();
            ps.splice(index, 1);
            setProducts(ps);
        }

    }

    const closeProduct = () => {
        setProduct(null);
    }

    /*     (() => { 
       })
     */
    const renderProduct = (product: Product) => {
        switch (mode) {
            case 'EDIT': {
                return <ProductForm product={product}
                    save={saveProduct}
                    close={closeProduct}></ProductForm>
            }
            case 'VIEW': {
                return <Detail product={product} close={closeProduct} />
            }
            default:

        }
    };

    const handleClickCreate = () => {
        setProduct({ name: '' });
        setMode('EDIT');
    }

    return (
        <div className="container">
            <div className="row mb-3">
                <h1>
                    Blog
                 </h1>
            </div>
            <div className="row mb-3">
                <button className="btn btn-success" onClick={() => handleClickCreate()}>create</button>
            </div>

            <div className="row mb-3">
            <Blotter products={products}
                edit={editProduct}
                view={viewProduct}
                delete={deleteProduct}></Blotter>
                </div>
                {
                    product ?
                        renderProduct(product)
                        : <p></p>
                }
        </div>
    );
}