import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

const routes: Routes = [
  { path: '', redirectTo: "/list-employees", pathMatch: 'full' },
  { path: 'list-employees', component: ListEmployeesComponent },
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: 'edit-employee/:id', component: EditEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
