import Article from './Article';
import '../pages/Posts.css'


const ArticleList = ({ articles }) => {
    return (
        <div className="article-list">
            {articles.map((article, index) => (
                <Article
                    key={index}
                    title={article.title}
                    description={article.description}
                    imageUrl={article.imageUrl}
                    readMoreUrl={article.readMoreUrl}
                />
            ))}
        </div>
    );
}

export default ArticleList;