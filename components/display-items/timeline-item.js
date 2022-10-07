import { Icon } from "@iconify/react";

export default function TimelineItem({ text, year, icon, order }) {
  return (
    <div>
      <div className={order}>
        <div className="date">{year}</div>
         
        <Icon icon="bi:envelope-fill" className="icon"/> 
        <div className="content">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
