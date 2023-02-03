import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop connected sorting group
 */
@Component({
  selector: 'cdk-drag-drop-connected-sorting-group-example',
  templateUrl: 'cdk-drag-drop-connected-sorting-group-example.html',
  styleUrls: ['cdk-drag-drop-connected-sorting-group-example.css'],
})
export class CdkDragDropConnectedSortingGroupExample {
  done = ['Rômulo', 'Andressa', 'Léo', 'Camori', 'Thiago', 'Iago'];

  todo: string[] = [];
  finish: string[] = [];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  sorted = 'Sortear';
  random: number;
  sortead() {
    if (this.done.length == 0) return;
    this.random = this.randomNumber(0, this.done.length - 1);
    this.sorted = this.done[this.random];
    this.finish.push(this.sorted);
    delete this.done[this.random];
    this.done = this.done.filter((e) => e);
    console.log(this.done);
  }

  randomNumber(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
