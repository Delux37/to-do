import { Component } from '@angular/core';
import {CdkDragDrop, CdkDrag, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todo = [
    'Write code',
    'Do some stuff',
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep',
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  weekdays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]

  dropList: string[][] = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ]

  activeList: number | null = null;
  
  drop(event: CdkDragDrop<string[]> |  CdkDragDrop<string[][]>) {
    if(
      !(Array.isArray(event.container.data[0]))
    )
    if (event.previousContainer === event.container) {
      moveItemInArray((event.container.data as string[]), event.previousIndex, event.currentIndex);
    } else {
      console.log(event);
      transferArrayItem((event.previousContainer.data as string[]),
                        (event.container.data as string[]),
                        event.previousIndex,
                        event.currentIndex);
    }else {
      const prev =  this.dropList[event.previousIndex];
      this.dropList[event.previousIndex] = this.dropList[event.currentIndex];
      this.dropList[event.currentIndex] = prev;

      const prevDay = this.weekdays[event.previousIndex];
      this.weekdays[event.previousIndex] = this.weekdays[event.currentIndex];
      this.weekdays[event.currentIndex] = prevDay;
    }
  }
}
