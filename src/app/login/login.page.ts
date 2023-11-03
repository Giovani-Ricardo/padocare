import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  id: string = '';
  password: string = '';

  constructor(private navController: NavController) { }

  ngOnInit() {
  }

  login(){
    console.log(`id: ${this.id} pass: ${this.password}`);
    this.navController.navigateForward('/home')
  }

}
