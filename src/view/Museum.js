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
    console.log(RandomIntArr(1,100))
    function getArt(){
        const result = []
        let artArr=[]
        for(let i=0; i<20;i++){
            artArr[i]= ("https://collectionapi.metmuseum.org/public/collection/v1/objects/"+RandomIntArr(1, 54))
           result.push(artArr[i])
        }
        return result
    }

    //   const result = await Promise.all(result.map(item =>  ))
    const getGistsDescriptions = async () => {
        const res =  await getArt()
        
        console.log(res,'resu')
        try {
            const promiseArray = res.map(url=> axios.get(url))
            console.log(promiseArray)
        
          const gistsDescriptions = (
            await Promise.all(promiseArray)
          ).map(res=>res.data)
          
          this.setState({ gistsDescriptions })
          
        } catch(error) {
          console.error(error)
        }
        
      
      }
      
    

    useEffect(()=> {
        
        getArt()
        getGistsDescriptions()
    },[])
    
    // console.log(result)

    return(
        <div>hello I'm Museum!</div>
        
    )
}
export default Museum