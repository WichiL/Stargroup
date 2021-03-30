import React, { Fragment, useEffect, useState } from 'react';
import Service from './../API/request'
import msg from './../API/msgService'
import { Link } from 'react-router-dom';

const Employee = (emp) => {
    
    const [employee, setEmployee] = useState([])

    useEffect(() => {
        getEmployees();
    },[])

    const getEmployees = () => {
        Service.getEmployees()
        .then(response => {
            setEmployee(response.data)
            console.log(response.data)
        })
        .catch(e => {
            console.log(e);
            msg.errorRequest();
        })
    }

    return (  
        <Fragment>
            <h2>Empleados</h2>
            <a type="button" class="mt-5 float-end btn btn-success">Agregar</a>

            <table class="shadow p-3 mb-5 bg-body rounded mt-5 table table-hover table-responsive">
                <thead>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Email</th>
                    <th>Area</th>
                    <th>Acciones</th>
                </thead>
                <tbody>
                    {
                        emp.length > 0 ? (
                            emp.map(employe => (
                                <tr key={employe.index}>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>
                                    <button type="button" class="btn btn-outline-danger">Eliminar</button>
                                    <button type="button" class="btn btn-outline-info">Editar</button>
                                    <Link
                                        to={"/tutorials/" + employee.id}
                                        className="badge badge-warning"
                                        >
                                        Edit
                                    </Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                                <b><td>Aún no hay empleados registrados</td></b>
                        )
                    }                    
                </tbody>
            </table>
        </Fragment>
        
    );
}
 
export default Employee;