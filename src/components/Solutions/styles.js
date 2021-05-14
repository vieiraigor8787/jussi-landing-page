
import styled from 'styled-components';

export const Content = styled.section`
  padding: 50px;
  @media (max-width: 768px){
    padding: 20px ;
  }
`
export const Block = styled.div`
  max-width: 1440px;
  padding: 20px 60px;
  margin: 0 auto;
  @media (max-width: 768px){
    padding: 20px 10px;
  }
`
export const TitleBlock = styled.h2`
  font-weight: bold;
  font-size: 32px;
  line-height: 40px;
  margin: 0 70px 25px;
  span {
      color: var(--color-green-jussi)
  }
`
export const ContentBlock = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-around;
  padding: 0 3em;
  @media (max-width: 768px){
    width: 100%;
  }
`
export const CardsBlock = styled.div`
  width: 22%;
  height: 381px;
  border: 1px solid var(--color-grey-jussi);
  border-radius: 4px;
  padding: 10px;
  h3 {
    margin: 10px;
  }
  h4{
    margin: 20px 10px;
    color: var(--color-pink-jussi);
  }
  p{
    font-size: 12px;
    color: var(--color-pink-jussi);
  }
  ul{
    margin: 10px;
  }
  ul >li{
    font-size: 12px;
    color: var(--color-dark-grey-jussi);
    margin: 3px 2px;
  }
  a{
    text-decoration: none;
    display: block;
    width: 95%;
    height: 48px;
    text-align: center;
    text-decoration: none;
    color: var(--color-black);
    background-color: var(--color-green-jussi);
    border-radius: 6px;
    margin: 20px auto;
    padding: 13px 0;
  }
  button {
    border: none;
  }
  @media (max-width: 768px){
    width: 100%;
    margin-bottom: 10px;
  }
`
export const CardsImg = styled.div`
  background-color: var(--color-grey-jussi);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  font-size:32px;
  text-align: center;
  line-height: 3;
  margin: 10px 10px 50px 10px;
`