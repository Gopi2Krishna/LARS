import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faculty-login',
  template: `
   
<body style="background-color:rgb(48, 45, 45)">
<form class="text-center" action="//">
<div style="background-color: rgb(14, 94, 65);;text-align: center; padding:50px;" class="border border-white">
      <a routerLink="/login-page" class="previous round">&#8249;&#8249;</a>
      <h1 class="display-3 text-white ">Faculty</h1>
    </div>
  <div class="form-group row">
    <div class="col-sm-4"></div>
    <label  style="color:rgb(14, 94, 65);font-size:30px;"  class="col-4 col-form-label" for="id">Login ID</label><br>
  </div>
    <div class="row">
      <div class="col-sm-4"></div>
      <div class="col-sm-4">
         
        <input id="id" name="id" type="text" class="form-control" style="background-color:rgb(48, 45, 45)">
      </div>
    </div>
  <br>
  <div class="form-group row">
    <label  style="color:rgb(14, 94, 65);;font-size:30px;" for="password" class="col-12 col-form-label">Password</label> <br/>
  </div>
    
    <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
            <input  id="password" name="password" type="text" class="form-control" style="background-color:rgb(48, 45, 45)">
          </div>
    </div>
   <br>
  <div class="form-group row">
  </div>
<button name="submit" type="submit" class="btn btn-success text-center m-5 " >Submit</button>
   
  
</form>
</body>
  `,
  styles: ['a{text-decoration: none;padding: 8px 16px; float: left;}', 'a:hover {background-color: rgb(187, 247, 222);color: black;}','.previous {background-color: #f1f1f1;color: black;}','.next {background-color: #04AA6D;color: white;}','.round {border-radius: 50%;}']
})
export class FacultyLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
