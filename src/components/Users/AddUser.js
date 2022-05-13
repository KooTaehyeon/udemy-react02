import React, { useRef, useState } from 'react';
import styles from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
const AddUser = (props) => {
  const [error, setError] = useState();
  const nameInputRef = useRef(null);
  const ageInputRef = useRef(null);

  const addUserHandler = (e) => {
    e.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'please enter a valid name and age(non-empty values)',
      });

      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'please enter a valid age(>0)',
      });

      return;
    }
    props.addUser(enteredName, enteredAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>UserName</label>
          <input type={'text'} id='username' ref={nameInputRef} />
          <label htmlFor='age'>UserAge</label>
          <input type={'number'} id='age' ref={ageInputRef} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
