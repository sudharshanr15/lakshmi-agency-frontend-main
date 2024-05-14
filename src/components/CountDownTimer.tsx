import { useCountDown } from "@/hooks/useCountDown";
import { useEffect, useState } from "react"

function CountDownTimer({targetDate}: {targetDate: number}){
    let [ days, hours, minutes, seconds] = useCountDown(targetDate)

    if(days + hours + minutes + seconds <= 0){
        return <span className="text-red-400">0:00</span>
    }

    return (
        <span>{minutes} : {seconds}</span>
    )
}

export default CountDownTimer;