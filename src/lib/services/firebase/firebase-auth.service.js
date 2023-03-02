// eslint-disable-next-line
import firebase from 'firebase/compat/app';
import FirebaseService from './firebase.service';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import toastr from 'toastr';

import UserFacade from '../user/user.facade';

const FirebaseAuthService = () => {
    const auth = getAuth(FirebaseService.app());

    const register = async (email, password) => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            return UserFacade.saveUserOnLocalStorage(user);
        } catch (error) {
            toastr.error(`Failed to register`);
            console.error(`Failed to register: ${error.errorCode} - ${error.errorMessage}`);
        }
        return null;
    }

    const signIn = async (email, password) => {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            return UserFacade.saveUserOnLocalStorage(user);
        } catch (error) {
            toastr.error(`Failed to authenticate`);
            console.error(`Failed to authenticate: ${error.errorCode} - ${error.errorMessage}`);
        }
        return null;
    }

    return {
        register,
        signIn,
    }
}

export default FirebaseAuthService();