import type KeysLocalStorage from "./keys.enum"

const LocalStorageService = () => {

    const getByKey = (key: KeysLocalStorage) => localStorage.getItem(key);

    const setByKey = (key: KeysLocalStorage, value: string) => localStorage.setItem(key, value);

    const removeByKey = (key: KeysLocalStorage) => localStorage.removeItem(key);

    const removeAll = () => localStorage.clear();

    return {
        setByKey,
        getByKey,
        removeByKey,
        removeAll,
    }
}

export default LocalStorageService()