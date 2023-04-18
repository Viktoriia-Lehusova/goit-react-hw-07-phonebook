import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { getContacts, getFilterValue } from '../../redux/selector';
import { StyledItem, BtnDelete, StyledList } from './ContactList.styled';

export const ContactList = () => {
  const filterValue = useSelector(getFilterValue);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const filteredItems = filterValue
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filterValue.toLowerCase().trim())
      )
    : contacts;

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <div>
      <StyledList>
        {filteredItems.map(contact => (
          <StyledItem key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <BtnDelete
              type="button"
              onClick={() => onDeleteContact(contact.id)}
            >
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
