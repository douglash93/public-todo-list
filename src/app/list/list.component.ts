import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import CardModel from '../card/card.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() title: String;
  @Input() cards: CardModel[];

  constructor() { }

  ngOnInit() {
  }

  newCard(card: CardModel) {
    this.cards.push(card);
  }

  deleteCard(index: number) {
    this.cards.splice(index, 1);
  }
}
