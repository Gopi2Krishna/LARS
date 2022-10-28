import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor(private fireauth : AngularFireAuth, private router : Router) { }

  login(uname : any, pass : string){
    this.fireauth.signInWithCredential(uname).then()
  }
}
