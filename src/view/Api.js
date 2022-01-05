import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"
import "../style/Api.css"
const Ul = styled.ul`
   
    font-size: 30px;
`
function Api() {
    const[product,setProduct] = useState([])
    const[loading,setLoading] = useState(true)

    const getProduct = async () => {
        const res = await fetch("https://fakestoreapi.com/products")
        console.log(res,)
        const resJson = await res.json()
        setProduct(resJson)
        console.log(resJson)
        setLoading(false)
    }
    useEffect(()=> {
        getProduct()
        console.log(product)
    },[])
  return(
    <div>
        {loading ? (
            <p>loading...</p>
        ): (
            product.map((item)=>(
                <Ul key={item.id}>
                <li key={item.id}>
                    <Link to={`${item.id}`}>
                        <img src={item.image} width={50} height={50} />
                    </Link>
                    <h4 className="test">{item.title} {item.price}$</h4>
                    
                </li>
            </Ul>
            ))
        )}
    </div>
  )
}

export default Api;
