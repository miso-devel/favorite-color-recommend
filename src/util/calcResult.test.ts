import { CalcResult } from './CalcResult'

describe('calcResult', () => {
    it('各indexの要素を平均した値が返る', () => {
        const color: number[][] = [
            [10, 10, 10],
            [20, 20, 20],
            [30, 30, 30],
            [40, 40, 40],
        ]
        expect(CalcResult(color)).toStrictEqual([25, 25, 25])
    })
})
