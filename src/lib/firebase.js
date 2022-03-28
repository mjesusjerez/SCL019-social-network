import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';
import { onSnapshot, addDoc, collection, getFirestore } from "https://www.gstatic.com/firebasejs/8.10.0/firebase-firestore.js"


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


const auth = getAuth()
const provider = new GoogleAuthProvider()

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
const gFs = getFirestore(app)

export const guardarPost = (post) =>{
 const docfirestore = addDoc(collection(gFs, "publicaciones"),{
   post:post,
   email: auth.currentUser.email,
   UserId: auth.currentUser.UID,
   like:[]
 })
return docfirestore
}

