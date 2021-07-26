import React, { useState } from "react";
import UsersList from "./components/Users/UsersList";
import AddUser from "./components/Users/AddUser";
function App() {
    const [usersList, setUsersList] = useState([]);
    const addUserHandler = (userName, userAge) => {};
    return (
        <>
            <AddUser onAddUser={addUserHandler} />
            <UsersList users={usersList} />
        </>
    );
}

export default App;
