import { Component, OnInit  } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-add',
  templateUrl: 'add.page.html',
  styleUrls: ['add.page.scss'],
})
export class AddPage implements OnInit {

  constructor(private navController: NavController) {}

  openMenu(){
    this.navController.navigateForward('/menu')
  }

  id: string = '';
  password: string = '';

  ngOnInit() {
  }

  login(){
    console.log(`id: ${this.id} pass: ${this.password}`);
    this.navController.navigateForward('/add')
  }
}


