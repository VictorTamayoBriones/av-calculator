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

  const { dataForm, handleDataForm, aproxValue, handleAproxValue } = useContext(CalculatorContext)

  return (
    <TableCalculatorContainer>
      <section className="aproxValue" >
        <FormControl id="aproxValue">
          <FormLabel>Valor aproximado de vivienda a adquirir</FormLabel>
          <Input type="number" placeholder="ej: 379,072.26" name="aproxValue" value={aproxValue} onChange={(e)=> handleAproxValue(e) } />
        </FormControl>
      </section>

      {
        Fields.map((field: IField)=>{
          const fieldIdAsKeyValue = field.id as keyof typeof dataForm
          
          return(
            <FormControl id={field.id} key={`${field.id}-${field.type}`} >
              <FormLabel>{field.label}</FormLabel>
              <Input type={field.type} placeholder={field.placeholder} name={field.id} value={dataForm[fieldIdAsKeyValue]} onChange={(e)=> handleDataForm(e) } />
            </FormControl>
          )
        })
      }

      <section className="firma" >
        <p>Firma del cliente</p>
      </section>

      <section className="message" >
        <p>Tiempo aproximado 6 a 8 meses</p>
      </section>
    </TableCalculatorContainer>
  )
}

export default TableCalculator