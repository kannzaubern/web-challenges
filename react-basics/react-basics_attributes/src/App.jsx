import "./styles.css";

export default function App() {
  return <Article />;
}

export function Article() {
  return (
    <article>
      `<h2 className="article__title">Article Title</h2>
      <label id="article__id" htmlFor="article__input">
        I am an input label
      </label>
      <input id="article__input"></input>
      <a className="article__link" href="https://www.t-online.de/">
        Submit
      </a>
    </article>
  );
}
