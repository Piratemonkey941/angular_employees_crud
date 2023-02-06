import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees: Employee[] = [
    {
      id: "7669007839071715",
      name: "John Doe",
      email: "johndoe@example.com",
      phone: 1234567890,
      salary: 50000,
      department: "Marketing"
    },
    {
      id: "8058703828981619",
      name: "Jane Doe",
      email: "janedoe@example.com",
      phone: 1234567891,
      salary: 55000,
      department: "Human Resources"
    },
    {
      id: "8632446570791218",
      name: "Bob Smith",
      email: "bobsmith@example.com",
      phone: 1234567892,
      salary: 60000,
      department: "IT"
    },
    {
      id: "1874193518401712",
      name: "Alice Johnson",
      email: "alicejohnson@example.com",
      phone: 1234567893,
      salary: 65000,
      department: "Sales"
    },
    {
      id:"3906128897916211",
      name: "Charlie Brown",
      email: "charliebrown@example.com",
      phone: 1234567894,
      salary: 70000,
      department: "Finance"
    }
  ];

  constructor() { }

  ngOnInit(): void {

    this.employees.push()
  }

}
