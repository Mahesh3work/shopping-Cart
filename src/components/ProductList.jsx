
import { useEffect } from 'react';
import Navbar from './Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../ShopCart/productSlice';
import { addToCart } from '../ShopCart/cartSlice';
// import cartSlice from './../ShopCart/cartSlice';

function ProductList() {

  // const [products,setProducts] = useState([]);

 const {items:products,status} =  useSelector(state=> state.products);
    useSelector(state=>console.log(state));
 const dispatch = useDispatch();
 

  useEffect( () => {
          // const fetchProducts = async()=>{
          //   const response = await fetch("https://fakestoreapi.com/products");
          //   const data = await response.json()
          //   // console.log(data);
          //   setProducts(data)
          // }
          // fetchProducts();

          if(status === 'idle'){
            dispatch(fetchProducts());
          }
  },[status])
  if(status === 'loading') return <p>Loading Products...</p>
  if(status === 'failed') return <p>failed to load  Products pls try again...</p>
 



  return (
    <>
     <Navbar/>
    <div className="product-list">
      {products.map( (product) => (
         <div className="product-card" key={product.id}>
         <img src={product.image} alt="image title" />
         <h2>{product.title.length>20 ? `${product.title.slice(0,20)}...`:product.title}</h2>
         <p>Price : ${product.price}</p>
         <button  onClick={() => dispatch(addToCart(product))}>Add to Card</button>
       </div>
      )
       
       
    )}
    </div>
    </>
  )
}

export default ProductList