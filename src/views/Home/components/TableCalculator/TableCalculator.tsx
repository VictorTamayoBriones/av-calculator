import { useContext } from "react"
import { TableCalculatorContainer } from "./tableCalculator.style"

import { CalculatorContext } from "../../context/calculatorContext"
import { Fields } from "./fields"
import { IField } from "../../models"
import { Input } from "@/components/Input"
import BtnGetPdf from "../BtnGetPdf/BtnGetPdf"
import AVLOGO from '@/assets/images/av-logo.png';
import CARVI from '@/assets/images/carvi-logo.png';
//import AproxValueInput from "../AproxValueInput/AproxValueInput"



function TableCalculator() {

  const { dataForm, handleDataForm} = useContext(CalculatorContext)

  return (
    <TableCalculatorContainer>
      <header>
        <img src={AVLOGO} />
        <img src={CARVI} />
      </header>
      {/* <AproxValueInput/> */}
      {
        Fields.map((field: IField)=>{
          const fieldIdAsKeyValue = field.id as keyof typeof dataForm
          
          return(   
            <Input key={field.id} name={field.id} value={dataForm[fieldIdAsKeyValue]} id={field.id} label={field.label} type={field.type} placeholder={field.placeholder} onChange={(e)=>handleDataForm(e)} disable={field.disable} />
          )
        })
      }
      <BtnGetPdf/>
    </TableCalculatorContainer>
  )
}

export default TableCalculator