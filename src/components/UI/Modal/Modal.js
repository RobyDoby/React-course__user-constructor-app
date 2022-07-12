import Button from '../Button/Button';
import styles from './Modal.module.css';

const Modal = (props) => {
   const closeModalHandler = () => {
      props.onCloseModal();
   };
   return (
      <div className={styles.modal}>
         <div className={styles['modal-backdrop']} onClick={closeModalHandler}>
            <div className={styles['modal-content']}>
               <h2 className={styles['modal-title']}>Invalid Input</h2>
               <p className={styles['modal-message']}>{props.message}</p>
               <div className={styles['modal-btn']}>
                  <Button onClick={closeModalHandler}>Close Modal</Button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Modal;
