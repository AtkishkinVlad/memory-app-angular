import { Component } from '@angular/core';
import { Word, words } from 'src/app/shared/services/word.model';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.less']
})
export class CardListComponent {
  cards: Word[] = [];

  ngOnInit(): void {
    this.cards = words;
  }

  addCard(word: Word): void {
    this.cards.push(word);
  }
}
