import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { io } from "socket.io-client";
import MessageInput from "./components/MessageInput";
import ChatBody from "./components/ChatBody";

const socket = io("http://127.0.0.1:5000", {
  autoConnect: false,
});

function App() {
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    // socket.connect() is the function that will connect to our server to establish the full duplex connection
    socket.connect();
    setIsConnected(true);
  };

  const handleDisconnect = () => {
    socket.disconnect();
    setIsConnected(false);
  };

  return (
    <Container>
      <h3>Connection Status: {isConnected ? "Connected" : "Not connected"}</h3>
      {isConnected ? (
        <>
          {/* We are connected, show disconnect button */}
          <ChatBody socket={socket}/>
          <MessageInput socket={socket} />
          <Button onClick={handleDisconnect}>Disconnect</Button>
        </>
      ) : (
        <>
          {/* We are disconnected, show connect button */}
          <Button onClick={handleConnect}>Connect</Button>
        </>
      )}
    </Container>
  );
}

export default App;
