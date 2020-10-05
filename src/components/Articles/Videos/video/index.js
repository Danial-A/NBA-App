import React, { Component } from 'react';
import {firebaseDB, firebaseLooper, firebaseTeams} from '../../../../firebase'
import Header from './header'
import styles from '../videos.module.css'
import VideosRelated from '../../../Widgets/videosList/VideoRelated/videosRelated';

class VideoArticle extends Component {

    state = {
        article:[],
        team:[],
        teams : [],
        related: []
    }
    componentWillMount(){

        firebaseDB.ref(`videos/${this.props.match.params.id}`).once('value')
        .then((snapshot)=>{
            let article = snapshot.val();
            firebaseTeams.orderByChild('id').equalTo('article.team').once('value')
            .then((snapshot)=>{
                const team = firebaseLooper(snapshot);
                this.setState({
                    article,
                    team
                })
            })
        })
    }
    getRelated = () =>{
    
        firebaseTeams.once('value')
        .then((snapshot)=>{
            const teams = firebaseLooper(snapshot);


        }) 

    }
    render() {
        const article  = this.state.article;
        const team = this.state.team;
        return (
            <div>
                <Header teamData = {team[0]}/>
                <div className = {styles.videoWrapper}>
                    <h1>{article.title}</h1>
                    <iframe
                        title = "videoplayer"
                        width="100%"
                        height = "300px"
                        src = {`https://www.youtube.com/embed/${article.url}`}
                    />
                </div>
                <VideosRelated data = {this.state.related} teams ={this.state.teams}/>
            </div>
        );
    }
}

export default VideoArticle;