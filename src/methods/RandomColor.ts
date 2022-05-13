export const RandomColor = () => {
    const MIN = 0
    const MAX = 255
    const rgb = []
    for (let i = 0; i < 3; i++) {
        const color = Math.random()
        rgb.push(Math.floor(color * (MAX - MIN)) + MIN)
    }
    return rgb
}
