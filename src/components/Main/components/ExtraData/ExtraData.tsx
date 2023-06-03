import { FormControl, FormLabel, Input } from "@chakra-ui/react"
import { ExtraDataContainer } from "./extraData.style"
import { useContext } from "react"
import { CalculatorContext } from "../../context/calculatorContext"

function ExtraData() {

  const { aproxValue, handleAproxValue } = useContext(CalculatorContext)

  return (
    <ExtraDataContainer>
      <section className="aproxValue" >
        <FormControl id="aproxValue">
          <FormLabel>Valor aproximado de vivienda a adquirir</FormLabel>
          <Input type="number" placeholder="ej: 379,072.26" name="aproxValue" value={aproxValue} onChange={(e)=> handleAproxValue(e) } />
        </FormControl>
      </section>

      <section className="firma" >
        <p>Firma del cliente</p>
      </section>

      <section className="message" >
        <p>Tiempo aproximado 6 a 8 meses</p>
      </section>
    </ExtraDataContainer>
  )
}

export default ExtraData