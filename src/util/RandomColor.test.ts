import { RandomColor } from './RandomColor'

test('test of test', () => {
    const ColorResult: number[][] = RandomColor()
    expect(ColorResult).not.toBeNull()
})
