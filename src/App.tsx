/* eslint-disable @typescript-eslint/no-explicit-any */
import "./App.css";
import { over } from "stompjs";
import SockJS from "sockjs-client";
import { useState } from "react";

let stompClient: any;

function App() {
  const [countdownTime, setCountDownTime] = useState("o_o");
  const [text, setText] = useState(1);

  const connect = () => {
    const sockJS = new SockJS("http://localhost:8080/ws");
    stompClient = over(sockJS);
    stompClient.connect({}, onConnected, onError);
  };

  const onConnected = () => {
    stompClient.subscribe(`/topic/ping/${text}`, onMessageReceived);
    stompClient.send(
      "/app/chat.ping",
      {},
      JSON.stringify({ transactionId: text, isClose: false })
    );
  };

  const onMessageReceived = (payload: any) => {
    const { body } = payload;
    const { message } = JSON.parse(body);
    setCountDownTime(message);
  };

  const onError = () => {
    console.log("ws error");
  };

  const disconnect = () => {
    if (stompClient) {
      stompClient.disconnect(() => {
        console.log("Disconnect from WebSocket");
      });
    }
  };

  const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
    setText(Number(e.currentTarget.value));
  };

  return (
    <>
      <div>
        <p>Test connection</p>
        <label>input </label>
        <input type="text" onChange={handleInput} />
        <button onClick={connect}>connect</button>
        <button onClick={disconnect}>disconnect</button>
        <h1>Countdown Timer</h1>
        <p>{countdownTime}</p>
        {/* <CountdownTimer targetDate={countdownTime} /> */}
      </div>
    </>
  );
}

export default App;
