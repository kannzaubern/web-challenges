import Link from "next/link";
import { introduction } from "@/resources/lib/data"; // Adjust the import path as needed

export default function Volumes() {
  return (
    <>
      <h1>Lord of the Rings</h1>
      <header>
        <Link href={"/"}>Home</Link>
        <br></br>
        <Link href={"/volumes"}>Volumes</Link>
        <br></br>
      </header>
      <main className="lord-of-the-rings">
        <h2>Introduction</h2>
        <section className="introduction">{introduction}</section>
        <h2>All Volumes</h2>
        <section className="list-volumes">
          <ul>
            <li>
              <Link href="/volumes/the-fellowship-of-the-ring">
                The Fellowship of the Ring
              </Link>
            </li>
            <li>
              <Link href="/volumes/the-two-towers">The Two Towers</Link>
            </li>
            <li>
              <Link href="/volumes/the-return-of-the-king">
                The Return of the King
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </>
  );
}
