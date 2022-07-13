import React, { useState, useId } from 'react';
import UserForm from './components/Form/UserForm';
import Modal from './components/UI/Modal/Modal';
import UsersList from './components/UserList/UsersList';

function App() {
   const usersList = [];
   const [users, setUsers] = useState(usersList);
   const [errorMsg, setErrorMsg] = useState('');
   const [isActive, setIsActive] = useState(false);
   const id = useId();

   const addUserData = (user) => {
      setUsers((previousUsers) => {
         user = {
            ...user,
            id: `${user.name}-${user.age}-${id}-${previousUsers.length}`,
         };
         return [...previousUsers, user];
      });
   };
   const removeUserHandler = (userId) => {
      setUsers((prevUserList) => {
         const updatedList = prevUserList.filter((user) => user.id !== userId);
         console.log(updatedList);
         return updatedList;
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
         <UsersList users={users} onRemoveUser={removeUserHandler} />
         {isActive && <Modal message={errorMsg} onCloseModal={closeModal} />}
      </div>
   );
}

export default App;
