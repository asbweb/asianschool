export default function HomeVideo() {
  return (
    <>
      <div className="mx-auto my-5 ratio ratio-16x9">
        <iframe 
          // width="560"
          // height="480"
          src="https://www.youtube.com/embed/zch89gbDf3o"
          title="The Asian School video"
          allow="accelerometer; autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}
