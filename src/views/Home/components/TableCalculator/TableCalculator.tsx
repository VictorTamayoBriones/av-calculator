import { useContext } from "react"
import { TableCalculatorContainer } from "./tableCalculator.style"

import { CalculatorContext } from "../../context/calculatorContext"
import { Fields } from "./fields"
import { IField } from "../../models"
import { Input } from "@/components/Input"
//import AproxValueInput from "../AproxValueInput/AproxValueInput"



function TableCalculator() {

  const { dataForm, handleDataForm} = useContext(CalculatorContext)

  return (
    <TableCalculatorContainer>
      {/* <AproxValueInput/> */}
      {
        Fields.map((field: IField)=>{
          const fieldIdAsKeyValue = field.id as keyof typeof dataForm
          
          return(   
            <Input key={field.id} name={field.id} value={dataForm[fieldIdAsKeyValue]} id={field.id} label={field.label} type={field.type} placeholder={field.placeholder} onChange={(e)=>handleDataForm(e)} disable={field.disable} />
          )
        })
      }
    </TableCalculatorContainer>
  )
}

export default TableCalculator