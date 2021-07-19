import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import { Product } from '../../model/product';

type Inputs = {
    name: string,
    exampleRequired: string,
};

export default function ProductForm(props: any) {

    const { register, handleSubmit, reset } = useForm<Product>({
        defaultValues: props.product
    });

    useEffect(() => {
        reset(props.product);
    }, [props.product]);
    const onSubmit = (product: Product) => {
        console.log(product);
        props.save(product);
    }

    console.log('render form', props);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                {props.product.id
                    ? <h6>Update de {props.product.id} / {props.product.name}</h6>
                    : <h6>Création d'un produit</h6>}
            </div>

            <div className="row">
                <div className="form-group col-md-12">
                    <label htmlFor="name">Nom</label>
                    <input type="text" className="form-control"
                        {...register("name")} />
                </div>
            </div>
            <div className="row">
                <button className="btn btn-primary mr-2">save</button>
                <button className="btn btn-default" onClick={() => props.close()}>cancel</button>
            </div>
        </form>
    );
}