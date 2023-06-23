import { Component,OnInit } from '@angular/core';
import { DataBaseService } from './data-base.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'E3dadyScoringSys';
  showFiller = false;
  constructor(private initCollection:DataBaseService){

  }
  ngOnInit() {

  }
}
