import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-page',
  template: `
    <div id="intro" class="bg-image shadow-2-strong">
      <div class="mask" style="background-color: rgba(0, 0, 0, 0.8);">
        <div class="container d-flex align-items-center justify-content-center text-center h-100">
          <button (click)="next()" class="btn btn-success">Continue</button>
        </div>
      </div>
    </div>
    
  `,
  styles: ['#intro{background-Image:url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170");}' ]
})
export class FrontPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  next(){
    this.router.navigate(["login-page"])
  }
}
