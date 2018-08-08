import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  recipes: any[];

  constructor(public navCtrl: NavController) {
    this.recipes = this.fetchRecipes();
  }

  // TODO: fetch from web app
  fetchRecipes() {
    let recipes = [];
    for (let i = 0; i < 6; i++) {
      recipes.push({
        id: i,
        name: "Afung-" + i,
        description: "Cheryl's favorite food since 1990s"
      });
    }
    return recipes;
  }

  recipeSelect(recipe) {
    this.navCtrl.push(DetailPage, {
      recipe: recipe
    });
  }
}
