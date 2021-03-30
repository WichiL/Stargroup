import React, { Fragment } from 'react';
import Service from './../API/request'

const addEmployee = () => {

    const employeeInitial = {
        id: null,
        name: "",
        last_name: "",
        age: "",
        email: "",
        id_area: null
    }
    
    const [employee, setEmployee] = useState(employeeInitial)


    const handleSubmit = () => {
        var dataEmp = {
            name: employee.name,
            last_name: employee.last_name,
            age: employee.age,
            email: employee.email,
            id_area: employee.id_area
        }
        
        Service.newEmployee(data)
        .then(response => {
        })
    }

    const handleChange = event => {

    }


    return (  
       <Fragment>

       </Fragment> 
    );
}
 
export default addEmployee;