export namespace Random {

    const _letters = [
        "a", "b", "c", "d", 
        "e", "f", "g", "h", 
        "i", "j", "k", "l", 
        "m", "n", "o", "p", 
        "q", "r", "s", "t",
        "u", "v", "w", "x", 
        "y","z",
    ];

    export const letter = () => {
        return _letters[Math.floor(Math.random() * 25)];
    }

    export const integer = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

}