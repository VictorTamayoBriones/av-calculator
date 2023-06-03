import { ExtraData } from "./components/ExtraData"
import { TableCalculator } from "./components/TableCalculator"
import { MainContainer } from "./main.style"

function Main() {
  return (
    <MainContainer>
      <TableCalculator/>
      <ExtraData/>
    </MainContainer>
  )
}

export default Main
