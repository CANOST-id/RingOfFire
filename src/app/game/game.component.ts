import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  game?: Game;
  pickCardAnimation = false;

  constructor() { }

  newGame() {
    this.game = new Game();
  }

  takeCard() {
    this.pickCardAnimation = true;
  }

}
