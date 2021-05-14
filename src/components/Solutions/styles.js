
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
  margin-bottom: 25px;
  &::before{
    content: '//';
    display: inline-block;
    color: var(--color-green);
    margin-right: 10px;
  }
`
export const ContentBlock = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-between;
  @media (max-width: 768px){
    width: 100%;
  }
`
export const CardsBlock = styled.div`
  width: 23%;
  border: 1px solid var(--color-grey);
  border-radius: 4px;
  padding: 20px;
  h4{
    font-size: 16px;
    margin: 10px 16px;
  }
  p{
    font-size: 12px;
    margin: 10px 16px;
    color: var(--color-pink);
  }
  ul{
    margin-left: 28px;
    list-style: disc;
  }
  ul >li{
    font-size: 12px;
    color: var(--color-dark-grey);
    margin: 3px 2px;
  }
  a{
    display: block;
    width: 95%;
    height: 48px;
    text-align: center;
    text-decoration: none;
    color: var(--color-black);
    background-color: var(--color-green);
    border-radius: 6px;
    margin: 20px auto;
    padding: 13px 0;
  }
  @media (max-width: 768px){
    width: 100%;
    margin-bottom: 10px;
  }
`
export const ID = styled.div`
  background-color: var(--color-grey);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  font-size:32px;
  text-align: center;
  line-height: 3;
  margin: 10px 10px 50px 10px;
`