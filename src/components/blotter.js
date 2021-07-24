import React from 'react';
import ReactDOM from 'react-dom';

export default function Blotter(props) {

    return (
        <div className="mb-3">
        <table className="table table-bordered table-sm">
            <thead>
                <tr><td>Id</td><td>Name</td>
                </tr>
                </thead>
                <tbody>
        {
          props.products.map((p) => <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td><button className="btn btn-default btn-sm" onClick={() => props.view(p)}>View</button></td>
              <td><button className="btn btn-default btn-sm" onClick={() => props.edit(p)}>Edit</button></td>
              <td><button className="btn btn-danger btn-sm" onClick={() => props.delete(p)}>Delete</button></td>
              </tr>)
      }
      </tbody>
        </table>
        </div>
    );
  }