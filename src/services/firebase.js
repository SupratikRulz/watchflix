
import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
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
