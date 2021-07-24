import styled from 'styled-components'


const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
`;

export default function Home() {
  return (
    <Container>
       <h1> Next js + Styled Components Starter</h1>
    </Container>
  )
}
