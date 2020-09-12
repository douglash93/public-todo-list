import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import TaskModel from '../task.model';

@Component({
  selector: 'app-subtasks',
  templateUrl: './subtasks.component.html',
  styleUrls: ['./subtasks.component.scss']
})
export class SubtasksComponent implements OnInit {

  @Input() cardIndex: number;
  @Input() tasks: TaskModel[];
  @Output() updateTasks = new EventEmitter<TaskModel[]>();

  constructor() { }

  ngOnInit() {
  }

  updateSubTask(taskIndex) {
    this.tasks[taskIndex].done = (!this.tasks[taskIndex].done);
    this.updateTasks.emit(this.tasks);
  }
}
