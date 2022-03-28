import { initializeApp} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js"
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
import { onSnapshot, addDoc, collection, getFirestore } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js"


const firebaseConfig = {
  apiKey: "AIzaSyCLIzYilU7ayc3UC25Np9Dl5C7aSYFqmWw",
  authDomain: "saficas-rs.firebaseapp.com",
  projectId: "saficas-rs",
  storageBucket: "saficas-rs.appspot.com",
  messagingSenderId: "82522011082",
  appId: "1:82522011082:web:2fc656e5c9dc74d5d70b33",
  measurementId: "G-BQTQ93QXWM"
}  

export const logingoogle = () =>{
    const provider = new GoogleAuthProvider()
    const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log(app)

const auth = getAuth(app)
const gFs = getFirestore()


export const passregister = () => {

  let email = document.getElementById('email').value 
  let password = document.getElementById('password').value

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });


}

export const passlogin = () => {

  let emaillogin = document.getElementById("emaillogin").value
  let passwordlogin = document.getElementById("passwordlogin").value

signInWithEmailAndPassword(auth, emaillogin, passwordlogin)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

}
 

export const guardarPost = (post) =>{
 const docfirestore = addDoc(collection(gFs, "publicaciones"),{
  descripcion: post,
   email: auth.currentUser.email,
   UserId: auth.currentUser.UID,
   like:[]
 })
return docfirestore
} 

export const likePost = async (id, userId) => {

  const postRef = doc(db, "publicaciones", id);
  const docLike = await getDoc(postRef);
  const dataLike = docLike.data();
  console.log(dataLike)
  const likesCount = dataLike.likeCounter;

  if ((dataLike.like).includes(userId)) {
    await updateDoc(postRef, {
      like: arrayRemove(userId),
      likeCounter: likesCount - 1,
    });
  } else {
    await updateDoc(postRef, {
      like: arrayUnion(userId),
      likeCounter: likesCount + 1,
    });
  }
};



  export const mostrarTask = () => getDocs(collection(gFs, 'publicaciones'));

  export const deletePost = (id) => deleteDoc(doc(gFs, "publicaciones", id));

  export const editPost = (id) => getDoc(doc(gFs, "publicaciones", id));

  export const updatePost = (id, newFields) => updateDoc(doc(gFs, "publicaciones", id), newFields);