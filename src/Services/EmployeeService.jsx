import axios from "axios"

export default class EmployeeService{
    getEmployees()
    {
        return axios.get("http://localhost:8080/api/employee/getall")
    }

    getEmployeeById(id)
    {
        return axios.get("http://localhost:8080/api/employee/getById?id="+id)
    }

    updateEmployee(values)
    {
        return axios.put("http://localhost:8080/api/employee/update",values)
    }
}