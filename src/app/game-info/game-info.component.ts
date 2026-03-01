import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-game-info',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit, OnChanges {


  cardActions = [
    { title: '2 - You', description: 'Du bestimmst jemanden, der trinken muss.' },
    { title: '3 - Me', description: 'Du selbst trinkst einen Schluck.' },
    { title: '4 - Floor', description: 'Alle müssen den Boden berühren - der Letzte trinkt.' },
    { title: '5 - Thumbmaster', description: 'Du kannst jederzeit deinen Daumen auf den Tisch legen. Wer als Letzter reagiert, trinkt.' },
    { title: '6 - For Chicks', description: 'Alle Frauen trinken.' },
    { title: '7 - Heaven', description: 'Zeig in den Himmel - wer\'s verpennt, trinkt.' },
    { title: '8 - Mate', description: 'Wähle einen Mitspieler - ab jetzt müsst ihr immer gemeinsam trinken.' },
    { title: '9 - Rhyme', description: 'Sag ein Wort. Im Uhrzeigersinn muss jeder einen Reim sagen. Wer scheitert oder doppelt, trinkt.' },
    { title: '10 - Men', description: 'Alle Männer trinken.' },
    { title: 'Bube - Neue Regel', description: 'Erfinde eine Regel, die ab sofort gilt. Beispiel: „Nur mit links trinken" oder „Niemand darf fluchen".' },
    { title: 'Dame - Never Have I Ever', description: 'Starte eine Runde „Ich hab noch nie…" - wer etwas doch getan hat, trinkt.' },
    { title: 'König - Kingscup', description: 'Erster bis dritter König → schütte einen Schluck deines Drinks in den Kingscup. Vierter König → Du musst den gesamten Kingscup exen.' },
    { title: 'Ass - Waterfall', description: 'Alle trinken gleichzeitig. Der Spieler mit dem Ass hört zuerst auf, die anderen in Reihenfolge danach.' }
  ];

  title = '';
  description = '';
  @Input() card?: string;

  constructor() {}

  ngOnInit(): void {
  }
  
  ngOnChanges(): void {
    if (this.card) {
      let cardNumber = +this.card!.split('_')[1];
      this.title = this.cardActions[cardNumber - 2].title;
      this.description = this.cardActions[cardNumber - 2].description;
    }
  }
}
