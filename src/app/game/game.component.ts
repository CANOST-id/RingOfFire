import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  game?: Game;
  currentCard?: string = '';
  pickCardAnimation = false;

  constructor() { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);
  }

  takeCard() {
    if (!this.pickCardAnimation) {

      this.currentCard = this.game?.stack.pop();
      this.pickCardAnimation = true;
      console.log(this.currentCard);
      
      setTimeout(() => {
        this.game?.playedCards.push(this.currentCard!);
        this.pickCardAnimation = false;
      }, 1500);
    }
  }

}
