import ArticleBox from '../Components/articleContainer.js';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/navbar.js';

function EduResources() {
  const [eduResources, setEduResources] = useState([]);

  useEffect(() => {
    const fetchTopArticles = async () => {
      try {
        const response = await fetch("http://localhost:8080/eduResources");
        const data = await response.json();
        setEduResources(data);
        console.log(data)
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchTopArticles();
  }, []); // Empty dependency array ensures that this effect runs once on component mount
  const navigate = useNavigate();

  const handleArticleClick = (article) => {
    console.log("Clicked article:", article); // Log clicked article data
    navigate('article', { state: { article } });
  }
  

  return (
    <>
    <Navbar></Navbar>
      <div class="spacer"></div>
      <div className="wrapper">
        <h1>Educational Resources</h1>
        <div className="article-grid-container">
          {eduResources.length > 0 &&
            eduResources.map((article, index) => (
                <div onClick = {() => handleArticleClick(article)} key ={index}>
              <ArticleBox 
                key={index}
                title={article.title}
                date={article.publishedAt}
                content={article.content}
              />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default EduResources;
