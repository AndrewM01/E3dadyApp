import { Component } from '@angular/core';
const ELEMENT_DATA: any[] = [
  { position: 1, name: 'Attendance', weight: 50, Leader: 'ِAba' },
  { position: 2, name: 'Hefz', weight: 5, Leader: 'Mark' },
  { position: 3, name: 'Attendance', weight: 50, Leader: 'Mira' },
  { position: 4, name: 'Quiz', weight: 10, Leader: 'Andrew' },
  { position: 5, name: 'Attendance', weight: 50, Leader: 'Dodz' },
  { position: 6, name: 'Quiz', weight: 10, Leader: 'Dodz' },
  { position: 7, name: 'Quiz', weight: 10, Leader: 'Timmy' },
  { position: 8, name: 'Attendance', weight: 50, Leader: 'SemSem' },
  { position: 9, name: 'Hefz', weight: 5, Leader: 'Clara' },
  { position: 10, name: 'Attendance', weight: 50, Leader: 'Jessy' },

];
@Component({
  selector: 'app-shab',
  templateUrl: './shab.component.html',
  styleUrls: ['./shab.component.scss'],
})
export class ShabComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'Leader'];
  dataSource = ELEMENT_DATA;
}
