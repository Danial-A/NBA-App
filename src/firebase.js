import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyAEypIW-Vk-eTNkxthURx86TQ0ACGoqcZI",
    authDomain: "nba-app-80b16.firebaseapp.com",
    databaseURL: "https://nba-app-80b16.firebaseio.com",
    projectId: "nba-app-80b16",
    storageBucket: "nba-app-80b16.appspot.com",
    messagingSenderId: "1033370098880",
    appId: "1:1033370098880:web:de28a2ba2217f301666125",
    measurementId: "G-R03YY4QY7B"
  };
  // Initialize Firebase
firebase.initializeApp(config);

const firebaseDB = firebase.database();

const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams'); 
const firebaseVideos = firebaseDB.ref('videos'); 


const firebaseLooper = (snapshot) =>{
    const data = [];
    snapshot.forEach((childSnapshot)=>{
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key,
        
        })
    })
    return data;
}

export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseVideos,
    firebaseTeams,
    firebaseLooper
}