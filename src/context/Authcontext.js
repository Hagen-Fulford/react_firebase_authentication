import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";


const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
});

const UserContext = createContext()

export const AuthContextProvider({children}) => {
    return (
        <UserContext.Provider value ={}>
            {children}
        </UserContext.Provider>
    )

export const UserAuth = () => {
    return UserContext {UserContext}
}

}