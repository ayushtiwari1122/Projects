import React,{useEffect,useState} from 'react'
import Count from './Count';

export default function Time() {
    const [hour, setHour]=useState(0);
    const [minutes, setMinutes]=useState(10);
    const [sec, setSec]=useState(59);
    useEffect(
        ()=>{
          
            
              let  interval=setInterval(
                    ()=>{
                        if (sec>0) {
                            setSec((sec)=>sec-1,)
                       
                        }
                        else if(minutes>0){
                            setMinutes((minutes)=>minutes-1,)
                            setSec(59)


                        }
                        else if(hour>0){
                            setHour((hour)=>hour-1)
                            setMinutes(59)
                            setSec(59)
                        }


                       
                      
                    }
                ,1000)
            
            return ()=> clearInterval(interval)
        },[sec,minutes,hour,]
    )


  return (
    <>
    <Count sec={sec}
     minutes={minutes}
      hour={hour}
      />
    </>
  )
}
