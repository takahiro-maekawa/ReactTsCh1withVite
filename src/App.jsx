import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Alert from './Alert.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Alert type = "information" heading="Success" closable={true}>
       フレーフレー
      </Alert>
    </>
  );
}

export default App;
