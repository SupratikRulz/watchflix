
import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const firebaseConfig = {
  apiKey: process.env.GATSBY_apiKey,
  authDomain: process.env.GATSBY_authDomain,
  databaseURL: process.env.GATSBY_databaseURL,
  projectId: process.env.GATSBY_projectId,
  storageBucket: process.env.GATSBY_storageBucket,
  messagingSenderId: process.env.GATSBY_messagingSenderId,
  appId: process.env.GATSBY_appId,
  measurementId: process.env.GATSBY_measurementId,
}

console.log(firebaseConfig)
class Firebase {
  constructor() {
		if (typeof window !== 'undefined') {
			app.initializeApp(firebaseConfig)
			this.auth = app.auth()
		}
  }

  login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}

	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
  }
  
  isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}
}

let instance;

// Create a singleton for firebase
export default function getFirebase() {
  if (typeof window !== 'undefined') {
    if (instance) return instance;
    instance = new Firebase();
    return instance;
  }

  return null;
}
