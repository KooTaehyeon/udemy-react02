import React from 'react';
import styles from './UserList.module.css';
import Card from '../UI/Card';

const userList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((item) => {
          return (
            <li key={item.id} id={item.id}>
              이름:{item.name}({item.age})
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default userList;
