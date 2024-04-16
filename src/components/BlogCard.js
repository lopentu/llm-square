import './BlogCard.css';
import { NavLink } from 'react-router-dom';
import '../App.css';
import React from 'react';


const BlogCard = (props) =>{

    return(

        <div className="blogcard">
            <NavLink to={"/posts/"}>
                <div className='imgContainer'>
                    <img src={props.coverPhoto} />
                </div>
            </NavLink>
            <div className='text'>
                <h2>{props.title}</h2>
                <div className='details'>
                    <div className='author'>
                        <img src={props.avatar}/>
                        <h3>{props.author}</h3>
                    </div>
                    <div className='date'>
                        <h3>{props.datePublish}</h3>
                    </div>

                </div>

            </div>
        </div>


    );
}

export default BlogCard;