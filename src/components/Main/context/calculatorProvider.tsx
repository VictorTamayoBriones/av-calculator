import { useState } from "react"
import { CalculatorContext } from "./calculatorContext"
import { IFormData } from "../models"
import { formatStringToNumber } from "@/utils/formatStringToNumber"
import { formatNumber } from "@/utils/formatNumber"

interface Props{
    children: JSX.Element | JSX.Element[]
}

// función para redondear a dos decimales

export const CalculatorProvider = ({ children }:Props) => {
    
    const [aproxValue, setAproxValue] = useState<number>(120000)

    const handleAproxValue = (e:React.ChangeEvent<HTMLInputElement>) => setAproxValue(Number(e.target.value))

    const [dataForm, setDataForm] = useState<IFormData>({
        name: '',
        nss: '',
        ssv: '0',
        gasTitulation: '0',
        disInfonavit: '0',
        gestoria: '0',
        honorarios: '0',
        poderNotarial: '3,600',
        total: '0',
    })

    const handleDataForm = (e:React.ChangeEvent<HTMLInputElement>) => {
        
        
        if(e.target.name === 'name' || e.target.name === 'nss'){
            setDataForm({...dataForm, [e.target.name]: e.target.value})
        }else{
            const regex = new RegExp('[a-zA-Z ]');
            if(regex.test(e.target.value)){
                return
            }else{
                if(e.target.name === 'ssv'){
                    if(e.target.value === '0' || e.target.value === ''){
                        setDataForm({...dataForm, ssv: '0', gasTitulation: '0', disInfonavit: '0', gestoria: '0', honorarios: '0', poderNotarial: '3,600', total: '0',})
                        return;
                    }else{
                        if(e.target.value.at(-1) === '.'){
                            setDataForm({...dataForm, [e.target.name]: e.target.value})
                            return;
                        }else if (e.target.value === ''){
                            console.log('first')
                            setDataForm({...dataForm, [e.target.name]: e.target.value})
                            return;
                        }else{
                            let tempDataForm: IFormData = {...dataForm, [e.target.name]: e.target.value};
                        
                            const currentSSV = formatStringToNumber(e.target.value);
                            
                            const GasTitulation = (currentSSV * 0.03);
                            const DisInfonavit = currentSSV - GasTitulation;
                            const AproxValueTemmp = DisInfonavit + 120000;
                            const Gestoria = AproxValueTemmp * 0.1;
                            const Honorarios = (DisInfonavit * 0.3) - Gestoria;
                            const Total = (DisInfonavit - (Gestoria + Honorarios) - formatStringToNumber(dataForm.poderNotarial));
                            
                            
                            tempDataForm = {...tempDataForm, ssv: formatNumber(currentSSV), gasTitulation: formatNumber(GasTitulation), disInfonavit: formatNumber(DisInfonavit), gestoria: formatNumber(Gestoria), honorarios: formatNumber(Honorarios), total: formatNumber(Total)}
                            setAproxValue(AproxValueTemmp)
                            setDataForm(tempDataForm)
                        }
                    }
                }
            }
        }
        
    }

    return(
        <CalculatorContext.Provider value={{ aproxValue, handleAproxValue, dataForm, handleDataForm }}>
            { children }
        </CalculatorContext.Provider>
    )
}