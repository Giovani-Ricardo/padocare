import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-acess',
  templateUrl: './acess.page.html',
  styleUrls: ['./acess.page.scss'],
})
export class AcessPage implements OnInit {
  public acessos: any;
  public user: any;

  constructor(private navController: NavController, private api: ApiService) {
    this.user = this.getUser();
  }


  ngOnInit() {
  }

  ngOnLoad(){
  }

  ionViewWillEnter() {
    this.getAcessos()
  }

  getUser(){
    let user: any = localStorage.getItem('user');
    console.log('Obtendo usuário...')
    console.log(user)
    return JSON.parse(user);
  }

  openHome(){
    this.navController.navigateForward('/home')
  }

  getAcessos(){
    this.api.obterRegistrosDeAcesso().subscribe( (res: any) => {
      this.acessos = res
    })
  }

}
