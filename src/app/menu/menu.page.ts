import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  constructor(  private navController: NavController) { }

  public menuButtons: Array<Button> = [
    new Button('Perfil De Usuário', 'person-outline', '', '', () => { this.navController.navigateForward('/menu')}),
    new Button('Gerenciar Usuários', 'people-outline', '', '', () => { this.navController.navigateForward('/menu')}),
    new Button('Registro De Acessos', 'newspaper-outline', '', '', () => { this.navController.navigateForward('/menu')}),
    new Button('Conexões', 'radio-outline', '', '', () => { this.navController.navigateForward('/menu')}),
    new Button('Configurações', 'cog', '', '', () => { this.navController.navigateForward('/menu')}),
    new Button('Sair', 'log-out-outline', null, 'sair', () => {this.navController.navigateForward('/login')}),
  ]


  ngOnInit() {
  }

  openHome(){
    this.navController.navigateForward('/home')
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
