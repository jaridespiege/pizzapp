import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Events } from 'ionic-angular/util/events';
import { ConfirmPage } from '../confirm/confirm';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  pizzas=[];

  constructor(
    public navCtrl: NavController, 
    private events:Events) {

  }

  about () {
    
    this.navCtrl.push(ConfirmPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad aboutPage');
  
  this.events.subscribe("addPizzaToCart",(pizza)=>{  
    this.pizzas.push(pizza);
    console.log("currently in cart",this.pizzas);
  });
  
  
  }

}
