import styled from 'styled-components';


export const Paragrapher = styled.p`
    margin-bottom: 8px;
    font-weight: 500;
    margin-top: 8px;
`

export const Wrapper = styled.div`
display:flex;
align-items: center;
`
    
export const BTN = styled.button`
 margin: 4px 0 4px 24px;
  padding: 6px;
  width: 100px;
  height: 30px;
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
  `