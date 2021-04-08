import { useState } from "react";
import { getHighRatingClass } from "./designUtils";

function Card({ message, className = "" }) {
  return (
    <div className={`card m-y-30 p-15 ${className}`}>
      <div className="card-title">
        <span className={getHighRatingClass(message?.score)}>
          {message.subject}
        </span>
        <span>{message.team}</span>
      </div>
      <div className="card-body">
        <span>{message.question}</span>
        <span>{message.created_at}</span>
      </div>
      <div className="card-content">{message.text}</div>
    </div>
  );
}

export function CardContainer({ messageGroup }) {
  const [expanded, setExpanded] = useState(false);
  const messageCount = messageGroup.length;
  const [firstMessage] = messageGroup;
  const toggleContainer = () => {
    setExpanded(!expanded);
  };
  return (
    <div className={`card-container`}>
      {messageCount > 1 ? (
        <div
          className={`message-counter ${getHighRatingClass(
            firstMessage?.score
          )}`}
          onClick={toggleContainer}
        >
          {messageCount} messages
        </div>
      ) : null}
      {messageGroup.map((m, i) => {
        const classes =
          i === 0 ? "main" : !expanded ? `shadow shadow-${i}` : "main";
        return <Card message={m} className={classes} key={m.id}></Card>;
      })}
    </div>
  );
}
