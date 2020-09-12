import { Component, OnInit, TemplateRef, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormsModule } from '@angular/forms';
import CardModel from '../card/card.model';

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import TaskModel from './task.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: CardModel;
  @Input() cardIndex: number;
  @Output() notifyDeleteCard = new EventEmitter<number>();
  modalRef: BsModalRef;
  frmEdit: FormGroup;
  
  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.frmEdit = this.formBuilder.group({
      id: [null],
      title: [null, Validators.required],
      description: [null, Validators.required],
      detail: [null]
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  updateCard(card: CardModel) {
    this.card = card;
  }

  deleteCard(index: number) {
    this.notifyDeleteCard.emit(index);
  }

  updateSubTask(tasks: TaskModel[]) {
    this.card.tasks = tasks;
  }
}
