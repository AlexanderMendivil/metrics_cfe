import { useState } from "react";
import { AppContext } from "./AppContext";
import { RHX, RHX_Y, RY, context } from "../interfaces/interfaces";

export const AppProvider = ({ children }: any) => {

    const [first, setFirst] = useState<RHX>({
        half: 0,
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 0,
        seven: 0,
        eight: 0,
        nine: 0,
        ten: 0,
    });
    const [second, setSecond] = useState<RY>({
        half: 0,
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 0,
        seven: 0,
        eight: 0,
        nine: 0,
        ten: 0,
    });
    const [third, setThird] = useState<RHX_Y>({
        half: 0,
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 0,
        seven: 0,
        eight: 0,
        nine: 0,
        ten: 0,
    });

    const stepContext = (context: context) =>{
        if(context.first.half != 0){
            setFirst(context.first)
        }
        
        if(context.second.half != 0){
            setSecond(context.second)
        }
        
        if(context.third.half != 0){
            setThird(context.third)

        }
    }

    return (
     <AppContext.Provider value={{context:{first, second, third,}, stepContext}}>
        { children }
     </AppContext.Provider>
    )
}