import { useEffect, useRef, useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import InputField from '../UI/InputField';
import classes from './AddUser.module.css';
import Modal from '../UI/Modal';

const AddUser = () => {
    //
    const enteredPrintText = useRef();
    const printTextData = {label: 'Print Text', inputType: 'text'};
    const [showError, setShowError] = useState('');
    const enteredName = useRef();
    const enteredAge = useRef();

    useEffect(() => {
        enteredName.current.focus();
    }, [])

    const closeModalHandler = () => {
        setShowError('');
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        //console.log(enteredName.current.value);
        const nameText = enteredName.current.value;
        const ageText = enteredAge.current.value;
        if(nameText.trim().length <= 3){
            setShowError((currentError) => currentError+'Username is invalid. Please Enter name with minimum 4 characters.');
        }
        if(+ageText <= 3){
            setShowError((currentError) => currentError+'Age is invalid. Minimum age is 4.');
        }
        enteredPrintText.current.print();
    };
    let showModal;
    if(showError !== ''){
        showModal = <Modal message={showError} onClose={closeModalHandler}/>
    };

    return (
        <Card>
            {showModal}
            <form onSubmit={formSubmitHandler} className={classes.form}>
                <label htmlFor='name'>Name</label>
                <input type='text' ref={enteredName}></input>
                <label htmlFor='name'>Age</label>
                <input type='text' ref={enteredAge}></input>
                <InputField data={printTextData} ref={enteredPrintText}/>
                <Button type='submit'>Submit</Button>
            </form>
        </Card>
    );
};

export default AddUser;