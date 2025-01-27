import Link from "next/link";
import { volumes } from "@/resources/lib/data";

export default function TheTwoTowers() {
  let volume = volumes[1];

  return (
    <>
      <h1>{volume.name}</h1>
      <header>
        <Link href={"/volumes"}>All Volumes</Link>
        <br />
      </header>
      <main>
        <h1>{volume.title}</h1>
        <p>{volume.description}</p>
        <h2>Books in this Volume</h2>
        <ul>
          {volume.books.map((book, index) => (
            <li key={index}>
              <strong>{book.ordinal}:</strong> {book.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
