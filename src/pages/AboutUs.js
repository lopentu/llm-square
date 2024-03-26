import About from "../components/About";
import Description from "../components/Description";
import Plan from "../components/Plan";
import Footer from "../components/Footer";
import CardItem from "../components/CardItem";
import CardItemContent from "../components/CardItemContent";
import ContactInfoContent from "../components/ContactInfoContent";
import Nav from 'react-bootstrap/Nav';
import Header from "../components/Header";
import "./AboutUs.css"
import llmImage from '../llm_studying.png'
import nvidia from '../nvidia.png'
import ntu from '../ntu.png'

const AboutUs = () =>{
        const go =[
            {to:'#vision', to_where:'計畫願景'},
            {to:'#sponsors', to_where:'贊助'},
            {to:'#our_team', to_where:'團隊介紹'},
            {to:'#contact_info', to_where:'聯絡資訊'}
        ];    

    return( 
        <div >
            <Header go={go}/>

            <div className='content-1'>

                <section id='vision' className="section-2 beigebg">
                    <div className="horizontal-area mobile-switch">
                        <div className='text-container left'>
                            <div className='title-area left'>
                                <h2>VISION</h2>
                                <h3>計畫願景</h3>
                            </div>
                            <p>我們將以台灣本土的法律資料為基礎，並在以下幾個面向進行創新與領先：
                            <br/>
                            <br/>
                            • 高品質數據搜集、爬取與清理。台灣首次取得法律出版社的合作意願，提供高品質的人類撰寫（而非機器自己再生成）之期刊文章與解題內容。
                            <br/>
                            <br/>
                            • 模型訓練：獲得輝達台大中心的算力支持，使得本計畫的模型訓練能夠更加快速、高效與規模化。
                            <br/>
                            <br/>
                            • 模型評測以重視法律推理的申論題為主，更重視模型的可解釋性與推理能力。
                            <br/>
                            <br/>
                            • 應用與介面結合知識圖譜，增強模型可解釋性，並提供更加直觀的法律諮詢與教育服務</p>
                        </div>
                        <img src={llmImage} loading="lazy" sizes="(max-width: 767px) 90vw, (max-width: 991px) 45vw, 40vw" alt=" " className="featured-image"/>
                    </div>
                </section>

                <section id='our_team' className="section-2 whitebg">
                    <div className="vertical-area">
                        <div className="text-container center">
                            <div className="title-area">
                                <h1>OUR TEAM</h1>
                                <h3>團隊介紹</h3>
                            </div>
                        </div>
                        <div className="project01-description-container">
                            <div className="content-row">
                                <CardItem 
                                    title = {
                                                <span>
                                                    <a href="https://lope.linguistics.ntu.edu.tw" target="_blank" rel="noopener noreferrer">  
                                                        台大語言所<br/>
                                                        「知識本體、語言處理與人文計算實驗室」<br/>
                                                        <span className="small-font">
                                                                Lab of Ontologies, Language Processing 
                                                            <br/>
                                                                and E-humanities (LOPE)
                                                        </span>
                                                    </a>
                                                </span>
                                            } 
                                    description=''
                                    leader={<span>實驗室<br/>主持人</span>} 
                                    leaderName='國立台灣大學語言學研究所 謝舒凱教授' 
                                    coleader={<span>計畫參與<br/>學生</span>} 
                                    coleaderName = {
                                                        <span>國立台灣大學語言學研究所 <br/>國立台灣大學語言學研究所 </span>
                                                    }
                                />

                                <CardItem 
                                    title = { 
                                                <span>
                                                    <a href="https://llntu.github.io" target="_blank" rel="noopener noreferrer">  
                                                        台大法學院<br/>
                                                        「法律分析實驗室 」
                                                        <br/>
                                                        <span className="small-font">Laboratory of Legal Analytics  <br/>(LLNTU) </span>
                                                    </a>
                                                </span>
                                            }
                                    description=''
                                    leader={<span>實驗室<br/>主持人</span>} 
                                    leaderName='國立台灣大學法律學院 黃詩淳教授' 
                                    coleader={<span>計畫參與<br/>學生</span>} 
                                    coleaderName = {
                                                        <span>國立台灣大學法律學院 <br/>國立台灣大學法律學院 </span>
                                                    }                                       
                                            
                                            
                                />


                            </div>
                            <div className="content-row">
                                <CardItem 
                                    title = {
                                        <span>
                                            <a href="https://sites.google.com/view/cclab/home" target="_blank" rel="noopener noreferrer">  
                                                台大新聞所<br/>
                                                「計算傳播研究室」<br/>
                                                <span className="small-font">
                                                    Computational Communication Lab<br/> (Com.Comm. Lab) 
                                                </span>
                                            </a>
                                        </span>
                                    } 
                                    description=''
                                    leader={<span>實驗室<br/>主持人</span>} 
                                    leaderName='國立台灣大學新聞研究所 謝吉隆副教授' 
                                    coleader={<span>計畫參與<br/>學生</span>} 
                                    coleaderName = {
                                                        <span>國立台灣大學新聞研究所 <br/>國立台灣大學新聞研究所 </span>
                                                    }
                                />

                                <CardItem 
                                    title = {
                                        <span>
                                            <a href="https://web.ntnu.edu.tw/~hlshao/" target="_blank" rel="noopener noreferrer">  
                                            北醫醫療暨生物科技法律所<br/>
                                                「法律資料分析與計算中國研究室」<br/>
                                                <span className="small-font">
                                                    Laboratory of Computational China Studies (LCCS)
                                                </span>
                                            </a>
                                        </span>
                                    } 
                                    description=''
                                    leader={<span>實驗室<br/>主持人</span>} 
                                    leaderName={<span>臺北醫學大學醫療暨生物科技法律研究所<br/>邵軒磊副教授</span> }
                                    coleader={<span>計畫參與<br/>學生</span>} 
                                    coleaderName = {
                                                        <span>臺北醫學大學醫療暨生物科技法律研究所 <br/>臺北醫學大學醫療暨生物科技法律研究所 </span>
                                                    }
                                />

                            </div>
                        </div>
                    </div>
                </section>

                <section id='sponsors' className="section-2 beigebg">
                    <div className="horizontal-area mobile-switch">
                            <div className='text-container left'>
                                <div className='title-area left'>
                                    <h2>Sponsors</h2>
                                    <h3>贊助</h3>
                                </div>

                            </div>
                            <img src={ntu} loading="lazy" style={{ width: '200px', height: '200px' }} alt=" " className="featured-image"/>
                            <img src={nvidia} loading="lazy" style={{ width: '400px', height: '200px' }} alt=" " className="featured-image"/>
                    </div>                                                    
                </section>

                <section id='contact_info' className="section-2 greybg">
                <div className='horizontal-area'>
                        <div className='text-container lef'>
                            <div className='title-area left whitecolor'>
                                <h2>
                                    CONTACT
                                    <br/>
                                    INFO
                                </h2>
                                <h3>聯絡資訊</h3>
                            </div>
                        </div>
                        <div className='contact-info whitecolor'>
                            <ContactInfoContent contactOffice='LOPE＠台大語言所' phone='02-33664104 ext 307' email='shukaihsieh@ntu.edu.tw' contact='謝舒凱 副教授'/>
                            <ContactInfoContent contactOffice='LLNTU＠台大法學院' phone='02-33668964' email='schhuang@ntu.edu.tw' contact='黃詩淳 教授'/>
                            <ContactInfoContent contactOffice={<span>Com.Comm. Lab<br/>＠台大新聞所</span>} phone='02-33669867' email='jirlong@gmail.com' contact='謝吉隆 副教授'/>
                        </div>
                </div>
                </section>


            </div>

            <section className='footer'>
                <Footer/>
            </section>
        </div>    );

}

export default AboutUs