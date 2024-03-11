import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [balance, setBalance] = useState('');

  useEffect(() => {
    // Replace 'http://localhost:3001/api/balance' with the correct URL if your backend runs on a different port
    axios.post('http://localhost:3001/api/balance')
      .then(response => {
        setBalance(response.data.balance); // Assuming the backend sends back data in this format
      })
      .catch(error => {
        console.error('Error fetching the balance:', error);
        setBalance('Error fetching balance');
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Balance: {balance}</p>
      </header>
    </div>
  );
}

export default App;
