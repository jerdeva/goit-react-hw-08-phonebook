import styled from 'styled-components';

export const  List = styled.ul`
list-style:none;
margin: 8px;
padding: 0;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
gap: 32px;
/* background-color: skyblue;  */
padding: 12px;
`

export const ItemsStyled = styled.li`
  border: 1px solid green;
  border-radius: 8px;
  padding: 8px;
  background-color: lightyellow;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;


// export default List;