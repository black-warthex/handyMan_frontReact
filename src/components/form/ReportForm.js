import React from 'react'
import './ReportForm.css'
import moment from 'moment';
import ReportService from '../../service/ReportService'

export class ReportForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            technicalId: '',
            serviceId: '',
            startDate: '',
            endDate: '',
            weekNumber:0
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault()
     
         this.state.weekNumber = moment(new Date(this.state.startDate)).isoWeeks()
         ReportService.addReport(this.state)
    }

    render() {
        const { technicalId, serviceId, startDate, endDate } = this.state
        return (
            <div className="container">
                <h1>ADD REPORT</h1>
                <div className="inputs">
                    <form onSubmit={this.handleSubmit} >
                        <label htmlFor="technicalId">Technical ID</label>
                        <input type="text" name="technicalId" id="technicalId" onChange={this.handleChange} value={this.technicalId} required />
                        <br />
                        <label htmlFor="serviceId">Service ID</label>
                        <input type="text" name="serviceId" id="serviceId" onChange={this.handleChange} value={this.serviceId} required />
                        <br />
                        <label htmlFor="startDate">Start date time</label>
                        <input type="datetime-local" id="startDate" min="2021-01-01T00:00" name="startDate" onChange={this.handleChange} value={this.startDate} required />
                        <br />
                        <label htmlFor="endDate">End date time</label>
                        <input type="datetime-local" id="endDate" min="2021-01-01T00:00" name="endDate" onChange={this.handleChange} value={this.endDate} required />
    

                        <button type="submit" id="btn">add</button>

                    </form>
                </div>
            </div>
        )
    }
}
export default ReportForm