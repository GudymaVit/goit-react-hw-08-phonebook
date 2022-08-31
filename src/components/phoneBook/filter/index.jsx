import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/contacts-actions';
import { getFilter } from 'redux/contacts/contacts-selectors';
import styles from './filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <label className={styles.filter_label}>
      Find contacts by name:
      <input type="text" value={filter} onChange={handleFilterChange} />
    </label>
  );
};

export default Filter;
