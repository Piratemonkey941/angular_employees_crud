import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';
import { AddEmployeeComponent } from './components/employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';

const routes: Routes = [                  // Constant that defines the routes for the application
  {                                       // Route for the default path
    path: '',
    component: EmployeesListComponent
  },
  {                                       // Route for the employees path
    path: 'employees',
    component: EmployeesListComponent
  },
  {                                       // Route for the add employees path
    path: 'employees/add',
    component: AddEmployeeComponent
  },
  {                                       // Route for the edit employees path
    path: 'employees/edit/:id',
    component: EditEmployeeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
