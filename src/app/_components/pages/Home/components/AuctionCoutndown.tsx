"use client";
import React, { useState, useEffect } from "react";
import Countdown, { CountdownRenderProps } from "react-countdown";

type Props = {
  endTime: Date;
  refresh?: boolean;
};

const AuctionCoutndown = (props: Props) => {
  const { endTime, refresh = false } = props;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const renderer = ({
    hours,
    minutes,
    seconds,
    completed,
  }: CountdownRenderProps) => {
    if (completed) {
      return <p className="text-xs font-thin">ended</p>;
    }
    return (
      <p className="text-xs font-thin">
        ends in {hours === 0 ? "" : hours < 10 ? `0${hours}h ` : `${hours}h `}
        {minutes === 0 ? "" : minutes < 10 ? `0${minutes}m ` : `${minutes}m `}
        {seconds < 10 ? `0${seconds}s` : `${seconds}s`}
      </p>
    );
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <Countdown
      date={endTime}
      renderer={renderer}
      onComplete={() => {
        if (refresh) {
          window.location.reload();
        }
      }}
    />
  );
};

export default AuctionCoutndown;
