import { useState } from "react";
import styled, { css, keyframes } from "styled-components";

function MessageScroller() {
  const [message, setMessage] = useState("");

  const scroller = keyframes`100% { transform: translateX(-${
    message.length * 10 + 80
  }vw); }`;

  const animation = (props) =>
    css`
      ${scroller} ${message.length < 12
        ? message.length
        : message.length < 24
        ? message.length / 3
        : message.length < 36
        ? message.length / 6
        : message.length / 10}s linear infinite;
    `;

  const Text = styled.div`
    position: relative;
    top: 22.25rem;
    right: -43rem;
    height: 100%;
    width: fit-content;
    font-size: 5rem;
    font-weight: 600;
    color: white;
    white-space: nowrap;
    transform: translate3d(0, 0, 0);
    animation: ${animation} linear infinite;
  `;

  return (
    <div className="message-scroller">
      <Text>{message}</Text>
      <div className="message-scroller-cover">
        <div className="message-scroller-wrapper"></div>
      </div>

      <textarea
        onChange={(e) => setMessage(e.target.value)}
        type="text"
        placeholder="Enter Message..."
      />
    </div>
  );
}

export default MessageScroller;
