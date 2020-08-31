import React,{useState, useEffect} from "react"
import Axios from "axios"
import "./app.css"


function App (){
    const [advice, setAdvice]=useState("")

    useEffect(()=>{
        console.log("it monuted")
        fetchAdvice()
    },[])


    const fetchAdvice =()=>{
        Axios.get('https://api.adviceslip.com/advice')
            .then((response)=>{
                const {advice}=response.data.slip
                setAdvice(advice)
                console.log(advice)

            })
            .catch((error)=>{
                console.log(error)
            })
    }
    return(
        <div className="app">
            <div className="card">
                <h1 className="heading">{advice}</h1>
                <button className="button" onClick={()=>{fetchAdvice()} }> GIVE ME ADVICE !!! </button>
            </div>
        </div>
    )
}
export default App