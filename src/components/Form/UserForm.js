import { useState } from 'react';
import Button from '../UI/Button/Button';
import Card from '../UI/Card/Card';
import styles from './UserForm.module.css';

const UserForm = (props) => {
   const [enteredName, setEnteredName] = useState('');
   const [enteredAge, setEnteredAge] = useState('');

   const changeNameHandler = (e) => {
      setEnteredName(e.target.value);
   };
   const changeAgeHandler = (e) => {
      setEnteredAge(e.target.value);
   };

   const forwardUserData = (e) => {
      e.preventDefault();

      let userData = {
         name: enteredName,
         age: enteredAge,
      };
      const isValid = formValidation();
      if (!isValid.status) {
         props.onEmptyInputs(isValid.msg);
         return;
      }
      props.onFormSubmit(userData);
      setEnteredName('');
      setEnteredAge('');
   };
   const formValidation = () => {
      let message;
      if (enteredName.length === 0 && enteredAge.length === 0) {
         message = 'Please enter a name and age';
         return { status: false, msg: message };
      }
      if (enteredName.length === 0) {
         message = 'Please enter a name';
         props.onEmptyInputs(message);
         return { status: false, msg: message };
      }
      if (enteredAge.length === 0) {
         message = 'Please enter age';
         props.onEmptyInputs(message);
         return { status: false, msg: message };
      }
      if (enteredAge < 0) {
         message = 'Age cannot be less than 0';
         props.onEmptyInputs(message);
         return { status: false, msg: message };
      }
      return { status: true };
   };
   return (
      <Card>
         <form className={styles['user-form']} onSubmit={forwardUserData}>
            <div className={styles['user-form__input']}>
               <label htmlFor="userNameInput">Username</label>
               <input
                  type="text"
                  placeholder="Enter name"
                  id="userNameInput"
                  value={enteredName}
                  onChange={changeNameHandler}
               />
            </div>
            <div className={styles['user-form__input']}>
               <label htmlFor="userAgeInput">Age (Years)</label>
               <input
                  type="number"
                  placeholder="Enter user age"
                  id="userAgeInput"
                  value={enteredAge}
                  onChange={changeAgeHandler}
               />
            </div>
            <Button type="submit">Add User</Button>
         </form>
      </Card>
   );
};

export default UserForm;
