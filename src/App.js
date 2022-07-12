import React, { useState } from 'react';
import UserForm from './components/Form/UserForm';
import Modal from './components/UI/Modal/Modal';
import UsersList from './components/UserList/UsersList';

function App() {
   const usersList = [];
   const [users, setUsers] = useState(usersList);
   const [errorMsg, setErrorMsg] = useState('');
   const [isActive, setIsActive] = useState(false);

   const addUserData = (user) => {
      setUsers((previousUsers) => {
         return [user, ...previousUsers];
      });
   };
   const openModal = (message) => {
      setErrorMsg(message);
      setIsActive(true);
   };
   const closeModal = () => {
      setIsActive(false);
   };
   return (
      <div>
         <UserForm onFormSubmit={addUserData} onEmptyInputs={openModal} />
         <UsersList users={users} />
         {isActive && <Modal message={errorMsg} onCloseModal={closeModal} />}
      </div>
   );
}

export default App;
