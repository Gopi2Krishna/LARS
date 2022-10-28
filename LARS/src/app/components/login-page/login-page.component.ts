import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  template: `
    
    <div style="margin-top:10%">
    <div class="row">
      <div class="col-sm-6 display-5">
        <div class="m-4 d-inline-block">
          <p>To add lab or auditorium<br>
            To add faculty <br>
            To schedule
          </p>
          <button (click)="adminLogin()" class="btn btn-success">login as Admin</button>
      </div>
        </div>
        
      <div class="line"></div>

      <div class="col-sm-5 display-5 ">
        <div class="m-4 d-inline-block">
          <p>To reserve  lab<br>
            To reserve auditorium <br>
            To check availability
          </p>
          <button (click)="facultyLogin()" class="btn btn-success">login as Faculty</button>
        </div>
      </div>
    </div>
    </div>

  `,
  styles: ['.line{border-left: 3px solid green;height: 500px; width:0px}'
  ]
})
export class LoginPageComponent implements OnInit {
  // router: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  adminLogin() {
    this.router.navigate(["admin-login"])
  }
  facultyLogin(){
    this.router.navigate(["faculty-login"])
  }

}
