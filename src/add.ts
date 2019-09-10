const add = (...num: number[]): number => {
    return num.reduce((prev, cur) => {
        return prev + cur;
    }, 0)
}

export default add;