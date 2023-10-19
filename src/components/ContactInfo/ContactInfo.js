// import Wrapper from './ContactInfo.styled'
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../redux/contactsOperations';
// import { BsXCircleFill } from "react-icons/bs";
import {
  ButtonStyle,
  ItemsStyled,
  Paragrapher,
  Span,
} from './ContactInfo.styled';
import { ReactComponent as Delete } from '../icons/Delete.svg';

const ContactInfo = ({ contact }) => {
  const { id, name, phone } = contact;

  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContactThunk(id));

  return (
    <ItemsStyled>
      <Paragrapher>
        <Span>Name: </Span>
        {name}
      </Paragrapher>
      <Paragrapher>
        <Span>Number: </Span>
        {phone}
      </Paragrapher>
      <ButtonStyle onClick={handleDelete}>
        <Delete />
      </ButtonStyle>
    </ItemsStyled>
  );
};

export default ContactInfo;
