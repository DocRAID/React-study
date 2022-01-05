import {useParams} from "react-router-dom"
import { useEffect, useState } from "react";
import {Link} from "react-router-dom"
function Product(){
   const {productId}= useParams()
   const[loading,setLoading] = useState(true)
    const [product,setProduct] = useState([])
   const getProduct = async() => {
       const res = await fetch(`https://fakestoreapi.com/products/${productId}`)
       
       const resJson = await res.json()
       setProduct(resJson)
       setLoading(false)
    }
    console.log(product)
    useEffect(()=>{
        getProduct()
   },[])
    return(
        <div>
            {loading? (
                <h1>loading</h1>
            ):(
                <div>
                    <Link to="../">돌아가기</Link>
                    <h1>상품넘버 : {product.id}</h1>
                    <p>카테고리 : {product.category}</p>
                    <p>상품이름 : {product.title}</p>
                    <p>상품가격(달러) : {product.price}</p>
                    <img src={product.image}></img>
                </div>
            )}
        </div>
        
    )
}
export default Product