import React, { Component } from 'react';
import NewsSlider from '../Widgets/NewsSlider/slider'
import NewsList from '../Widgets/NewsList/newslist'
class News extends Component {
    render() {
        return (
        <div>
            <NewsSlider
                type="featured"
                start = {0}
                end = {3}
                settings = {{
                    dots: false
                }}
           />
           <NewsList 
                type = "cardMain"
                loadMore = {true}
                start  = {3}
                amount = {10}/>
        </div>
        );
    }
}

export default News;