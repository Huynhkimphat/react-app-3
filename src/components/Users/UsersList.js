import React from "react";
import Card from "../UI/Card";
import styles from "./UsersList.module.css";
const UsersList = (props) => {
    return (
        <Card className={styles.users}>
            <ul></ul>
        </Card>
    );
};
export default UsersList;
