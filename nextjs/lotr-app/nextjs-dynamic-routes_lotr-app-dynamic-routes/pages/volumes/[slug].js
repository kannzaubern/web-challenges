import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "@/lib/data";
import Image from "next/image";

export default function VolumeDetail() {
  const router = useRouter();
  console.log("router", router);
  const { slug } = router.query;

  let volume = volumes.find((ele) => ele.slug === slug);
  console.log(volume);

  if (!volume) {
    return <p>Volume not found</p>;
  }

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}: <strong>{volume.title}</strong>
          </li>
        ))}
      </ul>
      <Image
        src={volume.cover}
        alt={`Cover image of ${volume.title}`}
        width={140}
        height={230}
      />
      {volume.previousVolume ? (
        <div>
          <Link href={`/volumes/${volume.previousVolume.slug}`}>
            ← Previous Volume: {volume.previousVolume.title}
          </Link>
        </div>
      ) : null}
      {volume.nextVolume ? (
        <div>
          <Link href={`/volumes/${volume.nextVolume.slug}`}>
            Next Volume: {volume.nextVolume.title} →
          </Link>
        </div>
      ) : null}
    </>
  );
}
