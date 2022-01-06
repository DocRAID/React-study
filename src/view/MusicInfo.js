import { useEffect, useState } from "react";
import "../style/MusicInfo.css"
import styled from "styled-components";

// const CLIENT_ID = 'rV0kAXJbxIIO7Arj9I6i';
// const CLIENT_SECRET = 'wLo2NX9IMe';

const Button = styled.button`
font-size:16px
`

const Detail = () => {
    //https://api.lyrics.ovh/v1/halfalive/trust
    // 작곡가와 제목을 입력, 위 자막 api 에서 가져와서 네이버 api로 번역, 그리고 음악 제공하는 페이지
    const[loading,setLoading]= useState(true)
    const[engToKor,setEngToKor]= useState(false)
    const[lyrics,setLyrics]= useState("")
    const[krLyrics,setKrLyrics]= useState("Loading...")
    const [searchInput, setSearchInput] =  useState({title:'trust', maker:'halfalive'})

    const onChangeTitle = (e) => setSearchInput(prev => ({...prev,title:e.target.value}))
    const onChangeMaker = (e) => setSearchInput(prev => ({...prev,maker:e.target.value}))

    const onSubmit = (e) => {
        e.preventDefault()     //값을 받고 곡을 가져옴.
        if(searchInput.title === "" || searchInput.maker === "" ){
            alert("입력을 하셈")
            return
        }

        const l = getLyrics()
        getKorean(l)

        
        console.log('저작자 :',searchInput.maker)
        console.log('제목 :',searchInput.title)
        
    }

    const getLyrics = async() => {
        
            const res = await fetch(`https://api.lyrics.ovh/v1/${searchInput.maker}/${searchInput.title}`)
            const resJson = await res.json()
            setLyrics(resJson.lyrics)
            setLoading(false)
        
            return resJson.lyrics
            
    }
    useEffect(()=> {
        
    })
    const getKorean =async(l)=>{
        const query = l
        const kor = await fetch(`http://trans-api-for-ldj.kro.kr/naver/papago?aa=${query}`,{
            method: "GET",
            //   body:JSON.stringify({ query:'hi im good'})
        })
        const resJson = await kor.json()
        setKrLyrics(resJson.translated_text)
        console.log(resJson.translated_text)
        
    }
    function BtnTxtSwitch(){
        if(!engToKor){  return "한국어로 번역하기"}
        else{ return "영어로 돌아가기"}
    }
    function ContentSwitch(){
        if(!engToKor){return lyrics}
        else{
            return krLyrics
        }
    }
    return(
        <div>
            {!loading ?(
                // 영어인상태
                <div>
                    <h2>result!</h2>
                    <Button onClick={() => setEngToKor(!engToKor)}><BtnTxtSwitch/></Button>
                    <p className="lyrics"><ContentSwitch/></p>
                </div>
                
            ):(
                // 초기상태
                <div>
                    <h1>무슨 작곡가의 무슨 곡을 가져올까요?</h1>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder="작곡가명 (ex:halfalive)" onChange={onChangeMaker} value={searchInput.maker} ></input>
                    <input type="text" placeholder="음악명 (ex:trust)" onChange={onChangeTitle} value={searchInput.title} ></input>
                    <button>submit</button>
                </form>

                </div>
            )}
        </div>
    )
}
export default Detail
