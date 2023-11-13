import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Network } from '@capacitor/network';
import { SmartlockService } from '../services/smartlock.service'
import { ApiService } from '../services/api.service';
import { Http } from '@capacitor-community/http';
import { CapacitorHttp } from '@capacitor/core';

declare var ble: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  public status: boolean = false;
  public wifi: boolean = true;
  public bluetooth: boolean = false;
  public isToastOpen: boolean = false;
  public message: string = '';
  public user: any;

  constructor(private navController: NavController, private smartLock: SmartlockService, private api: ApiService) {
    this.user = this.getUser();
  }

  setOpenToast(val: boolean){
    this.isToastOpen = val
  }

  getUser(){
    let user: any = localStorage.getItem('user');
    return JSON.parse(user);
  }

  openMenu(){
    this.navController.navigateForward('/menu')
  }

  ativarWifi(){
    this.wifi = true;
    this.bluetooth = false;
    this.message = 'Wifi ativado com sucesso'
    this.setOpenToast(true);
    console.log(`wifi: ${this.wifi} bluetooth: ${this.bluetooth}`)
  }

  ativarBluetooth(){
    this.wifi = false;
    this.bluetooth = true;
    this.message = 'Bluetooth ativado com sucesso'
    this.setOpenToast(true);
    console.log('Iniciando scan...')
    ble.scan([], 5, function(device: any) {
      console.log(JSON.stringify(device));
    }, function(error: any){
      console.log(error)
    });
    console.log('Finalizando scan...')
    //this.smartLock.scanDevices()
    console.log(`wifi: ${this.wifi} bluetooth: ${this.bluetooth}`)
  }


  sendRequest(){
    if(this.wifi && !this.bluetooth){
      if(this.status){
        this.smartLock.closeWifi()
        this.status = false;
        this.api.registrarAcesso(2).subscribe((res: any) => {
          this.message = 'Fechadura fechada!'
          this.setOpenToast(true)
        })

      }else{
        this.smartLock.openWifi()
        this.status = true
        this.api.registrarAcesso(1).subscribe((res: any) => {
          this.message = 'Fechadura aberta!'
          this.setOpenToast(true)
        })
      }
    }else if(this.bluetooth && !this.wifi){
      if(this.status){
        this.smartLock.closeBluetooth()
        this.status = false;
      }else{
        this.smartLock.openBluetooth()
        this.status = true
      }
    }
  }


}


