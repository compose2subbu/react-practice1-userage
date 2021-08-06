import classes from './Modal.module.css';
import Card from './Card';

const Modal = (props) => {
    //
    return (
        <div className={classes.backdrop}>
            <Card>
                <div className={classes.header}>{props.message}</div>
            </Card>
            <button className={classes.button} onClick={props.onClose} type='button'>Dismiss</button>
        </div>
    );
};

export default Modal;