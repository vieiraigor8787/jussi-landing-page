import styled from "styled-components";

export const Content = styled.section`
  background-color: var(--color-black-jussi);
`;
export const Block = styled.div`
  max-width: 1440px;
  width: 100%;
  hight: 436px;
  margin: 0 auto;
  padding: 120px;
  color: var(--color-white-jussi);
  text-align: center;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;
export const Text = styled.div`
  padding: 0 25%;
  h2 {
    font-size: 32px;
    text-transform: uppercase;
    margin-bottom: 40px ;
    }
  h2 span {
      color: var(--color-green-jussi);    
    }
  form {
    position: relative;
    width: 502px;
    margin: 0 auto;
  }
  input {
      background: none;
      border: none;
      border-bottom: 1px solid var(--color-green-jussi);
    padding: 10px 0;
    width: 100%;
    color: var(--color-white-jussi);
    &::placeholder {
      color: var(--color-white);
    }
    &:focus {
        outline: none;
      }
  }
  button {
    background: none;
    border: none;
    position: absolute;
    right: 0;
    bottom: 10px;
    color: var(--color-green-jussi);
  }
  @media (max-width: 768px){
      form{
        width: 100%;
      }
    }
`;