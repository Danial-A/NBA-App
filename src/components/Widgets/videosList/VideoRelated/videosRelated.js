import React from 'react';
import styles from '../videosList.module.css'
import VideosTemplate from '../videosListTemplate'


const VideosRelated = (props) => (
    <div className = {styles.relatedWrapper}>
        <VideosTemplate data = {props.data} teams = {props.teams}/>
    </div>
)

export default VideosRelated;