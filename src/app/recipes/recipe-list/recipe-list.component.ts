import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pav Bhaji','Pav bhaji is a fast food dish from India consisting of a thick vegetable curry served with a soft bread roll. Its origins are in the state of Maharashtra.','https://static.toiimg.com/thumb/52416693.cms?imgsize=789478&width=509&height=340'),
    new Recipe('Pav Bhaji','Pav bhaji is a fast food dish from India consisting of a thick vegetable curry served with a soft bread roll. Its origins are in the state of Maharashtra.','https://static.toiimg.com/thumb/52416693.cms?imgsize=789478&width=509&height=340')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
