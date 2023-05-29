export const getFromStorage = (key:string) => {
    if (typeof window !== "undefined") {
        if (window.localStorage.getItem(key) === null) {
            window.localStorage.setItem(key, "[]");
            return ("[]")
        }
        return window.localStorage.getItem(key);
    }
}

export const setIntoStorage = (key:string, data:string) => { 
    window.localStorage.setItem(key, data);
}