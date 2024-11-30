import React from "react";
import { initializePubSubClient, sendEvent, sendToAll } from "./pubSubClient";

export default function App() {
    const handleSendSignal = () => {
        sendEvent();
    };

    const [user, setUser] = React.useState("");
    const [msg, setMsg] = React.useState("");

    const onChange = (e) => {
        setUser(e.target.value);
    };

    const initializeHandler = () => {
        initializePubSubClient(user);
    };

    const onMsgChange = (e) => {
        setMsg(e.target.value);
    };

    return (
        <>
            <h1>Helmlo dear!</h1>
            <input type="text" value={user} onChange={onChange} />
            <button onClick={initializeHandler}>Initialize</button>
            <button onClick={handleSendSignal}>Send signal</button>
            <input type="text" value={msg} onChange={onMsgChange} />
            <button onClick={() => sendToAll(msg)}>Send to all</button>
        </>
    );
}
