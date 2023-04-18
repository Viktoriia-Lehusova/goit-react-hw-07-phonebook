import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilterValue } from '../../redux/selector';
import { filterContact } from '../../redux/contactsSlice';
import { StyledLabel, StyledInput } from './Filter.styled';

export const Filter = () => {
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const changeFilter = evt => {
    dispatch(filterContact(evt.target.value));
  };

  return (
    <div>
      <StyledLabel>
        Find contacts by name
        <StyledInput type="text" value={filterValue} onChange={changeFilter} />
      </StyledLabel>
    </div>
  );
};
