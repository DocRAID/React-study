import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    },[])
  return(
    <div>
        {loading ? (
            <p>loading...</p>
        ): (
            product.map((item)=>(
                <ul key={item.id}>
                <li key={item.id}>
                    <Link to={`${item.id}`}>
                        <img src={item.image} width={50} height={50} />
                    </Link>
                    {item.title} {item.price}$
                    
                </li>
            </ul>
            ))
        )}
    </div>
  )
}

export default Api;
