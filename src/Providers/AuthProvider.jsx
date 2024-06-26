import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    // create user .............
    const createUser = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);

    }
    // sign in user
    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    //set observer when state changes
    useState(() => {
       const unSubscribe = onAuthStateChanged(auth, currentUser => {

            console.log('user in the current state', currentUser);
            setUser(currentUser);

        });
        return () =>{
            unSubscribe();
        }
    }, [])
// sign out user

const signOutUser =() =>{
    return signOut(auth);
   
}


    const authInfo = {
        user,
        createUser,
        signInUser,
        signOutUser,
      
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;