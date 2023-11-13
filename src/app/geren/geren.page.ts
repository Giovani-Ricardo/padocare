import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-page',
  templateUrl: './geren.page.html',
  styleUrls: ['./geren.page.scss'],
})
export class GerenPage implements OnInit {
  public usuarios: any;
  public user: any;
  public usuario: User = new User();
  public usuarioAtual: any;
  @ViewChild(IonModal) modal: IonModal | undefined;
  public isToastOpen: boolean = false;
  public message: string = '';
  public modalMessage: string = '';
  public edit: boolean = false;

  public alertButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        this.api.deletarUsuario(this.usuarioAtual.id).subscribe( res => {
          this.message = 'Usuário excluído com sucesso!'
          this.setOpenToast(true)
          this.getUsers();
        }, err => {
          this.message = 'Exclusão de usuário falhou!'
          this.setOpenToast(true)
        });
      },
    },
  ];

  constructor(  private navController: NavController, private api: ApiService) {
    this.user = this.getUser()
  }


  ngOnInit() {
  }

  setOpenToast(val: boolean){
    this.isToastOpen = val
  }

  openHome(){
    this.navController.navigateForward('/home')
  }

  openModal(edit: boolean, usuarioId: any){
    this.edit = edit
    if(edit){
      this.modalMessage = "Editar usuário"
      this.preencherUsuario(usuarioId)
    }else{
      this.limparUsuario();
      this.modalMessage = "Adicionar novo usuário"
    }
    this.modal?.present();
  }

  editarUsuario(){
    this.api.atualizarUsuario(this.usuario).subscribe( res => {
      this.message = 'Usuário atualizado com sucesso!'
      this.setOpenToast(true);
      this.getUsers();
      this.modal?.dismiss();
      this.limparUsuario();
    }, err => {
      this.message = 'Atualização de usuário falhou!'
      this.setOpenToast(true);
    } );
  }

  setUsuarioAtual(id: any){
    if(this.usuarios){
      this.usuarios.forEach((usuario: any) => {
        if(usuario.id == id){
          this.usuarioAtual = usuario;
        }
      });
    }
  }

  ionViewWillEnter() {
    this.getUsers()
  }

  getUsers(){
    this.api.obterUsuarios().subscribe( (res: any) => {
      console.log(res)
      this.usuarios = res
    })
  }

  getUser(){
    let user: any = localStorage.getItem('user');
    return JSON.parse(user);
  }

  criarUsuario(){
    this.api.criarUsuario(this.usuario).subscribe( (res: any) => {
      this.message = 'Usuário criado com sucesso!'
      this.setOpenToast(true);
      this.getUsers();
      this.modal?.dismiss();
      this.limparUsuario();
    }, err => {
      this.message = 'Criação de usuário falhou!'
      this.setOpenToast(true);
    } );
  }

  limparUsuario(){
    this.usuario = new User();
  }

  preencherUsuario(id: any){
    this.limparUsuario();
    this.setUsuarioAtual(id);
    this.usuario.popular(this.usuarioAtual);
  }

  deletarUsuario(){
    console.log('Vou deletar um usuário')
  }

}

class User {
  public id: number | undefined;
  public name: String = '';
  public email: String = '';
  public password: String = '';
  public admin: boolean = false;
  constructor(

  ) {}

  popular(user: any){
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.admin = user.admin;
  }

}
