import React, { useState } from 'react'
import './HoursReport.css'
import { useForm } from 'react-hook-form'
import ReportService from '../../service/ReportService'
import ShowData from './ShowData'
const HoursReport = () => {

    const [report, setReport] = useState()
    const { register, errors, handleSubmit } = useForm()

    const onSubmit = (data, e) => {
        ReportService.getHoursReport(data).then(response => {
            setReport(response.data)
        }).catch(error => { console.log(error) })
        e.target.reset()
    }

    return (
        
        <div className="cnt">
            <h1>HOUR REPORT</h1>
            <div className="find">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Technical ID</label>
                <input type="text" name="technicalId" placeholder="insert technical id" ref={register({
                    required: {
                        value: true,
                        message: 'valor requerido'
                    }
                })} />
                <label>Week Number</label>
                <input type="number" name="weekNumber"  placeholder="insert week number" min="1" max="53" ref={register({
                    required: {
                        value: true,
                        message: 'valor requerido',
                    },
                    min: {
                        value: 1,
                        message: 'the week number cannot be less than 1'
                    },
                    max: {
                        value: 53,
                        message: 'the week number cannot exceed 53'
                    }
                })} />
                <button type="submit" >search</button>
            </form>
            </div>
            
            <span className="text-danger ">
                {errors?.technicalId?.message}
            </span>
            <span className="text-danger">
                {errors?.weekNumber?.message}
            </span>
            <div>
                {report && <ShowData technicalId={report} />}
            </div>
            
        </div>
    )
}
export default HoursReport;