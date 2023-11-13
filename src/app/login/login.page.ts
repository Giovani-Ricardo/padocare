import { ApiService } from '../services/api.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = '';
  password: string = '';
  message: string = '';
  isToastOpen = false;

  constructor(private navController: NavController, private apiService: ApiService) { }

  ngOnInit() {
  }

  login(){
    this.apiService.login(this.email, this.password).subscribe( (res: any) => {
      this.message = 'Login realizado com sucesso!';
      this.setOpenToast(true);
      setTimeout(() => {this.navController.navigateForward('/home')}, 1000)
      let user = res['user']
      user['token'] = res['token']
      localStorage.setItem('user', JSON.stringify(user))
    }, error => {
      console.log(error)
      this.message = error.error.error;
      this.setOpenToast(true);
    })
  }

  setOpenToast(val: boolean){
    this.isToastOpen = val
  }

}
