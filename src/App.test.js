import axios from 'axios';
import ReportService from "./service/ReportService";

 
jest.mock('axios')

test('returned observable with request post', () => {
  const add = {
    technicalId: 'wtx-1',
    serviceId: 's-1',
    startDate: '2021-01-20T07:00',
    endDate: '2021-01-20T07:10',
    weekNumber:4
}
  axios.post.mockResolvedValue(add);
  return  axios.post(add).then(data => expect(data).toEqual(add));
}); 

test('returned calculate hours worked find by technical and number week from api via ge', () => {
  const hourReport = {
    normalHours: 26.0,
    nightHours: 22.0,
    sundayHours: 0.0,
    normalExtraHours: 0.0,
    nightlyOvertime: 11.0,
    sundayExtraHours: 13.0
  }
const technical='wtx-1'
const weekNumber=4

  axios.get.mockResolvedValue(hourReport);
  return  axios.get(technical,weekNumber).then(data => expect(data).toEqual(hourReport));
}); 