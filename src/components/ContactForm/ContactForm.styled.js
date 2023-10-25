import styled from 'styled-components';
// import { Formik, Form } from 'formik';
import { ErrorMessage, Field } from 'formik';




export const FormikSt = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 8px;
`

export const ErrorM = styled(ErrorMessage)`
color: red;
`

export const FieldSt = styled(Field)`
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

export const BTN = styled.button`
  margin-top: 14px;
  padding: 6px;
  width: 250px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 33.5px;
  background: lightgray;
  border: none;
  font-weight: 600;
  &:hover {
    color: #fff;
    background-color: gray;
    box-shadow: 1px 2px 6px 0px rgba(33, 83, 60, 0.7);
  }
  box-shadow: 0 2px 4px rgba(33, 83, 60, 0.5);

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Label = styled.label`
font-weight: 600;
`