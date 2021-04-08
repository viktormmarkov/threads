import './App.scss';
import { useState } from 'react';

// todo: 
// implement shadows
// proper spacing padding
// serve data from server
// responsive design

const message = {
  "score": 10,
  "subject_id":10,
  "question_id":20,
  "thread_id":"5ca388e1a59a5a12444ba107",
  "reply_to":"5cab51c4a59a5a124c196b1d",
  "text":"fsdfsdf",
  "created_at":"2019-04-24 07:36:39",
  "subject":"Pay",
  "question":"I think I get too little in terms of my experience",
  "team":"Demo team here.",
  "id":"5cc01207a59a5a02bc68e007"
};

function Card({message, className = ''}) {
  return (<div className={`card m-y-30 p-15 ${className}`}>
    <div className="card-title">
      <span className={message?.score ? 'high-rating' : 'low-rating'}>{message.subject}</span>
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
  const toggleContainer = () => {
    setExpanded(!expanded);
  }
  return (<div className={`card-container ${expanded ? 'expanded' : 'colapsed'}`}>
    {messageCount > 1 ? <div className="message-counter" onClick={toggleContainer}>{messageCount}</div>: null}
    {messageGroup.map((m,i) => {
      return <Card message={m} className={i === 0 ? 'main' : !expanded ? `shadow shadow-${i}` : 'main'} key={`${message.id}#${i}`}></Card>
    })}
  </div>)
}

function App() {
  return (
    <div className="column p-x-40">
      <CardContainer messageGroup={[message, message, message, message]}></CardContainer>
      <Card message={message}></Card>
      <Card message={message}></Card>
      <Card message={message}></Card>
      <Card message={message}></Card>
      <Card message={message}></Card>
    </div>
  );
}

export default App;
