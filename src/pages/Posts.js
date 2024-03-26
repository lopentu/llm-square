import "./Posts.css"
import "../App.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import ArticleList from "../components/ArticleList";

const Posts = () =>{

    const articles = [
        {
            title: '文章一',
            description: '文章一的描述',
            imageUrl: 'thumbnail1.jpg',
            readMoreUrl: 'article1.html'
        },
        {
            title: '文章二',
            description: '文章二的描述',
            imageUrl: 'hacker_cat.png',
            readMoreUrl: 'article2.html'
        }
    ];

    return(
        <div>
            <Header/>

            <div className="content-1">
                <section className="container-posts">
                    <header className="title">
                        <div className='title-area '>
                                <h3>
                                    <strong>
                                        BLOG
                                    </strong>
                                </h3>
                                <h1>好文分享</h1>
                        </div>
                    </header>

                    <div className="content-posts">
                        <ArticleList articles={articles} />
                    </div>



                </section>

            </div>

            <section className='footer'>
                <Footer/>
            </section>

        </div>

    );

}

export default Posts