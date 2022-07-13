import styles from './UserListItem.module.css';

const UserListItem = (props) => {
   const deleteUser = () => {
      props.onDeleteUser(props.id);
   };
   return (
      <li className={styles['user-list-item']} id={props.id}>
         {`${props.userName} (${props.userAge} years old)`}
         <button onClick={deleteUser}>Delete User</button>
      </li>
   );
};

export default UserListItem;
