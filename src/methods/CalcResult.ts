export const CalcResult = (colors: number[][]) => {
    let r = 0
    let g = 0
    let b = 0
    const l = colors.length
    colors.map((c: number[]) => {
        r += c[0]
        g += c[1]
        b += c[2]
    })
    const res = [Math.round(r / l), Math.round(g / l), Math.round(b / l)]
    return res
}
