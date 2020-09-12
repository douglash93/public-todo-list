import {
  Component,
  OnInit,
  TemplateRef,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormsModule,
} from "@angular/forms";
import CardModel from "src/app/card/card.model";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal";
import TaskModel from '../task.model';

@Component({
  selector: "app-btn-new-card",
  templateUrl: "./btn-new-card.component.html",
  styleUrls: ["./btn-new-card.component.scss"],
})
export class BtnNewCardComponent implements OnInit {
  @Input() style: String;
  @Input() label: String;
  @Output() addNewCard = new EventEmitter<CardModel>();

  subTasks: any[];

  modalRef: BsModalRef;
  frmNew: FormGroup;

  constructor(
    private modalService: BsModalService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.subTasks = [];
    this.frmNew = this.formBuilder.group({
      id: [null],
      name: [null, Validators.required],
      description: [null, Validators.required],
      detail: [null],
      subtask: [null],
    });
  }

  openModal(template: TemplateRef<any>) {
    this.subTasks = [];
    this.frmNew.reset();
    this.modalRef = this.modalService.show(template);
  }

  saveCard(e) {
    this.modalRef.hide();
    const card = this.frmNew.getRawValue() as CardModel;
    card.tasks = this.subTasks;
    this.addNewCard.emit(card);
  }

  addSubTask(e) {
    e.preventDefault();
    let task = new TaskModel();
    task.name = this.frmNew.get("subtask").value;
    task.done = false;
    this.subTasks.push(task);
    this.frmNew.get("subtask").setValue(null);
  }  
}
