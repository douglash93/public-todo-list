import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BtnNewCardComponent } from './card/btn-new-card/btn-new-card.component';
import { BtnEditCardComponent } from './card/btn-edit-card/btn-edit-card.component';
import { BtnRemoveCardComponent } from './card/btn-remove-card/btn-remove-card.component';
import { SubtasksComponent } from './card/subtasks/subtasks.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CardComponent,
    BtnNewCardComponent,
    BtnEditCardComponent,
    BtnRemoveCardComponent,
    SubtasksComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,  
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
