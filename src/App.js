import './main.scss';
import { useState, useEffect } from 'react';
import { CardContainer } from './Cards';

// todo: 
// proper spacing padding
// responsive design
// split code - css and js

function App() {
  const [threads, setThreads] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/threads')
      .then(response => response.json())
      .then(data => {
        setThreads(data);
      })
  }, []);

  return (
    <div className="column container">
      {
        threads.map((thread) => (<CardContainer 
          messageGroup={thread}
          key={thread[0].thread_id}
        />))
      }
    </div>
  );
}

export default App;
