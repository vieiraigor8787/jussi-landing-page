import styled from 'styled-components'

export const ContentBanner = styled.div`
  background-color: var(--color-green-jussi);
`
export const BannerBlock = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  max-height: 560px;
  padding: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const TextBanner = styled.div`
  width: 40%;
  padding: 20px;
  h1{
    font-size: 64px;
    line-height: 77px;
    font-weight: 500;
    text-transform: uppercase;
    position: relative;
  }
  p{
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    padding-right: 35%;
    margin-left: 10px;
  }
  a{
    text-decoration: none;
    color: var(--color-black-jussi);
    border: 1px solid;
    border-radius: 6px;
    height: 48px; 
    width: 200px;
    margin:30px 10px;
    padding: 10px 25px;
    display: block;
  }
  @media (max-width: 768px){
    width: 100%;
    padding: 0;
    h1{
      font-size: 45px;
      line-height: 50px;
    }
  }
`
export const Images = styled.div`
  width: 35%;
  @media (max-width: 768px){
    display: none;
  }
  img{
    width: 100%;
  }
`