import React, { useEffect, useLayoutEffect, useState } from "react";
import * as T from "./TrafficSignal.styled";

export default function TrafficSignal({
  config,
  defaultSignal = "green",
  layout = "horizontal",
}) {
  const [signal, setSignal] = useState(defaultSignal);

  useLayoutEffect(() => {
    let timer;

    const { duration, next } = config[signal];
    timer = setTimeout(() => {
      setSignal(next);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [config, signal, setSignal]);

  return (
    <T.TrafficSignal
      layout={layout}
      aria-live="polite"
      aria-label={`Current signal: ${signal}`}
      className="traffic-light"
    >
      {Object.keys(config).map((color) => (
        <TrafficLight
          key={color}
          style={{
            backgroundColor: signal === color ? color : undefined,
          }}
          lightColor={color}
        />
      ))}
    </T.TrafficSignal>
  );
}

const TrafficLight = ({ style, lightColor }) => {
  return (
    <T.Light
      aria-hidden={true}
      style={style}
      aria-label={lightColor}
      className="light"
    />
  );
};
