import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FireDataServiceProvider } from '../../providers/fire-data-service/fire-data-service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the RestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html',
})
export class RestaurantPage {
  stores:any;
  avatarData ="";

  readonly options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.PNG,
    mediaType: this.camera.MediaType.PICTURE,
    allowEdit:true,
    targetHeight:250,
    targetWidth: 250
  }

  constructor
  
  (
    public navCtrl: NavController, 
    public navParams: NavParams,
    private db: FireDataServiceProvider,
    private camera: Camera
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantPage');
    this.stores=this.db.getAll();

    this.stores.subscribe((result)=> {
      console.log("got this data from provider", result);
    },(error)=> {
      console.log("did'nt get any data",error);
    }
  
  
  )
 //let store={
 //   name:"New pizza store"
 // }
 // this.db.update("0",store);
 



}

bestel() {
  this.navCtrl.setRoot(TabsPage);

}

}
