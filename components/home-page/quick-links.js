import Link from "next/link";
import RoundIconButton from "@buttons/round-icon-button";

export default function QuickLinks({ target, url, text, iconwidth, btnicon }) {
  return (
    <>
      <Link href={url}>
        <a target={target} rel="noopener noreferrer">
          <RoundIconButton
            text={text}
            iconwidth={iconwidth}
            btnicon={btnicon}
          />
        </a>
      </Link>
    </>
  );
}
