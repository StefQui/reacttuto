import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Blotter from './blotter'
import { Product } from '../model/product';
import ProductForm from './product';
import Detail from './detail';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";
import { About } from './about';
import { Home } from './home';
import { atom, RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { productCount, productList, RefreshLink } from './refreshlink';
import { Call } from './call';

export default function Blog() {
    const [products, setProducts] = useRecoilState<Product[]>(productList);
    const count = useRecoilValue(productCount);
    const [product, setProduct] = useState<Product | null>(null);
    const [mode, setMode] = useState<'VIEW' | 'EDIT'>('VIEW');

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('https://reqres.in/api/posts', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
    });

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
                console.log(ps, index, product)
                ps[index] = {...ps[index], name: product.name};
                //ps[index].name = product.name;
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
        <BrowserRouter>
            <div>

                <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                    <h5 className="my-0 mr-md-auto font-weight-normal">React demo</h5>
                    <nav className="my-2 my-md-0 mr-md-3">
                        <Link className="p-2 text-dark" to="/">Home</Link>
                        <Link className="p-2 text-dark" to="/products">Products</Link>
                        <Link className="p-2 text-dark" to="/about">About</Link>
                        <Link className="p-2 text-dark" to="/call">Call</Link>
                        <RefreshLink></RefreshLink> {count} products
                    </nav>
                    <a className="btn btn-outline-primary" href="#">Sign up</a>
                </div>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/call">
                        <Call />
                    </Route>
                    <Route path="/products">
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
                        </div>         </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}