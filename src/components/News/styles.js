import styled from 'styled-components';

export const Content = styled.section`
  background: var(--color-pink-jussi);
`
export const Block = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 5%;
  text-align: center;
  color: var(--color-white-jussi);
  
  @media (max-width: 768px){
    padding: 20px;
  }
`
export const Text = styled.div`
  width: 55%;
  margin: 0 auto;
h2{
    font-size: 32px;
    text-transform: uppercase;
    margin: 20px 0 40px;
  }
  p{
      
  }
h3{
  font-size: 32px;
  font-weight: normal;
}
@media (max-width: 768px){
  width: 100%;
  h2, h3{
      font-size: 22px;
  }
}
`