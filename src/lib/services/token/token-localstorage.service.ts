import KeysLocalStorage from "../local-storage/keys.enum"
import LocalStorageService from "../local-storage/LocalStorage.service"
import type LocalStorage from "../local-storage/LocalStorage.interface";
import type Token from "./token.interface";

class TokenLocalStorage implements LocalStorage<Token> {

    save = (value: Token) => LocalStorageService.setByKey(KeysLocalStorage.TOKEN, JSON.stringify(value));

    get = (): Token | null => {
        let token = LocalStorageService.getByKey(KeysLocalStorage.TOKEN);
        if (token)
            return JSON.parse(token) as Token;
        return null
    }

    remove = () => LocalStorageService.removeByKey(KeysLocalStorage.TOKEN);
}

export default new TokenLocalStorage();