import React, { Component } from 'react';
import NewsSlider from '../Widgets/NewsSlider/slider'
class News extends Component {
    render() {
        return (
            <NewsSlider
                type="featured"
                start = {1}
                end = {9}
                settings = {{
                    dots: false
                }}
           />
        );
    }
}

export default News;