import { Icon } from "@iconify/react";

export default function TimelineItem({ text, year, icon, weight }) {
  return (
    <div>
      <div className={weight}>
        <div className="date">{year}</div> 
        <Icon icon={icon} className="icon" width={30}/> 
        <div className="content">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
