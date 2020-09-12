import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-btn-remove-card',
  templateUrl: './btn-remove-card.component.html',
  styleUrls: ['./btn-remove-card.component.scss']
})
export class BtnRemoveCardComponent implements OnInit {

  @Input() style: String;
  @Input() label: String;
  @Input() icon: String;
  @Input() cardName: String;
  @Input() cardIndex: number;
  @Output() deleteCard = new EventEmitter<Number>();

  modalRef: BsModalRef;

  constructor(
    private modalService: BsModalService,
  ) {}

  ngOnInit() {
  }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  confirm() {
    this.modalRef.hide();
    this.deleteCard.emit(this.cardIndex);
  }

  decline() {
    this.modalRef.hide();
  }

}
