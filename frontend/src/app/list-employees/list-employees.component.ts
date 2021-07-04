import { Component, OnInit } from '@angular/core';
import { ApiService } from './../service/api.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  employees :any = [];

  constructor(private apiService: ApiService) { 
    this.readEmployees();
  }

  ngOnInit() {}

  readEmployees(){
    this.apiService.getEmployees().subscribe((data) => {
     this.employees = data;
    })    
  }

  // TODO(timhsieh): use a better type than 'any' type
  removeEmployee(employee: any, index: number) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteEmployee(employee._id).subscribe((data) => {
          this.employees.splice(index, 1);
        }
      )    
    }
  }

}
