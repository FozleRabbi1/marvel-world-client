import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../../../firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(false);
        return createUserWithEmailAndPassword(auth, email, password)
    }


    const updateUserData = (name, photoUrl, email) => {
        setLoading(true)

        const updatedUser = { ...user }
        updatedUser.displayName = name;
        updatedUser.photoURL = photoUrl;
        updatedUser.email = email;

        setUser(updatedUser);
        const auth = getAuth();
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoUrl
        })
    }


    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)


            setLoading(false)


        });
        return () => {
            return unSubscribe();
        }
    }, [])

    const logOut = () => {
        setUser(null)
        return signOut(auth)
    }

    const userInfo = {
        user: user,
        createUser,
        updateUserData,
        loginUser,
        logOut,
        googleLogin,
        loading: loading
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;