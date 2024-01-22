import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

export default function Timeline() {
  return (
    <div className="max-w-6xl mx-auto my-20 p-4">
      <Title>Timeline</Title>
      <ul className="list-none pl-0">
        {timeline.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </ul>
    </div>
  );
}
