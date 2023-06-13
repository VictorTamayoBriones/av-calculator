import { MainContainer } from "./main.style"
import { TableCalculator } from "./components/TableCalculator"
import { CalculatorProvider } from "./context"
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