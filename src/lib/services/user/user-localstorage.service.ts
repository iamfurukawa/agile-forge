import KeysLocalStorage from "../local-storage/keys.enum"
import LocalStorageService from "../local-storage/LocalStorage.service"
import type LocalStorage from "../local-storage/LocalStorage.interface";
import type User from "./user.interface";

class UserLocalStorage implements LocalStorage<User> {

    save = (value: User) => LocalStorageService.setByKey(KeysLocalStorage.USER, JSON.stringify(value));

    get = (): User | null => {
        let user = LocalStorageService.getByKey(KeysLocalStorage.USER);
        if (user)
            return JSON.parse(user) as User;
        return null
    }

    remove = () => LocalStorageService.removeByKey(KeysLocalStorage.USER);
}

export default new UserLocalStorage();