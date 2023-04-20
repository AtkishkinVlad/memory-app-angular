import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TuiBadgeModule,
  TuiComboBoxModule,
  TuiDataListWrapperModule,
  TuiInputModule,
  TuiTextAreaModule,
  TuiAccordionModule
} from '@taiga-ui/kit';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core';

import { MemoryCardComponent } from './memory-card.component';
import { CardListComponent } from './card-list/card-list.component';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { AddFormComponent } from './add-form/add-form.component';

@NgModule({
  declarations: [
    MemoryCardComponent,
    CardListComponent,
    FlipCardComponent,
    AddFormComponent
  ],
  exports: [MemoryCardComponent, CardListComponent, FlipCardComponent, AddFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    TuiBadgeModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiButtonModule,
    TuiComboBoxModule,
    TuiDataListWrapperModule,
    TuiTextAreaModule,
    TuiAccordionModule
  ]
})
export class MemoryCardModule { }
