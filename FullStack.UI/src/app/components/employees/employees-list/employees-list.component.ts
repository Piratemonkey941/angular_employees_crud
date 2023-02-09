import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {       // Class that implements the OnInit interface

  employees: Employee[] = [];                                 // Property that stores the list of employees

  constructor(private employeesService: EmployeesService) { } // Constructor that injects/adds the EmployeesService dependency

  ngOnInit(): void {                                          // Method that is called when the component is initialized

    this.employeesService.getAllEmployees().subscribe({       // Calling the getAllEmployees method of the EmployeesService
      next: (employees) => {                                  // Callback that is executed when the HTTP request succeeds
        this.employees = employees                            // Updating the employees property with the response data
      },
      error: (response) => {                                  // Callback that is executed when the HTTP request fails
        console.log(response);                                // Logging the error response
      }
    })
  }

}
