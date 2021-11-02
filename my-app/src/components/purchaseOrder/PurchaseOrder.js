import React from "react";
// import { useReducer } from "react";
// import { initialState } from "./Redux";
// import { counterReducer } from "./Redux";


export function PurchaseOrder() {
// const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <>
      <table className="table table-borderless">
        <thead>
          <tr>
            <th scope="col">DETALLE DE LA ORDEN</th>
          </tr>
          <tr>
            <th scope="col">MESA</th>

            <th scope="col">
              CLIENTE<input type="text"></input>
            </th>
          </tr>
          <tr>
            <th scope="col">CANTIDAD</th>
            <th scope="col">PRODUCTO</th>
            <th scope="col">PRECIO</th>
          </tr>
        </thead>
        {/* <tbody>
          { props.dataBreakfast.map((breakfast) => (
            <tr key={breakfast.id}>
              <td className="table__cantidad">
                 <div> <button onClick = {() => dispatch({type: 'incremented'})}>+</button></div> 
                 <div>
                  {state.count} 
                 </div> 
                 <div> <button onClick = {() => dispatch({type: 'decremented'})}>-</button></div> 
              </td>
              <td className="table__products">
                <p>{breakfast.name}</p>
              </td>
              <td className="table__price">
                <p>${breakfast.price}</p>
              </td>
            </tr>
          ))}
        </tbody> */}

        <div className="row max-4">
          <div className="col">
            <h3 className="item-card-total">Total: </h3>
          
          </div>
          <div className="row max-4">
            <div className="col d-flex justify content-end">
              <button type="button" className="confirmer-order">
                confirmar
              </button>
              <button type="button" className="reject-order">
                anular
              </button>
            </div>
          </div>
        </div>
      </table>
    </>
  );
}