import styled from 'styled-components';

export const Content = styled.section`
`
export const Block = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`

export const Text = styled.div`
  width: 45%;
  padding: 50px 200px;
  h2{
      font-weight: bold;
      font-size: 32px;
      text-transform: uppercase;
      width: 80%;
      margin: 0 0 20px;
    }
    p{
        line-height: 25px;
    }
    a{
    color: var(--color-black-jussi);
    text-decoration: none;
    display: block;
    border: 1px solid;
    border-radius: 6px;
    text-align: center;
    padding: 12px;
    width: 150px;
    margin:30px 0;
  }
  @media (max-width: 768px){
    width: 100%; 
    padding: 0 20px;
    a{
        width: 100%
    }
  }
`
export const ContentImage = styled.div`
  width: 55%;
  background-color: var(--color-grey-jussi);
  @media (max-width: 768px){
    width: 100%;
    background: none;
    img{ 
        margin: 0;
    }
  }
 
`

export const Image = styled.div`
  max-width: 676px;
  width: 80%;
  height: auto;
  margin: 40px;
  margin-left: -70px;
  img{
    width: 100%;
  }
  @media (max-width: 768px){
    margin: 0 0 10px;
  }
`