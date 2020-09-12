import TaskModel from './task.model';

export default class CardModel {
    uid: number;
    name: String;
    description: String;
    detail: String;
    done: Boolean;
    tasks: TaskModel[];
}