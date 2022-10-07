import Button from "react-bootstrap/Button";
import { Icon } from "@iconify/react"; 

export default function DownloadButton({ btnicon, children }) {
  return (
    <>
      <Button variant="light" className="shadow-sm border rounded-3 px-5 py-2 mt-3">
        <Icon
          icon={btnicon}
          width={24}
          className="me-3"
        />
        {children}
      </Button>
    </>
  );
}
