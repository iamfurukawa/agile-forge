export default interface LocalStorage<Type> {
    save: (value: Type) => void

    get: () => Type | null

    remove: () => void
}