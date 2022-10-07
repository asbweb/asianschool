import { Icon } from "@iconify/react"; 

export default function CloseButton({ onClick }) {
  return ( 
      <button className="button-control right" type="button" onClick={onClick}> 
        <Icon icon="mdi:close-circle" />
      </button> 
  );
}
