import styled from 'styled-components';

export const Wrapper = styled.div`
  justify-content: center;
  align-items: center;
  gap: 16px;
  display: flex;
  justify-content: space-between;
  color: black;
  font-weight: 600;
`;

export const ButtonStyle = styled.button`
  padding: 6px;
  width: 100px;
  height: 100%;
  flex-shrink: 0;
  border-radius: 33.5px;
  background: lightgrey;
  border: none;
  &:hover {
    color: #fff;
    background-color: gray;
    box-shadow: 1px 2px 6px 0px rgba(33, 83, 60, 0.7);
  }
  box-shadow: 0 2px 4px rgba(33, 83, 60, 0.5);

  @media screen and (max-width: 768px) {
    font-size: 18px;
    width: 50px;
  }
`;



export const Paragrapher = styled.p`
color: grey;
font-size: 16px;
font-weight: 300;
margin: 8px 0;
`

export const Span = styled.span`
color: black
`





/* export default Wrapper; */
