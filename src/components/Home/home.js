import React from 'react';
import NewsSlider from '../Widgets/NewsSlider/slider'
import NewsList from '../Widgets/NewsList/newslist'


const Home = () => {
    return (
        <div>
           <NewsSlider
                type="featured"
                start = {6}
                end = {9}
                settings = {{
                    dots: false
                }}
           />
         <NewsList
                type= "card"
                loadMore = {true}
                start = {3}
                amount = {3}
                />
        </div>
    );
};

export default Home;