import React from "react";
<<<<<<< HEAD
import './purchaseOrder.css';
// CONTADOR
=======
import { useReducer } from "react";
import { initialState } from "./Redux";
import { counterReducer } from "./Redux";
>>>>>>> 91b01b2925d296e5650ebc386a0e429e183d188a


export function PurchaseOrder(props) {
const [state, dispatch] = useReducer(counterReducer, initialState);


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
        <tbody>
          { props.dataBreakfast.map((breakfast) => (
            <tr key={breakfast.id}>
              <td className="table__cantidad">
                 <div> <button onClick = {() => dispatch({type: 'incremented'})}>+</button></div> 
                 <div  >
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

              {/* <td className = "table__delete"><img className = "table__delete" src={delete} alt="delete" /></td> */}
            </tr>
          ))}
        </tbody>

        <tbody>
          {props.dataBurger.length > 0 && props.dataBurger.map((lunch) => (
            <tr key={lunch.id}>
              <td className="table__cantidad">
              <div> <button onClick = {() => dispatch({type: 'incremented'})}>+</button></div> 
                 <div  >
                  {state.count} 
                 </div> 
                 <div> <button onClick = {() => dispatch({type: 'decremented'})}>-</button></div>
              </td>
              <td className="table__products">
                <p>{lunch.name}</p>
                <p>{lunch.extra1}</p>
                <p>{lunch.extra2}</p>
              </td>
              <td className="table__price">
                <p>${lunch.price2}</p>
                <p>${lunch.price1}</p>
              </td>

              {/* <td className = "table__delete"><img className = "table__delete" src={delete} alt="delete" /></td> */}
            </tr>
          ))}
        </tbody>

        <tbody>
          {props.dataLunch.length > 0 && props.dataLunch.map((lunch) => (
            <tr key={lunch.id}>
              <td className="table__cantidad">
              <div> <button onClick = {() => dispatch({type: 'incremented'})}>+</button></div><div  >
                  {state.count} 
                 </div><div><button onClick = {() => dispatch({type: 'decremented'})}>-</button></div>
                  
                 
              </td>
              <td className="table__products">
                <p>{lunch.name}</p>
              </td>
              <td className="table__price">
                <p>${lunch.price}</p>
              </td>

              {/* <td className = "table__delete"><img className = "table__delete" src={delete} alt="delete" /></td> */}
            </tr>
          ))}
        </tbody>

        <div className="row max-4">
          <div className="col">
            <h3 className="item-card-total">Total: ${props.dataLunch.reduce((sum, lunch) => sum + Number(lunch.price) * Number(state.count),0)}</h3>
          
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
