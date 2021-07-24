import React from 'react';
import { atom, selector, useRecoilState } from 'recoil';
import { Product } from '../model/product';

const initial: Product[] = [
    { id: 1, name: 'coca' },
    { id: 2, name: 'pepsi' }
];


export const productList = atom({
    key: 'productList', // unique ID (with respect to other atoms/selectors)
    default: initial, // valeur par défaut (alias valeur initials)
  });

  export const productCount = selector({
    key: 'productCount', // unique ID (with respect to other atoms/selectors)
    get: ({get}) => {
      const list = get(productList);
  
      return list.length;
    },
  });

export function RefreshLink() {
    const [products, setProducts] = useRecoilState<Product[]>(productList);

    const refreshProductList = () => {
        setProducts(initial);
    }
    
    return (
    <button className="btn btn-default" onClick={() => refreshProductList()}>
Reset list
    </button>)
}