export {}
describe('RandomColorTest', () => {
    it('generate randomcolor', () => {
        const color = require('./RandomColor')
        console.log(color)
        const spy = jest
            .spyOn(color, 'GenerateRandomNumber')
            .mockImplementation(() => 5)
        const generateRandomColor = color.RandomColor()
        console.log(generateRandomColor)
        expect(spy).toHaveBeenCalled()
        expect(generateRandomColor).toStrictEqual([
            [1275, 1275, 1275],
            [1275, 1275, 1275],
            [1275, 1275, 1275],
            [1275, 1275, 1275],
        ])

        spy.mockRestore()
    })
})
// 結局mockで実装した場合importから取ってきているのでだめ
// import { GenerateRandomNumber, RandomColor } from './RandomColor'
// mock version
// it('Random', () => {
//     console.log(GenerateRandomNumber())
//     const ColorResult: number[][] = RandomColor()
//     console.log(ColorResult)
// })
// jest.mock('./RandomColor', () => {
//     const originalModule = jest.requireActual('./RandomColor')
//     return {
//         ...originalModule,
//         このRandomColorの中のGenerateRandomColorはRandomColor module自体を呼び出しているので無理??
//         RandomColor: jest.fn().mockImplementation(() => 'fake'),
//         GenerateRandomNumber: jest.fn().mockImplementation(() => 0),
//     }
// })
