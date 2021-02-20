import React from 'react'
import { render, screen } from '@testing-library/react'
import ReportForm from './components/form/ReportForm'
import HoursReport from './components/HoursReport/HoursReport'

describe('Test Report Form', () => {

  beforeEach(() => {
    render(<ReportForm />)
    document.getElementById('technicalId').value = 'WTX-1'
    document.getElementById('serviceId').value = 'S-01'
    document.getElementById('startDate').value = '2021-01-25T07:00'
    document.getElementById('endDate').value = '2021-01-25T20:00'
    expect(screen.getByText('Technical ID')).toBeInTheDocument()
    expect(screen.getByText('Service ID')).toBeInTheDocument()
    expect(screen.getByText('Start date time')).toBeInTheDocument()
    expect(screen.getByText('End date time')).toBeInTheDocument()
  })
  test('valid inputs', () => {
    expect(screen.getByDisplayValue = 'WTX-1').toEqual('WTX-1')
    expect(screen.getByDisplayValue = 'S-01').toEqual('S-01')
    expect(screen.getByDisplayValue = '2021-01-25T07:00').toEqual('2021-01-25T07:00')
    expect(screen.getByDisplayValue = '2021-01-25T20:00').toEqual('2021-01-25T20:00')

  })
  test('invalid inputs', () => {
    expect(screen.getByDisplayValue = 'WTX-1').not.toBeNull()
    expect(screen.getByDisplayValue = 'S-01').not.toBeNull()
    expect(screen.getByDisplayValue = '2021-01-25T07:00').not.toBeNull()
    expect(screen.getByDisplayValue = '2021-01-25T20:00').not.toBeNull()
  })
})

describe('Test Hours Report', () => {
  beforeEach(() => {
    render(<HoursReport />)
    document.getElementById('technicalId').value = 'WTX-1'
    document.getElementById('weekNumber').value = '4'
    expect(screen.getByText('Technical ID')).toBeInTheDocument()
    expect(screen.getByText('Week Number')).toBeInTheDocument()
  })

  test('valid inputs', () => {
    expect(screen.getByDisplayValue = 'WTX-1').toEqual('WTX-1')
    expect(screen.getByDisplayValue = '4').toEqual('4')
  })

  test('invalid inputs', () => {
    expect(screen.getByDisplayValue = 'WTX-1').not.toEqual('WTX-2')
    expect(screen.getByDisplayValue = '4').not.toEqual('5')
  })
})