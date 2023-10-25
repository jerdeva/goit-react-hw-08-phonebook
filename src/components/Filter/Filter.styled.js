import styled from 'styled-components';

export const WrapperForInput = styled.div`
margin: 12px;
`

export const WrapperForSearch = styled.div`
display:flex;
flex-direction: column;
align-items: center;
font-weight: 500;
`;


export const Input = styled.input`
  width: 250px;
  height: 25px;
  border-radius: 6px;
  outline: none;
  border: 1px solid;
  padding: 5px;
  background-color: #ffffff;
  box-shadow: 1px 2px 6px 0px rgba(33, 83, 60, 0.5);
  margin-bottom: 16px;

  @media screen and (max-width: 768px) {
    width: 250px;
  }

  &:focus {
    border-color: lightgray;
  }
`;