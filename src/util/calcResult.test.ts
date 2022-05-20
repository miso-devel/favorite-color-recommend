import { CalcResult } from './CalcResult'
import { RandomColor } from './RandomColor'

test('calcResultTest', () => {
    const colorMock: number[][] = [
        [10, 10, 10],
        [20, 20, 20],
        [30, 30, 30],
        [40, 40, 40],
    ]
    expect(CalcResult(colorMock)).toStrictEqual([25, 25, 25])
})
