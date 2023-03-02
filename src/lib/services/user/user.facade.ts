import type { UserCredential } from "firebase/auth";
import TokenLocalstorageService from "../token/token-localstorage.service";
import UserLocalstorageService from "./user-localstorage.service";
import type User from "./user.interface";

class UserFacade {
    async saveUserOnLocalStorage(userCredential: UserCredential) {
        const { user } = userCredential;

        const token = { accessToken: await user.getIdToken() };
        TokenLocalstorageService.save(token);

        const userAuthenticated = {
            uid: user.uid,
            email: user.email
        } as User
        UserLocalstorageService.save(userAuthenticated);

        return {
            token,
            userAuthenticated
        }
    }
}

export default new UserFacade();