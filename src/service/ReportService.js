import axios from 'axios'
import Swal from 'sweetalert2'
import http from '../http-common'
class ReportService {

    

    addReport(data) {
        http.post('add', data)
            .then(response => {

                const { data: processInformation } = response
                const { success: isSuccessful, message } = processInformation

                if (isSuccessful) {
                    return Swal.fire({
                        icon: 'success',
                        title: 'success!',
                        text: message,
                    });
                }

                return Swal.fire({
                    icon: 'error',
                    title: 'error!',
                    text: message,
                });

            })
            .catch(error => { console.log(error) })
    }

    getHoursReport(params){
        return axios.get('http:3.137.195.184/report/report',{params: {
            'technicalId': params.technicalId,
            'weekNumber': params.weekNumber
           }});
    }
}
export default new ReportService()