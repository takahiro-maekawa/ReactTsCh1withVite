import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Alert from './Alert.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Alert />
    </>
  );
}

export default App;
