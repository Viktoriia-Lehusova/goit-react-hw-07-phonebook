import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contactsSlice';
import { getContacts, getFilterValue } from '../../redux/selector';
import { StyledItem, BtnDelete, StyledList } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const filteredItems = filterValue
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filterValue.toLowerCase().trim())
      )
    : contacts;

  const deleteContact = contactId => {
    dispatch(removeContact(contactId));
  };

  return (
    <div>
      <StyledList>
        {filteredItems.map(contact => (
          <StyledItem key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <BtnDelete type="button" onClick={() => deleteContact(contact.id)}>
              Delete
            </BtnDelete>
          </StyledItem>
        ))}
      </StyledList>
    </div>
  );
};

ContactList.propTypes = {
  contatcs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
