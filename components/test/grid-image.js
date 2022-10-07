import Image from "next/future/image";

export default function GridImage ({ key, index, left, top, photo, onClick }) {
  const { height, width, src, alt, title } = photo;
  return (
    <div className="image-container"
      key={`${key}-${index}`}
      // index={index}
      onClick={e => onClick(e, { index })}
      style={{ left, top, height, width }}
    >
      <div className="overlay-container">
        <Image src={src} alt={alt} title={title} width={width} height={height} layout="responsive"/>
        <div className="caption">
          {/* <h6>{title}</h6> */}
        </div>
      </div>
    </div>
  );
};