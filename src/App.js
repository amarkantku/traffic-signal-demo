import React from "react";
import "./App.css";
import TrafficSignal from "./components/TrafficSignal/TrafficSignal";

// red->green->yellow->red

const config = {
  red: {
    duration: 4000,
    next: "green",
  },
  yellow: {
    duration: 500,
    next: "red",
  },
  green: {
    duration: 3000,
    next: "yellow",
  },
};

export default function App() {
  return (
    <div>
      <h1 className="title">Traffic Signal Demo</h1>
      <TrafficSignal config={config} layout="vertical" />
      <TrafficSignal config={config} />
    </div>
  );
}
