import { useState, useContext } from "react";
import classes from './CartOrder.module.css'

const CartOrder = (props) => {

    const arrDetailsUser = ['Name', 'Street', 'PostalCode', 'City']
    const [userValidation, setUserValidation] = useState({ Name: true, Street: true, PostalCode: true, City: true });
    const [arrUser, setArrUser] = useState({ Name: '', Street: '', PostalCode: '', City: '' })
    const [isClickSend, setIsClickSend] = useState(false)

    const checkInputText = () => {
        let newValidation = userValidation
        for (let [key, value] of Object.entries(arrUser)) {
            if (value && value != '')
                newValidation[key] = false
            else newValidation[key] = true
        }
        setUserValidation(newValidation)
        setIsClickSend(true)
    }

    const enterInput = (txt, index) => {
        setArrUser({ ...arrUser, [index]: txt })
        setIsClickSend(false)
    }

    return (
        <div >
            <div className={classes.details}>
                {arrDetailsUser.map((x, i) => {
                    return <div className={classes.detailsArr}>
                        <span>{arrDetailsUser[i]}</span><br />
                        <input type='text'
                            className={userValidation[x] && isClickSend ? classes.inputTextR : classes.inputTextB}
                            onChange={(txt) => enterInput(txt.target.value, x)}
                        ></input><br />
                        {userValidation[x] && isClickSend && <span className={classes.warningText}>Plese enter a valid {x}</span>}
                    </div>
                })}
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCloseFormCart}>
                    Close
                </button>
                <button className={classes['button--alt']} onClick={() => checkInputText()}>
                    Confirm
                </button>
            </div>
        </div>
    );
};

export default CartOrder;
