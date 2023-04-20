import { Component, EventEmitter, Output } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import { Word, words } from 'src/app/shared/services/word.model';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.less']
})
export class AddFormComponent {
  @Output()
  add = new EventEmitter<Word>();

  form = new FormGroup({
    value: new FormControl('', Validators.required),
    meaning: new FormControl('', Validators.required)
  });

  submit(): void {
    words.push({
      value: String(this.form.get('value')?.value),
      meaning: String(this.form.get('meaning')?.value)
    });

    console.log({ words })

    this.form.reset();
  }
}
