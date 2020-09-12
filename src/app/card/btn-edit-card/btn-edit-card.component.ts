import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormsModule } from '@angular/forms';
import CardModel from 'src/app/card/card.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import TaskModel from '../task.model';

@Component({
  selector: 'app-btn-edit-card',
  templateUrl: './btn-edit-card.component.html',
  styleUrls: ['./btn-edit-card.component.scss']
})
export class BtnEditCardComponent implements OnInit {

  @Input() style: String;
  @Input() label: String;
  @Input() icon: String;
  @Input() card: CardModel;
  @Output() refreshCard = new EventEmitter<CardModel>();

  modalRef: BsModalRef;
  frmEdit: FormGroup;
  subtasks: TaskModel[];

  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
    this.frmEdit = this.formBuilder.group({
      id: [null],
      name: [null, Validators.required],
      description: [null, Validators.required],
      detail: [null],
      tasks: [Array]
    });
  }

  get f() {
    return this.frmEdit.controls;
  }
  
  openModal(template: TemplateRef<any>) {
    this.frmEdit.patchValue(this.card);
    console.log(this.frmEdit.getRawValue());
    this.modalRef = this.modalService.show(template);
  }

  updateCard(event) {
    this.modalRef.hide();
    const card = (this.frmEdit.getRawValue() as CardModel);
    this.refreshCard.emit(card);
  }

  updateSubTask(tasks: TaskModel[]) {
    this.card.tasks = tasks;
  }

}
