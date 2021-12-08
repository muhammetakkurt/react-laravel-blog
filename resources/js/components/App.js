import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Article from "./Article";

function App() {
  const [articles, setArticles] = useState([]);

  const getArticles = () =>
    axios.get("api/v1/articles").then((resp) => {
      setArticles(resp.data);
    });

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div className="wrapper">
      {articles &&
        articles.map((article) => (
          <Article
            key={article.id}
            title={article.title}
            content={article.content}
          />
        ))}
    </div>
  );
}

export default App;

if (document.getElementById("root")) {
  ReactDOM.render(<App />, document.getElementById("root"));
}
