export const GenerateRandomNumber = () => {
    return Math.random()
}

export const RandomColor = () => {
    const MIN = 0
    const MAX = 255
    const rgb = []
    // ランダムなrgbを表す配列をt個作る
    for (let t = 0; t < 4; t++) {
        const c = []
        for (let i = 0; i < 3; i++) {
            const color: number = GenerateRandomNumber()
            c.push(Math.floor(color * (MAX - MIN)) + MIN)
        }
        rgb.push(c)
    }
    return rgb
}
