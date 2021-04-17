const config = {
  apiKey: "AIzaSyDtav5RiZ3QCQo8c7aY4L17t7N4nxiWUJ8",
  authDomain: "webrtc-demo-193fe.firebaseapp.com",
  projectId: "webrtc-demo-193fe",
  storageBucket: "webrtc-demo-193fe.appspot.com",
  messagingSenderId: "215149597593",
  appId: "1:215149597593:web:7c65f18ff5c7502a5ef908"
};

firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = {
timestampsInSnapshots: true,
};
firestore.settings(settings);

export default firebase;

export {
firestore,
};