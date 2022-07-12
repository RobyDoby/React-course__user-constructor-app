import styles from './UserListItem.module.css';

const UserListItem = (props) => {
   return (
      <li className={styles['user-list-item']}>
         {`${props.userName} (${props.userAge} years old)`}
      </li>
   );
};

export default UserListItem;
