import Image from "next/image";
export default function Home() {
  return (
<div className="container">
      <Image className="landImage" src="/img/src/Mont_Blanc.jpg" alt="Mont Blanc" layout="fill" objectFit="cover" objectPosition="center" />
      <h1 className="landText">Bienvenue sur mon porte folio</h1>
    </div>
  )
}
