import React from 'react';
import NewsSlider from '../Widgets/NewsSlider/slider'
import NewsList from '../Widgets/NewsList/newslist'
import VideosList from '../Widgets/videosList/videoslist'


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
      
        <VideosList type = "card"
                title= {true}
                loadMore = {true}
                start = {0}
                amount = {3}
        />
        </div> 
        
    );
};

export default Home;