import { useContext } from "react"
import { TableCalculatorContainer } from "./tableCalculator.style"
import {
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react'
import { CalculatorContext } from "../../context/calculatorContext"
import { Fields } from "./fields"
import { IField } from "../../models"


function TableCalculator() {

  const { dataForm, handleDataForm } = useContext(CalculatorContext)

  return (
    <TableCalculatorContainer>
      {
        Fields.map((field: IField)=>{
          const fieldIdAsKeyValue = field.id as keyof typeof dataForm
          
          return(
            <FormControl id={field.id}>
              <FormLabel>{field.label}</FormLabel>
              <Input type="text" placeholder={field.placeholder} name={field.id} value={dataForm[fieldIdAsKeyValue]} onChange={(e)=> handleDataForm(e) } />
            </FormControl>
          )
        })
      }
    </TableCalculatorContainer>
  )
}

export default TableCalculator