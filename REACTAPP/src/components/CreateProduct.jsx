import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const endPoint = "http://127.0.0.1:8000/api/product";
export const CreateProduct = () => {

    const [descripcion, setDescripcion] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);

    const navigate = useNavigate();
    const store = async(e) =>{
      e.preventDefault();
       await axios.post(endPoint , {descripcion,price,stock});
       navigate('/')
    }
  return (
    <div>
          <h3>CREATE PRODCUT</h3>
        <form onSubmit={ store }> 
           <div className='mb-3'>
             <label className='form-control'>Descripcion</label>
             <input 
             type='text'
              value={descripcion} 
              onChange={ (e)=>setDescripcion(e.target.value) }
              className='form-control'
              />
           </div>
           <div className='mb-3'>
             <label className='form-control'>Price</label>
             <input 
             type='text'
              value={price} 
              onChange={ (e)=>setPrice(e.target.value) }
              className='form-control'
              />
           </div> <div className='mb-3'>
             <label className='form-control'>Stock</label>
             <input 
             type='text'
              value={stock} 
              onChange={ (e)=>setStock(e.target.value) }
              className='form-control'
              />
           </div>
          <button type='submit' className='btn btn-primary'>Store</button>
        </form>
    </div>
  )

  
}

