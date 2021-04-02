import * as S from './styles'
import { FiSend } from 'react-icons/fi'

const WhatsapButton = () => (
  <S.Wrapper href="https://api.whatsapp.com/send?text=https://jworg.zoom.us/j/82927076734?pwd=bFQ3M0tuaFVHMzZUUmVGV1VnSFpHQT09">
    <FiSend />
  </S.Wrapper>
)

export default WhatsapButton
