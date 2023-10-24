import { useEffect, useState } from "react";

export const Timer = memo(() => {
    const minutes_in_ms = 3 * 60 * 1000;
    const interval = 1000;
    const [timeLeft, setTimeLeft] = useState<number>(minutes_in_ms);

    const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2, '0');
    const second = String(Math.floor((timeLeft / 1000) % 60)).padStart(2,'0');


    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - interval);
        },interval);
    
            if (timeLeft <= 0){
                clearInterval(timer);
                console.log("타이머 종료");
            }
            
            return () => {
                clearInterval(timer);
            };
        }, [timeLeft]);


        return (
            <div>
                {minutes} : {second}
            </div>
        )
    

});