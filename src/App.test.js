import React from 'react'
import { render, screen } from '@testing-library/react'
import ReportForm from './components/form/ReportForm'
import HoursReport from './components/HoursReport/HoursReport'
import userEvent from '@testing-library/user-event'

describe('Test Add Report',()=>{

  beforeEach(()=>{
    render(<ReportForm/>)
    let technicalId = screen.getByLabelText(/Technical ID/i)
    let serviceId = screen.getByLabelText(/Service ID/i)
    let startDate = screen.getByLabelText(/Start date time/i)
    let endDate = screen.getByLabelText(/End date time/i)

    userEvent.type(technicalId,'WTX-1')
    userEvent.type(serviceId,'S-01')
    userEvent.type(startDate,'2021-01-25T07:00')
    userEvent.type(endDate,'2021-01-25T20:00')
  })
  test('valid inputs',()=>{
    expect(technicalId).toHaveValue('WTX-1')
    expect(serviceId).toHaveValue('S-01')
    expect(startDate).not.toBeNull()
    expect(endDate).not.toBeNull()
  })
  test('invalid inputs',()=>{
    expect(technicalId).not.toHaveValue(1)
    expect(serviceId).not.toHaveValue(1)
    expect(startDate).not.toBeNull()
    expect(endDate).not.toBeNull()
  })
})


describe('Test Hours Report', () => {

  beforeEach(() => {
    render(<HoursReport />)
    let technicalId = screen.getByLabelText(/Technical ID/i)
    let weekNumber = screen.getByLabelText(/Week Number/i)
    userEvent.type(technicalId, 'WTX-1')
    userEvent.type(weekNumber, '4')
  })

  test('valid inputs', () => {
    expect(technicalId).toHaveValue('WTX-1')
    expect(weekNumber).toHaveValue(4)
  })

  test('invalid inputs', () => {
    expect(technicalId).not.toHaveValue(1)
    expect(weekNumber).not.toHaveValue('four')
  })

})


