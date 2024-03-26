import '../App.css';

import Card from '../components/Card';
import About from '../components/About';
import Description from '../components/Description';
import Plan from '../components/Plan';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HomeHeader from '../components/HomeHeader';



const Home = () => {
    return (
        <div >
            <HomeHeader />
            <div className='content-1'>
                {/* <section className="hero">
                    <div className="content">
                        <Card />
                    </div>

                </section> */}

                <section className="section-1 beigebg">
                    <About />
                </section>

                <section className="section-2 whitebg">
                    <Description />
                </section>

                <section className="section-2 beigebg">
                    <div className='vertical-area'>
                        <div className='text-container orizontal'>
                            <div className='title-area left'>
                                <h2>
                                    POSTS
                                    <br />
                                    Square
                                </h2>
                                <h3>文章廣場（待開發...）</h3>
                            </div>
                            <a href="/posts" title="查看全部" className="button w-button">更多文章</a>
                        </div>
                        <div className='home-project-item-list w-dyn-list'>
                            <div role="list" className="project-items w-dyn-items">
                                <Plan imgSrc='' text='post_1' />
                                <Plan imgSrc='' text='post_2' />
                                <Plan imgSrc='' text='post_3' />
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className='footer'>
                <Footer />
            </section>
        </div>
    );

}

export default Home