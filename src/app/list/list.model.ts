import Card from '../card/card.model';

import CardModel from './../card/card.model';

export class ListModel {
    uid: number;
    name: String;
    description: String;
    cards: CardModel[];
}