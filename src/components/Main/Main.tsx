import Preview from "./components/Preview/Preview"
import { TableCalculator } from "./components/TableCalculator"
import { CalculatorProvider } from "./context/calculatorProvider"
import { MainContainer } from "./main.style"

function Main() {
  return (
    <MainContainer>
      <CalculatorProvider>
        <TableCalculator/>
        <Preview/>
      </CalculatorProvider>
    </MainContainer>
  )
}

export default Main
