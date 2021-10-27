import React from 'react';

 export function PurchaseOrder (props) {
  
    return (
      <>
      <table className="table table-borderless">
        <thead>
         <tr>
            <th scope="col">DETALLE DE LA ORDEN</th>
          </tr>
         <tr>
            <th scope="col">MESA</th>
            
            <th scope="col">CLIENTE<input type="text"></input></th>
              
          </tr>
          <tr>
            <th scope="col">CANTIDAD</th>
            <th scope="col">PRODUCTO</th>
            <th scope="col">PRECIO</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className = "table__cantidad">
                 <input type="number" min="0"></input>
            </td>
            <td className = "table__products">
              <p></p>
              </td>
            <td className = "table__price">
              <p>$</p>

            </td>
            
            {/* <td className = "table__delete"><img className = "table__delete" src={delete} alt="delete" /></td> */}
          </tr>
        </tbody>
        <>
        {props.dataBreakfast.length > 0 ? 
          <div>
            <p>{props.dataBreakfast[0].name}</p>
            <p>{props.dataBreakfast[0].price}</p>
          </div> 
          : 
          <div>
            No se agregaron productos
          </div>}
          </>
        <div className = "row max-4">
          <div className = "col">
            <h3 className = "item-card-total">Total $0</h3>
          </div>
          <div className = "row max-4">
          <div className = "col d-flex justify content-end" >
            <button type= "button" className = "confirmer-order">confirmar</button>
            <button type= "button" className = "reject-order">anular</button>
          </div>
          </div>

        
        </div>
      </table>
      </>
    )
}
