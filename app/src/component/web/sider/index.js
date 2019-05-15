import React, { Component } from 'react';
import './index.scss'
import BloggerInfor from './blogger_infor'
import NewArticles from './new_articles'
import Tags from './tags'
class Sider extends Component {

    render() {
        return (
            <div className='sider-container'>
                <div className='sider-roll'>
                    <BloggerInfor />
                    <NewArticles />
                    <Tags />
                </div>
            </div>
        )
    }
}

export default Sider