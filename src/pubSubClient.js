import { WebPubSubClient } from "@azure/web-pubsub-client";

const groupName = "test_group_01";

let pubSubClient;

export async function initializePubSubClient(user) {
    try {
        if (user === "") {
            console.error("User name is empty");
            return;
        }

        // fetch the token from a local server
        const res = await fetch(`http://localHost:9080/negotiate/${user}`);
        const parsedRes = await res.json();

        // initialize the web pubsub client
        pubSubClient = new WebPubSubClient(parsedRes.url);

        await pubSubClient.start();
        // in case you want to join a group
        // await pubSubClient.joinGroup(groupName);

        pubSubClient.on("connected", (e) => {
            console.log(`Connected to the service, ${e.connectionId}`);
        });

        pubSubClient.on("server-message", (e) => {
            console.log(`Received message: ${e.message.data}`);
        });

        // for group
        // pubSubClient.on("group-message", (e) => {
        //     console.log(`Received group message: ${e.message.data}`);
        // });

        // await pubSubClient.joinGroup(groupName);
    } catch (e) {
        console.error(e);
    }
}

// sending user events
export async function sendEvent() {
    if (pubSubClient == null) {
        return;
    }
    try {
        pubSubClient.sendEvent("test-event", "hello world", "text");
    } catch (e) {
        console.error(e);
    }
}

// sending message to all
export async function sendToAll(message) {
    try {
        if (message === "") {
            console.error("Message is empty");
            return;
        }
        await fetch(`http://localhost:9080/sendToAll/${message}`);
    } catch (e) {
        console.error("Failed to send message to all:", e);
    }
}

export default pubSubClient;
