
import { TableCalculator } from "./components/TableCalculator"
import { CalculatorProvider } from "./context/calculatorProvider"
import { MainContainer } from "./main.style"

function Main() {
  return (
    <MainContainer>
      <CalculatorProvider>
        <TableCalculator/>
        {/* Aqui ira la preview del contrato         */}
      </CalculatorProvider>
    </MainContainer>
  )
}

export default Main
