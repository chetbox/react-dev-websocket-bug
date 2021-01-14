import { useRef } from 'react';

function App() {
  const websocket = useRef();
  if (!websocket.current) {
    websocket.current = new WebSocket('wss://echo.websocket.org');
  }

  return null;
}

export default App;
