import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public user: any;
  constructor(  private navController: NavController) {
    this.user = this.getUser();
  }

  public menuButtons: Array<Button> = [
    new Button('Perfil De Usuário', 'person-outline', '', '', () => { this.navController.navigateForward('/perfil-user')}),
    new Button('Gerenciar Usuários', 'people-outline', '', '', () => { this.navController.navigateForward('/geren')}),
    new Button('Registro De Acessos', 'newspaper-outline', '', '', () => { this.navController.navigateForward('/acess')}),
    new Button('Conexões', 'radio-outline', '', '', () => { this.navController.navigateForward('/conexoes')}),
    new Button('Configurações', 'cog', '', '', () => { this.navController.navigateForward('/configuracoes')}),
    new Button('Sair', 'log-out-outline', null, 'sair', () => { this.sair() }),
  ]

  getUser(){
    let user: any = localStorage.getItem('user');
    return JSON.parse(user);
  }

  ngOnInit() {
  }

  openHome(){
    this.navController.navigateForward('/home')
  }

  sair(){
    localStorage.clear()
    this.navController.navigateForward('/login')
  }
}

class Button {

  constructor(
    public description: String,
    public icon: String,
    public url: any,
    public classe: String,
    public evento: any,
   ) {}


}
