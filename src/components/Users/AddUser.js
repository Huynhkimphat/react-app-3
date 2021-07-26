// Ref :Read Value And Do Not Change Anything => less code
// State: Cleaner + More Code
import React, { useState, useRef } from "react";
import styles from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
// import Wrapper from "../Helpers/Wrapper";
const AddUser = (props) => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [error, setError] = useState("");
    const addUserHandler = (event) => {};
    const errorHandler = () => {};
    return (
        <>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" ref={nameInputRef} />
                    <label htmlFor="age">Age (years)</label>
                    <input id="age" type="number" ref={ageInputRef} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    );
};
export default AddUser;
