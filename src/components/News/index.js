import styled from 'styled-components';

export const Content = styled.section`
  background-color: var(--color-pink-jussi);
`
export const Block = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 120px;
  text-align: center;
  color: var(--color-white-jussi);
  
  @media (max-width: 768px){
    padding: 30px 20px;
  }
`
export const Text = styled.div`
  width: 65%;
  margin: 0 auto;
h2{
    text-transform: uppercase;
    margin: 20px 0 40px;
    font-size: 32px;
  }
h3{
  font-size: 32px;
  font-weight: normal;
}
@media (max-width: 768px){
  width: 100%;
  h2{
    font-size: 25px;
  }
}
`