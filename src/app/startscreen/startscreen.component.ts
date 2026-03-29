import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { Game } from '../../models/game';
import { GameComponent } from '../game/game.component';

@Component({
  selector: 'app-startscreen',
  standalone: true,
  imports: [],
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss']
})
export class StartscreenComponent {

  game: Game;

  constructor(private router: Router, private firestore: Firestore) { 
    this.game = new Game();
  }

  newGame() {
    const gamesRef = collection(this.firestore, 'games');
    addDoc(gamesRef, this.game.toJSON()).then((gameInfo: any) => {
      console.log(gameInfo);
      this.router.navigate(['/game', gameInfo.id]);
    });
  }

}
