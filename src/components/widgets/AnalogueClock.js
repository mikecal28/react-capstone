import { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

import clockTemplate from "../../assets/clock-template-cropped.png";

function AnalogueClock() {
  const [sHand, setSHand] = useState(0);
  const [mHand, setMHand] = useState(0);
  const [hHand, setHHand] = useState(0);

  const seconds = keyframes`
    0% {
      transform: rotate3d(0, 0, 1, ${sHand}deg);
    }
    50% {
      transform: rotate3d(0, 0, 1, ${sHand + 180}deg);
    }
    100% {
      transform: rotate3d(0, 0, 1, ${sHand + 360}deg);
    }
  `;

  const secondsAnimation = (props) =>
    css`
      ${seconds} 60s linear infinite;
    `;

  const SecondHand = styled.div`
    width: 0.05rem;
    height: 14rem;
    background: linear-gradient(to bottom, black 49%, transparent 50%);
    animation: ${secondsAnimation} linear infinite;
    position: absolute;
    top: 20.5%;
    left: 50.5%;
  `;

  const minutes = keyframes`
  0% {
    transform: rotate3d(0, 0, 1, ${mHand}deg);
  }
  50% {
    transform: rotate3d(0, 0, 1, ${mHand + 180}deg);
  }
  100% {
    transform: rotate3d(0, 0, 1, ${mHand + 360}deg);
  }
  `;

  const minutesAnimation = (props) =>
    css`
      ${minutes} 3600s linear infinite;
    `;

  const MinuteHand = styled.div`
    width: 0.3rem;
    height: 12rem;
    background: linear-gradient(to bottom, black 49%, transparent 50%);
    animation: ${minutesAnimation} linear infinite;
    position: absolute;
    top: 24.5%;
    left: 50%;
  `;

  const hours = keyframes`
  0% {
    transform: rotate3d(0, 0, 1, ${hHand}deg);
  }
  50% {
    transform: rotate3d(0, 0, 1, ${hHand + 180}deg);
  }
  100% {
    transform: rotate3d(0, 0, 1, ${hHand + 360}deg);
  }
  `;

  const hoursAnimation = (props) =>
    css`
      ${hours} 216000s linear infinite;
    `;

  const HourHand = styled.div`
    width: 0.3rem;
    height: 10rem;
    background: linear-gradient(to bottom, red 49%, transparent 50%);
    animation: ${hoursAnimation} linear infinite;
    position: absolute;
    top: 28.5%;
    left: 49.5%;
  `;

  useEffect(() => {
    const today = new Date();
    const hoursOffset = (today.getMinutes() / 60) * 30;
    const minutesOffset = (today.getSeconds() / 60) * 6;
    setHHand(today.getHours() * 30 + hoursOffset);
    setMHand(today.getMinutes() * 6 + minutesOffset);
    setSHand(today.getSeconds() * 6);
  }, []);

  useEffect(() => {
    console.log("Time: ", hHand, ":", mHand, ":", sHand);
  }, [hHand, mHand, sHand]);

  return (
    <div className="analogue-clock">
      <div className="analogue-clock-wrapper">
        <img src={clockTemplate} className="clock-face" alt="clock-face"></img>
        <SecondHand />
        <MinuteHand />
        <HourHand />
        <div className="center-piece"></div>
      </div>
    </div>
  );
}

export default AnalogueClock;
