import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Button href="https://jworg.zoom.us/j/82927076734?pwd=bFQ3M0tuaFVHMzZUUmVGV1VnSFpHQT09">
      Reunião Congregacional
    </S.Button>
    <br />
    <br />
    <br />
    <br />
    <br />
    <S.Button href="https://jworg.zoom.us/j/88691832848?pwd=MTRncUN3WWs5Vm93bTREeHBvSG55UT09">
      Saída de Campo
    </S.Button>
  </S.Wrapper>
)

export default Main
