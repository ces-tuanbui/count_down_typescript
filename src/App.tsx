/* eslint-disable @typescript-eslint/no-explicit-any */
import "./App.css";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import CountDownApp from "./CountDownApp";

let stompClient: any;

function App() {
  const connect = () => {
    console.log("connection");
    const sockJS = new SockJS("http://localhost:8083/ws");

    stompClient = over(sockJS);

    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    console.log("ws connected");

    // stompClient.subscribe("/topic/public", onMessageReceived);
    // stompClient.send(
    //   "/app/chat.addUser",
    //   {},
    //   JSON.stringify({ sender: "abc", type: "JOIN" })
    // );
    stompClient.subscribe("/topic/ping", onMessageReceived);
    stompClient.send("/app/chat.ping", {});
  };

  const onError = () => {
    console.log("ws error");
  };

  const onMessageReceived = (payload: any) => {
    console.log("ws message received");
    const { body } = payload;
    const message = JSON.parse(body);
    console.log(message);
  };

  return (
    <>
      <div>
        <p>Test connection</p>
        <button onClick={connect}>connect</button>
        <CountDownApp />
      </div>
    </>
  );
}

export default App;
