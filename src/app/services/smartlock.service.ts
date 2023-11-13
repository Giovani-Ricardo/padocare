import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CapacitorHttp } from '@capacitor/core';
import { BleClient, dataViewToText, textToDataView, numberToUUID } from '@capacitor-community/bluetooth-le';
@Injectable({
  providedIn: 'root'
})
export class SmartlockService {
  constructor(private http: HttpClient ) {

  }
  openWifi(){
    console.log('enviando requisição abrir via wifi')
    doPost('on')
  }

  closeWifi(){
    console.log('enviando requisição abrir via wifi')
    doPost('off')
  }

  openBluetooth(){
    console.log('enviando requisição abrir via bluetooth')
    sendToBle('on')
  }

  closeBluetooth(){
    console.log('enviando requisição fechar via bluetooth')
    sendToBle('off')
  }

  scanDevices(){
    console.log('procurando por dispositivos...')
    scan()
  }

}

const doPost = async (value: string) => {
  const token = 'ACB5'
  const options = {
    url: `http://192.168.4.1/?token=${token}&led=${value}`,
    headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/x-www-form-urlencoded'},
    action: '/',
  };

  const response = await CapacitorHttp.post(options);
};

const DEVICE = numberToUUID(0x180d);
const BLE_NUS = '6e400001-b5a3-f393-e0a9-e50e24dcca9e'.toUpperCase()
const BLE_RX = '6e400002-b5a3-f393-e0a9-e50e24dcca9e'.toUpperCase()
const BLE_TX = '6e400003-b5a3-f393-e0a9-e50e24dcca9e'.toUpperCase()

const sendToBle = async (value: string) => {
  //const DEVICE_ID = "BE4ADCD4-E8FA-40B0-ACB5-2B2B25B5B9"
  //const DEVICE_ID = "6e400001-b5a3-f393-e0a9-e50e24dcca9e".toUpperCase()
  try{
    await BleClient.initialize();

    const device = await BleClient.requestDevice({
      services: [BLE_NUS, ],
      optionalServices: [BLE_RX, BLE_TX],
    });

    await BleClient.connect(device.deviceId, (deviceId) => {console.log(`device ${deviceId} disconnected`)});
    console.log('connected to device', device);

    await BleClient.write(device.deviceId, BLE_RX, BLE_TX, textToDataView(value));
    console.log(`sinal enviado ${value}`);

    // disconnect after 10 sec
    setTimeout(async () => {
      await BleClient.disconnect(device.deviceId);
      console.log('disconnected from device', device);
    }, 10000);

  }catch(error){
    console.error(error)
  }
};

export async function scan(): Promise<void> {
  try {
    await BleClient.initialize();

    await BleClient.requestLEScan(
      {
        services: [BLE_NUS, BLE_RX, BLE_TX],
      },
      (result) => {
        console.log('received new scan result', result);
      }
    );

    setTimeout(async () => {
      await BleClient.stopLEScan();
      console.log('stopped scanning');
    }, 5000);
  } catch (error) {
    console.error(error);
  }
}
