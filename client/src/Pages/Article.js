import { useLocation } from "react-router-dom";
import Navbar from '../Components/navbar.js';

function Article() {
  const location = useLocation();
  const { article } = location.state || {};
  console.log(article);
  if (!article) {
    // Handle the case when there is no article data
    return <div className="article-content">No article data</div>;
  }
  return (
    <>
    <Navbar></Navbar>
      <div className="wrapper">
        <div className="article-wrapper">
          <h1>{article.title}</h1>
          <div className="article-pub-date">
            Published: {article.publishedAt} , Last Updated :{" "}
            {article.publishedAt}
          </div>
          {article.urlToImage && (
            <p className="img-p">
              <img
                className="article-img"
                src={article.urlToImage}
                alt="Water Footprint"
              />
            </p>
          )}
          <div className="article-content">{article.content}</div>
        </div>
      </div>
    </>
  );
}
export default Article;
