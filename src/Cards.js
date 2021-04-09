import { useState } from "react";
import { getHighRatingClass } from "./designUtils";
import { formatDate } from './dateUtils';

function Card({ message, className = "" }) {
  return (
    <div className={`card m-y-40 p-30 ${className}`}>
      <div className="card-body">
      <div className="first-column">
        <span className={`card-title ${getHighRatingClass(message?.score)} `}>
          {message.subject}
        </span>
        <span>{message.question}</span>
      </div>
      <div className="second-column">
        <span>{message.team}</span>
        <span>{formatDate(message.created_at)}</span>
      </div>
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
