import { HeaderContainer } from "./header.style"
import CARVI from '@/assets/images/carvi-logo.png'
import AV from '@/assets/images/av-logo.png'

function Header() {
  return (
    <HeaderContainer>
      <img src={AV} alt="" />
      <img src={CARVI} alt="carvi logo" />
    </HeaderContainer>
  )
}

export default Header