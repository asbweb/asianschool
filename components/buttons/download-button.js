import Button from "react-bootstrap/Button";
import { Icon } from "@iconify/react"; 

export default function DownloadButton({ btnicon, children }) {
  return (
    <>
      <Button variant="light" className="shadow-sm border rounded-3 py-1 py-lg-2 px-1 px-lg-5 mt-3">
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
