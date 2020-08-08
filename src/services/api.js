import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyB14bOfq3F5QJpcpbt9g9vUIHnBbMif1PM',
    authDomain: 'painel-de-livros.firebaseapp.com',
    databaseURL: 'https://painel-de-livros.firebaseio.com',
    projectId: 'painel-de-livros',
    storageBucket: 'painel-de-livros.appspot.com',
    messagingSenderId: '466132567675',
    appId: '1:466132567675:web:215b4f0a877a0e950dc4de',
    measurementId: 'G-E4PKTB3VM4'
}

firebase.initializeApp(firebaseConfig)

export default firebase.firestore()
