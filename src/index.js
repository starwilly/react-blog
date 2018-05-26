import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import { firestore as db } from './firebaseInit';

ReactDOM.render(React.createElement(App), document.getElementById('root'));
registerServiceWorker();

// db
//   .collection('posts')
//   .get()
//   .then(querySnapshot => {
//     querySnapshot.forEach(doc => {
//       console.log('doc', doc.data());
//     });
//   });
