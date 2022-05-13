import React, { useState } from 'react';
import styles from './AddUser.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
const AddUser = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredUserAge, setEnteredUserAge] = useState('');
  const [error, setError] = useState();
  const [isModal, setIsModal] = useState(false);
  const addUserHandler = (e) => {
    e.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: 'Invalid input',
        message: 'please enter a valid name and age(non-empty values)',
      });
      setIsModal(!isModal);
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'please enter a valid age(>0)',
      });
      setIsModal(!isModal);
      return;
    }
    props.addUser(enteredUserName, enteredUserAge);
    setEnteredUserName('');
    setEnteredUserAge('');
  };
  const userNameChangeHandler = (e) => {
    setEnteredUserName(e.target.value);
  };
  const userAgeChangeHandler = (e) => {
    setEnteredUserAge(e.target.value);
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
          onModal={setIsModal}
          onConfirm={errorHandler}
        />
      )}

      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>UserName</label>
          <input
            type={'text'}
            id='username'
            value={enteredUserName}
            onChange={userNameChangeHandler}
          ></input>
          <label htmlFor='age'>UserAge</label>
          <input
            type={'number'}
            id='age'
            value={enteredUserAge}
            onChange={userAgeChangeHandler}
          ></input>
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
