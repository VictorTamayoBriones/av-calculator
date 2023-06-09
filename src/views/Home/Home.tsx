import { MainContainer } from "./main.style"
import { CalculatorProvider } from "./context"
import { TableCalculator } from "./components/TableCalculator"
import Preview from "./components/Preview/Preview"

function Home() {
  return (
    <MainContainer>
      <CalculatorProvider>
        <TableCalculator/>
        <Preview/>
      </CalculatorProvider>
    </MainContainer>
  )
}

export default Home