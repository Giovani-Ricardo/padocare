import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public menuButtons: Array<Button> = [
    new Button('Perfil De Usuário', 'person-outline', './perfil-user', ''),
    new Button('Gerenciar Usuários', 'people-outline', '', ''),
    new Button('Registro De Acessos', 'newspaper-outline', '', ''),
    new Button('Conexões', 'radio-outline', '', ''),
    new Button('Configurações', 'cog', '', ''),
    new Button('Sair', 'log-out-outline', '', 'sair'),
  ]

  constructor() { }

  ngOnInit() {
  }

}

class Button {
  constructor(public description: String, public icon: String, public url: String, public classe: String) {}
}
