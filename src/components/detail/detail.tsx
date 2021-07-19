import React from 'react';
import ReactDOM from 'react-dom';

export default function Detail(props: any) {

    return (
        <div>
            <div className="row mb-2">
                <div className="card">
                    <div className="card-body">
                    <div className="card-title">
                            <h5>
                                Détail product
                            </h5>
                        </div>
                        <p className="card-text">
                                {props.product.id} / {props.product.name}
                        </p>

                    </div>
                </div>
            </div>
            <div className="row">

                <button className='btn' onClick={() => props.close()}>close</button>
            </div>
        </div>
    );
}