import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {                                                               // Class that implements the EmployeesService

  baseApiUrl: string = environment.baseApiUrl                                                 // Property that stores the base API URL

  constructor(private http: HttpClient) { }                                                   // Constructor that injects the HttpClient dependency

  getAllEmployees(): Observable<Employee[]> {                                                 // Method that retrieves all employees by calling the API
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/employees');                     // Calling the API to retrieve all employees

  }

  addEmployee(addEmployeeRequest: Employee): Observable<Employee> {                           // Method that adds an employee by calling the API
    addEmployeeRequest.id =  '00000000-0000-0000-0000-000000000000';                          // Setting the id of the employee to be added
    return this.http.post<Employee>(this.baseApiUrl + '/api/employees', addEmployeeRequest);  // Calling the API to add an employee
  }

  getEmployee(id: string): Observable<Employee> {                                             // Method that retrieves an employee by calling the API
     return this.http.get<Employee>(this.baseApiUrl + '/api/employees/' + id);                // Calling the API to retrieve an employee

  }

  updateEmployee(id: string, updateEmployeeRequest: Employee): Observable<Employee> {                 // Method that updates an employee by calling the API
     return this.http.put<Employee>(this.baseApiUrl + '/api/employees/' + id, updateEmployeeRequest); // Calling the API to update an employee

  }

  deleteEmployee(id: string): Observable<Employee> {                                           // Method that deletes an employee by calling the API
     return this.http.delete<Employee>(this.baseApiUrl + '/api/employees/' + id);              // Calling the API to delete an employee

  }

}
