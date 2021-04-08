import './App.scss';
import { useState, useEffect } from 'react';

// todo: 
// proper spacing padding
// responsive design)

function isHighRating(score) {
  return score > 5;
}

function getHighRatingClass(score) {
  return isHighRating(score) ? 'high-rating' : 'low-rating';
}

function Card({message, className = ''}) {
  return (<div className={`card m-y-30 p-15 ${className}`}>
    <div className="card-title">
      <span className={getHighRatingClass(message?.score)}>{message.subject}</span>
      <span>{message.team}</span>
    </div>
    <div className="card-body">
      <span>{message.question}</span>
      <span>{message.created_at}</span>
    </div>
    <div className="card-content">
      {message.text}
    </div>
  </div>)
}

function CardContainer({messageGroup}) {
  const [expanded, setExpanded] = useState(false);
  const messageCount = messageGroup.length;
  const [firstMessage] = messageGroup;
  const toggleContainer = () => {
    setExpanded(!expanded);
  }
  return (<div className={`card-container ${expanded ? 'expanded' : 'colapsed'}`}>
    {messageCount > 1 ? <div className={`message-counter ${getHighRatingClass(firstMessage?.score)}`} onClick={toggleContainer}>{messageCount} messages</div>: null}
    {messageGroup.map((m,i) => {
      const classes = i === 0 ? 'main' : !expanded ? `shadow shadow-${i}` : 'main';
      return <Card message={m} className={classes} key={`${m.id}`}></Card>
    })}
  </div>)
}

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
    <div className="column p-x-40">
      {
        threads.map(thread => (<CardContainer 
          messageGroup={thread}
        />))
      }
    </div>
  );
}

export default App;
