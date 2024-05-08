import styled from 'styled-components';

export const Form = styled.form`
  width: 320px;
  margin-top: 16px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 600;
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
    border-color: #00ff00;
  }
`;

export const BTN = styled.button`
  margin-top: 14px;
  font-size: 16px;
  font-weight: 600;
  padding: 6px;
  width: 250px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 33.5px;
  background: #b11228;
  color: #fff;
  border: none;
  &:hover {
    color: #fff;
    background-color: #a01313;
    box-shadow: 1px 2px 6px 0px rgba(33, 83, 60, 0.7);
  }
  box-shadow: 0 2px 4px rgba(33, 83, 60, 0.5);

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
