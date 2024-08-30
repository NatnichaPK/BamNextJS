import Image from "next/image";

export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to the</h1>
      <Image
        src="/Pokémon_logo.svg.png"
        alt="Profile Picture"
        width={920}
        height={520}
      />
    </div>
  );
}
