import React , {useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const endPoint = "http://127.0.0.1:8000/api";


export const ShowProducts = () => {

    const [Products, setProducts] = useState([])
    useEffect(() => {
        getAllProducts();
    }, [])
    
    
    const getAllProducts = async()=>{
      const response = await axios.get(`${endPoint}/products`);
      setProducts(response.data)
    }

    const deleteProdcuts = async (id)=>{
       axios.delete(`${endPoint}/products/${id}`).then(() => {
        getAllProducts();
      });
      
    
    }

  return (
    <div>
        <div className='d-grid gap-2'>
            <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
        </div>
        <table className='table table-striped table-lg'>
           <thead className='bg-primary text-white'>
               <tr>
                   <th>Descripcion</th>
                   <th>Price</th>
                   <th>Stock</th>
                   <th>Actions</th>

               </tr>
           </thead>
           <tbody>
               {
                 Products.map( (product)=>(
                    <tr key={product.id}>
                           <td>{product.descripcion}</td>
                           <td>{product.price}</td>
                           <td>{product.stock}</td>
                           <td>
                               <Link  to={`/edit/${product.id}`} className='btn btn-warning'>Edit</Link>
                               <button onClick={ ()=>deleteProdcuts(product.id)} className='btn btn-danger'>Delete</button>
                           </td>
                    </tr>
                  ) )
               }
           </tbody>
        </table>
    </div>
  )
}
