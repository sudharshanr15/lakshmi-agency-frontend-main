import { useEffect, useState } from "react"

function useCountDown(target: number){
    const currentDate = new Date(target).getTime()

    const [countDown, setCountDown] = useState(
        currentDate - new Date().getTime()
    )

    useEffect(() => {
        const interval = setInterval(() => {
        setCountDown(currentDate - new Date().getTime())
        }, 1000)

        return () => clearInterval(interval)
    }, [currentDate])

    return formatDate(countDown)
}

function formatDate(countDown: number){
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
}

export { useCountDown };