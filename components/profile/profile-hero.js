import Image from "next/image";

export default function ProfileHero() {
  return (
    <>
      <Image
        className="d-block w-100 home-hero-img"
        src="/images/home-hero/asbhomehero.jpg"
        alt="ASB"
        width={1920}
        height={720}
        layout="intrinsic"
      />
    </>
  );
}
