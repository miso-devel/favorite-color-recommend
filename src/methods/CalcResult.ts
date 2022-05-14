export const CalcResult = (colors: number[][]) => {
    let r = 0
    let g = 0
    let b = 0
    colors.map((c: number[]) => {
        r += c[0]
        g += c[1]
        b += c[2]
    })
    const res = [Math.round(r / 5), Math.round(g / 5), Math.round(b / 5)]
    return res
}
