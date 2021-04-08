import { useState } from "react";
import { getHighRatingClass } from "./designUtils";

function Card({ message, className = "" }) {
  return (
    <div className={`card m-y-40 p-30 ${className}`}>
      <div className="card-title m-y-5">
        <span className={getHighRatingClass(message?.score)}>
          {message.subject}
        </span>
        <span>{message.team}</span>
      </div>
      <div className="card-body m-y-5">
        <span>{message.question}</span>
        <span>{message.created_at}</span>
      </div>
      <div className="card-content m-y-5">{message.text}</div>
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
  const displayMessageCounter = messageCount > 1 && !expanded;
  return (
    <div className={`card-container`} onClick={toggleContainer}>
      {displayMessageCounter ? (
        <div
          className={`message-counter ${getHighRatingClass(
            firstMessage?.score
          )}`}
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
