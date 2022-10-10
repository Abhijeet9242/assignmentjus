import React from "react"
import {createContext, useState} from "react"

export const RotationContext = createContext()

export const RotationContextProvider = ({children}) => {

   
    // const [votes, setVotes] = React.useState(0);
    // const[status,setStatus] = useState(false)
    // const handleVote = () => {
    //     setVotes(votes+15);
    //     setStatus(true)
    // }

    const [deg, setDeg] = React.useState(0);

    const[leftstatus,setLeftStatus] = useState(false)
    const handleLeftRotation = () => {
        setDeg(deg-15)
        setLeftStatus(true)
    }
   

    const[rightstatus,setRightStatus] = useState(false)
    const handleRightRotation = () => {
        setDeg(deg+15)
          setRightStatus(true)
        
    }

    const[dis,setDis] = useState(0)
    const[disstatus,setDisStatus] = useState(false)
    const handleDistance= () => {
    
        setDis(dis+15)
        setDisStatus(true)
         
        
    }

  
  
  


    return <RotationContext.Provider value={{deg,handleLeftRotation,leftstatus,handleRightRotation,rightstatus,handleDistance,disstatus,dis}}>
        {children}
    </RotationContext.Provider>
}