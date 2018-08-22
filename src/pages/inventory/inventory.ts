import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InventoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inventory',
  templateUrl: 'inventory.html',
})
export class InventoryPage {
  inventories: Array<{name: string, quantity: string}>;

  constructor(public nrecipesavCtrl: NavController, public navParams: NavParams) {
    this.inventories = this.fetchInventories();
  }

  // TODO
  fetchInventories() {
    let inventories = [];
    for (let i = 0; i < 6; i++) {
      inventories.push({
        id: i,
        name: "Inventory-" + i,
        quantity: i * 10
      });
    }
    return inventories;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InventoryPage');
  }

}
