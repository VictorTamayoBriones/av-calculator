import { useState } from "react"
import { CalculatorContext } from "./calculatorContext"
import { IFormData } from "../models"

interface Props{
    children: JSX.Element | JSX.Element[]
}

export const CalculatorProvider = ({ children }:Props) => {
    const [aproxValue, setAproxValue] = useState<number>(0)

    const handleAproxValue = (value:number) => setAproxValue(value)

    const [dataForm, setDataForm] = useState<IFormData>({
        name: '',
        nss: '',
        ssv: 0,
        gasTitulation: 0,
        disInfonavit: 0,
        gestoria: 0,
        honorarios: 0,
        poderNotarial: 0,
        total: 0,
    })

    const handleDataForm = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.name)
        const tempDataForm = {...dataForm, [e.target.name]: e.target.value};
        setDataForm(tempDataForm)
    }

    return(
        <CalculatorContext.Provider value={{ aproxValue, handleAproxValue, dataForm, handleDataForm }}>
            { children }
        </CalculatorContext.Provider>
    )
}