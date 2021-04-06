import './App.scss';
const message = {
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
function Card({message}) {
  return (<div>
    <div>
      {message.subject}
    </div>
    <div>
      {message.team}

    </div>
    <div>
      {message.question}

    </div>
    <div>
      {message.created_at}
    </div>
    <div>
      {message.text}
    </div>
  </div>)
}

function CardContainer({messageGroup}) {
  return (<div>

  </div>)
}

function App() {
  return (
    <div >
      <Card message={message}></Card>
    </div>
  );
}

export default App;
