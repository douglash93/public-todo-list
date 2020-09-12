import { Component, OnInit } from '@angular/core';
import CardModel from './card/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'todo-list';

  initialsTasks = [
    {
      name: 'Estudar SOLID',
      description: 'Melhorar os conhecimentos nesses princípios de programação',
      tasks: [
        {
          name: 'Princípio da responsabilidade única',
          done: true
        },
        {
          name: 'Princípio Aberto-Fechado',
          done: true
        },
        {
          name: 'Princípio da substituição de Liskov',
          done: true
        },
        {
          name: 'Princípio da Segregação da Interface',
          done: false
        },
        {
          name: 'Princípio da inversão da dependência',
          done: false
        },
      ]
    },
    {
      name: 'Orientação a objetos',
      description: 'Compreender orientação a objetos e aplicar em exercícios práticos',
      tasks: [
        {
          name: 'Abstração',
          done: true
        },
        {
          name: 'Encapsulamento',
          done: true
        },
        {
          name: 'Herança',
          done: true
        },
        {
          name: 'Polimorfismo',
          done: false
        },
      ]
    },
    {
      name: 'Café',
      description: 'Experimentar novos tipos de café',
      tasks: [
        {
          name: 'Cappuccino',
          done: true
        },
        {
          name: 'Macchiato',
          done: false
        },
        {
          name: 'Ristretto',
          done: false
        },
        {
          name: 'Latte',
          done: false
        },
        {
          name: 'Mocha',
          done: true
        }
      ]
    }
  ];

  cards: CardModel[];

  ngOnInit() {
    this.cards = [];

    this.initialsTasks.forEach((t) => {
      let card = new CardModel();
      card.name = t.name;
      card.description = t.description;
      card.tasks = t.tasks;
      this.cards.push(card);
    })
  }

}
