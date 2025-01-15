import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

export function HelloWorldArticle() {
  return (
    <article>
      <h1>H1 Heading</h1>
      <p>At least one tag</p>
      <p>But oh hey, here is another</p>
    </article>
  );
}
