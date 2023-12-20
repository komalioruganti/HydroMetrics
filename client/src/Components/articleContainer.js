function ArticleBox({title,date,content}) {
    return (
      <>
        <div className="wrapper">
          <div className="article-container">
            <div className="article-title">
            <a href = "#">{title}</a></div>
              <div className="article-date">{date.substring(0,10)}</div>
              <div className="article-mini-content">
                {content && content.substring(0,150)}[......]
            </div>
          </div>
        </div>
      </>
    );
  }
  export default ArticleBox;
  