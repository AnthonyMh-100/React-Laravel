import React from 'react'
import axios from 'axios'
import { useState , useEffect} from 'react'
import { useNavigate , useParams} from 'react-router-dom'

const endPoint = "http://127.0.0.1:8000/api/products";

export const EditProduct = () => {
       
    const [descripcion, setDescripcion] = useState('');
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const navigate = useNavigate(); 
    const { id } = useParams();

    const update = async (e) =>{
       e.preventDefault();
     await axios.put(`${endPoint}/${id}`,{
         descripcion,
         price,
         stock
     })
     navigate('/')

    }
    useEffect( ()=> {
        const getProductById = async ()=>{
           const response  = await axios.get(`${endPoint}/${id}`)
           setDescripcion(response.data.descripcion);
           setPrice(response.data.price);
           setStock(response.data.stock);
 
        }
        getProductById()
     },[])


    return (
    <div>
    <h3>EDIT PRODCUT</h3>
  <form onSubmit={ update }> 
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
    <button type='submit' className='btn btn-primary'>update</button>
  </form>
</div>
  )
}
