import Image from "next/future/image";

export default function ImageItem({url, onClick}) {
  return (
    <>
      <a className="img-fluid" onClick={e => onClick(e, { index })}>
        <Image
          className="img-fluid p-0 gallery-grid-img"
          src={url}
          alt='test'
          layout="responsive"
          width={720}
          height={480}
          // onClick={e => onClick(e, { index })}
        />
      </a>
    </>
  );
}
