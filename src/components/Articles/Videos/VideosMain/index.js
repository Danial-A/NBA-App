import React from 'react';
import VideosList from '../../../Widgets/videosList/videoslist'

const VideosMain = () => {
    return (
        <div>
            <VideosList 
                type = "card"
                title = {false}
                loadMore = {true}
                start = {0}
                amount = {10}/>
        </div>
    );
};

export default VideosMain;