import * as Utils from '../src/utils'

const {
  prettyUnit,
  padZoneStr,
  padStart
} = Utils

it('PrettyUnit', () => {
  expect(prettyUnit('Days')).toBe('day')
  expect(prettyUnit('days')).toBe('day')
  expect(prettyUnit('day')).toBe('day')
  expect(prettyUnit()).toBe(undefined)
})

it('PadZoneStr', () => {
  expect(padZoneStr('+0')).toBe('+0000')
  expect(padZoneStr('+1')).toBe('-0100')
  expect(padZoneStr('-1')).toBe('+0100')
  expect(padZoneStr('-10')).toBe('+1000')
  expect(padZoneStr('+10')).toBe('-1000')
})

it('PadStart', () => {
  expect(padStart(1, 2, '0')).toBe('01')
  expect(padStart(0, 2, '0')).toBe('00')
})
