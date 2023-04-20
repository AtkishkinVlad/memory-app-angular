import { Component, Input } from '@angular/core';

import { Word, words } from 'src/app/shared/services/word.model';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.less']
})
export class FlipCardComponent {
  @Input()
  word!: Word;

  uuid = crypto.randomUUID();

  onClose(word: Word) {
    const value = word.value;
    const index = words.map(x => x.value).indexOf(value);

    return words.splice(index, 1);
  }
}
