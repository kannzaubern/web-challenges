import Link from "next/link";
import { useRouter } from "next/router";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data";

export default function Volumes() {
  const router = useRouter();

  const goToRandomVolume = () => {
    const randomVolume = volumes[Math.floor(Math.random() * volumes.length)];
    router.push(`/volumes/${randomVolume.slug}`);
  };

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={goToRandomVolume}>Go to Random Volume</button>
    </>
  );
}
