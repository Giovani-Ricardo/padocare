import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-conexoes',
  templateUrl: './conexoes.page.html',
  styleUrls: ['./conexoes.page.scss'],
})
export class ConexoesPage implements OnInit {
  redesWifi: string[] = [];
  public user: any;

  constructor(private navController: NavController) {
    this.user = this.getUser();
  }

  getUser(){
    let user: any = localStorage.getItem('user');
    return JSON.parse(user);
  }

  ngOnInit(): void {
    this.buscarRedesWifi();
  }

  buscarRedesWifi(): void {

  }

  openMenu(){
    this.navController.navigateForward('/menu')
  }

}
