import styles from './UsersList.module.css';
import Card from '../UI/Card/Card';
import UserListItem from './UserListItem';

const UsersList = (props) => {
   const deleteUserHandler = (id) => {
      props.onRemoveUser(id);
   };
   return (
      <Card>
         <ul className={styles['users-list']}>
            {props.users.length === 0 && <li>No Users Found</li>}
            {props.users.length > 0 &&
               props.users.map((user, index) => {
                  return (
                     <UserListItem
                        key={index}
                        userName={user.name}
                        userAge={user.age}
                        id={user.id}
                        onDeleteUser={deleteUserHandler}
                     />
                  );
               })}
         </ul>
      </Card>
   );
};

export default UsersList;
