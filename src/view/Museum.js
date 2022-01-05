import axios from 'axios'
import { useEffect, useState } from "react"
function Museum(){
    const[art,setArt] = useState([])
    const[loading,setLoading] = useState(true)
    //난수 생성 
    function RandomIntArr(min, max) {
        
        min = Math.ceil(min);
        max = Math.floor(max);
        let random = Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
        
        return random
    }
    
    function getArt(){
        const result = []
        let artArr=[]
        for(let i=0; i<10;i++){
            artArr[i]= ("https://collectionapi.metmuseum.org/public/collection/v1/objects/"+RandomIntArr(1, 54))
           result.push(artArr[i])
        }
        return result
    }
    //   const result = await Promise.all(result.map(item =>  ))
    const getImg = async () => {
        const res =  await getArt()
        
        console.log(res,'resu')
        try {
            // const promiseArray = res.map(url=> axios.get(url))
            
        
        const getImgInfo = (
        await Promise.all(res.map(url =>axios.get(url) ))
        ).map(res=>res.data)
        setArt(getImgInfo)
        setLoading(false)
        // console.log(getImgInfo)  
        } catch(error) {
          console.error(error)
        }
      }
    useEffect(()=> {
        getArt()
        getImg()
        console.log(art,"adf") 
    },[])
    
    // console.log(result)

    return(
        <div>
            
            <div>hello I'm Museum!{console.log(art[3],'art')}</div>
            {loading ? (
            <p>loading...</p>
            ): (
                art.map((item)=>(
                    <img src={item.primaryImage} width={400} ></img>
                ))
            )}
            
        
        </div>
        
    )
}
export default Museum