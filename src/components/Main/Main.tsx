import { ExtraData } from "./components/ExtraData"
import { TableCalculator } from "./components/TableCalculator"
import { CalculatorProvider } from "./context/calculatorProvider"
import { MainContainer } from "./main.style"

function Main() {
  return (
    <MainContainer>
      <CalculatorProvider>
        <TableCalculator/>
        <ExtraData/>
      </CalculatorProvider>
    </MainContainer>
  )
}

export default Main
