import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {   // Class that implements the OnInit interface to use lifecycle hooks

  public addEmployeeRequest: Employee = {               // Object to store data for adding a new employee
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  }

  constructor(private employeeService: EmployeesService, private router: Router) { }  // Injecting the EmployeesService and Router services into the component

  ngOnInit(): void {
  }

  addEmployee() {                                               // Method to add a new employee

    this.employeeService.addEmployee(this.addEmployeeRequest)   // Calling the addEmployee method from the EmployeesService
      .subscribe({                                              // Subscribing to the addEmployee method's observable
        next: (employee) => {                                   // Callback function that is called when the observable nexts (emits a value)
          this.router.navigate(['employees']);                  // Redirecting the user to the 'employees' route
        }
      });

  }

}
