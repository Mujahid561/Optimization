import React,{useEffect,useCallback} from 'react'

function Throttle() {


const ThrottleFn=(fnc,delay)=>{
    let lastrun
    let timer
    return (...args)=>{
        let time=new Date()
        if(!lastrun){
            fnc(...args)
            lastrun=time
        }
        else{
            if(timer){
                clearTimeout(timer)
            }
            timer=setTimeout(()=>{
                if(time-lastrun>=delay){
                    fnc(...args)
                    lastrun=time
                }
            },[delay-(time-lastrun)])
        }
    }
}
const mainfn=()=>{
    console.log("throlled")
}

const handleresize=ThrottleFn(mainfn,1000)

window.addEventListener("resize",handleresize)

 
  
  return (
    <div>
      
    </div>
  )
}

export default Throttle
