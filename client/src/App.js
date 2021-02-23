import React, { useState, useEffect } from 'react';

import axios from 'axios';
import './App.css';

function App() {
  const [testHitting, setTestHitting] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios({
        method: 'get',
        url: '/api/v1/projects',
      });
      setTestHitting(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  if (isLoading) {
    return (
      <h1>Data is loading.......</h1>
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>{testHitting.message.toString()}</p>
      </header>
    </div>
  );
}

export default App;
