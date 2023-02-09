import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {    // Class that implements the OnInit interface

  employeeDetails: Employee = {                           // Property that stores the employee data to be edited
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  }

  // Constructor that injects the ActivatedRoute, EmployeesService, and Router dependencies
  constructor(private route: ActivatedRoute, private employeeService: EmployeesService, private router: Router) { }

  ngOnInit(): void {                                    // Method that is called when the component is initialized
    this.route.paramMap.subscribe({                     // Subscribing to the paramMap of the ActivatedRoute
      next: (params) => {                               // Callback that is executed when the paramMap is available
        const id = params.get('id');                    // Extracting the id from the params

        if (id){                                        // Calling the getEmployee method of the EmployeesService to retrieve the employee data
            this.employeeService.getEmployee(id)
              .subscribe({
                next:(response) => {                    // Callback that is executed when the HTTP request succeeds
                    this.employeeDetails = response;    // Updating the employeeDetails property with the response data
                }
              })
        }
      }
    })
  }


  updateEmployee(){                               // Method that updates an employee by calling the updateEmployee method of the EmployeesService
    this.employeeService.updateEmployee(this.employeeDetails.id, this.employeeDetails)    // Calling the updateEmployee method of the EmployeesService
    .subscribe({                                  // Callback that is executed when the HTTP request succeeds
      next:(response) => {
          this.router.navigate(['employees']);    // Redirecting the user to the employees page
      }
    })
  }

  deleteEmployee(id: string){                     // Method that deletes an employee by calling the deleteEmployee method of the EmployeesService
    this.employeeService.deleteEmployee(id)       // Calling the deleteEmployee method of the EmployeesService
    .subscribe({
      next: (response) => {                       // Callback that is executed when the HTTP request succeeds
        this.router.navigate(['employees']);      // Redirecting the user to the employees page
      }
    })
  }


}
