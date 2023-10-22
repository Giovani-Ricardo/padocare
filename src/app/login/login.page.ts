import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  id: string = '';
  password: string = '';

  constructor() { }

  ngOnInit() {
  }

  login(){
    console.log(`id: ${this.id} pass: ${this.password}`);
  }

}
