import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { GameInfoComponent } from '../game-info/game-info.component';
import { Firestore, collection, collectionData, addDoc, docData, doc, setDoc, updateDoc } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatButtonModule, MatIconModule, GameInfoComponent],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  game?: Game;
  gameId?: string;


  constructor(public dialog: MatDialog, private firestore: Firestore, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.newGame();
    this.route.params.subscribe((params) => {
      console.log('Game ID :', params['id']);
      this.gameId = params['id'];

      const gamesDocCollection = doc(this.firestore, 'games', this.gameId!);
      docData(gamesDocCollection).subscribe((game: any) => {
        this.game!.currentPlayer = game.currentPlayer;
        this.game!.playedCards = game.playedCards;
        this.game!.players = game.players;
        this.game!.stack = game.stack;
        this.game!.pickCardAnimation = game.pickCardAnimation;
        this.game!.currentCard = game.currentCard;
      });
    });
  }

  newGame() {
    this.game = new Game();
  }

  takeCard() {
    if (!this.game!.pickCardAnimation) {

      this.game!.currentCard = this.game?.stack.pop();
      this.game!.pickCardAnimation = true;

      this.game!.currentPlayer++;
      this.game!.currentPlayer = this.game!.currentPlayer % this.game!.players.length;

      this.saveGame();
      setTimeout(() => {
        this.game?.playedCards.push(this.game!.currentCard!);
        this.game!.pickCardAnimation = false;
        this.saveGame();
      }, 1500);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) {
        this.game?.players.push(name);
        this.saveGame();
      }
    });
  }

  saveGame() {
    const gamesDocCollection = doc(this.firestore, 'games', this.gameId!);
    updateDoc(gamesDocCollection, this.game!.toJSON());
  }
}