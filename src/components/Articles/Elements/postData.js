import React from 'react';
import styles from '../../Articles/articles.module.css'
import moment from 'moment'


const formatDate = (date) =>{
    return moment(date).format('DD-MM-YYYY');
}

const PostData = (props) => (
    <div className = {styles.articlePostData}>
        <div>
            Date:
            <span>{formatDate(props.data.date)}</span>
        </div>
        <div>
            Author:
            <span className = {styles.authorName}>{props.data.author}</span>
        </div>
       
    </div>
);

export default PostData;