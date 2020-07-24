import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { Injectable } from '@angular/core';


@Injectable()
export class TodoService {
  todoList: AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) {}

  getToDoList() {
    this.todoList = this.firebasedb.list("titles");
    return this.todoList;
  }

  addTitle(title: string){
    this.todoList.push({
        title: title,
        isChecked: false
    });
  }

  chechOrUncheckTitle($key: string, flag: boolean){
    this.todoList.update($key, {isChecked: flag});
  }

  removeTitle($key: string){
    this.todoList.remove($key);
  }
}
