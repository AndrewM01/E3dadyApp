import { Component,OnInit } from '@angular/core';
import { DataBaseService } from '../data-base.service';
import { account } from '../home/acc';
import { Observable } from 'rxjs';
export interface shabab {
  name: String;
  score: number;
  attendance:boolean;
}

const ListOfShabab: shabab[] = [
  { name: 'David Wael', score: 100 , attendance:false},
  { name: 'Roben ', score: 90  ,attendance:false},
  { name: 'Kitty', score: 150 ,attendance:false},
  { name: 'Bahy', score: 130 ,attendance:false},
  { name: 'Joseph Bassem', score: 160 ,attendance:false},
];
@Component({
  selector: 'app-scoring-admin',
  templateUrl: './scoring-admin.component.html',
  styleUrls: ['./scoring-admin.component.scss'],
})
export class ScoringAdminComponent implements OnInit {
  ListOfShabab: shabab[] = ListOfShabab;
  accounts:account[]=[]
  selectedValue: string = '';
  attendance:boolean=false
  selectedValueScore: number = 0;
  rem:boolean=false
  selectedSum:string=''
  addedScore:string=''
  RemovedScore:string=''
  Verse:string=''
  points:string=''
  constructor(private dataBase:DataBaseService) {

  }
   ngOnInit(): void {
    this.dataBase.getAllUsers().subscribe(
    acc=>this.accounts=acc
   )
   }
  getScore() {
    this.accounts.forEach((element) => {
      if (element.name == this.selectedValue)
        this.selectedValueScore = element.score;
    });
    console.log(this.accounts)
  }

  AddingScore(option:string){
     switch(option)
     {
      case 'attendance':
        this.selectedValueScore=this.selectedValueScore + 100
        this.attendance=true
        this.dataBase
            .updateScore(this.selectedValueScore)
            .then(() => {
              console.log('done');
            })
            .catch((error) => {
              console.log(error);
            });
        break
      case 'interactive':
        this.selectedValueScore+=50
        this.dataBase
        .updateScore(this.selectedValueScore)
        .then(() => {
          console.log('done');
        })
        .catch((error) => {
          console.log(error);
        });
        break
      case 'bouns':
       this.selectedSum='sum'
       this.rem=!this.rem
        break
      case 'add':
        this.selectedValueScore+=+this.addedScore
        this.rem=!this.rem
        this.addedScore=''
        this.dataBase
        .updateScore(this.selectedValueScore)
        .then(() => {
          console.log('done');
        })
        .catch((error) => {
          console.log(error);
        });
        break
      case 'removePoint':
        this.selectedSum='minus'
        this.rem=!this.rem
        break
      case 'remove':
        this.selectedValueScore-=+this.RemovedScore
        this.rem=!this.rem
        this.RemovedScore=''
        this.dataBase
        .updateScore(this.selectedValueScore)
        .then(() => {
          console.log('done');
        })
        .catch((error) => {
          console.log(error);
        });
        break
      case 'tasme3':
        this.selectedSum='tasme3'
        this.rem=!this.rem
        break
      case 'sama3':
        this.selectedValueScore+=(+this.Verse)*(+this.points)
        this.rem=!this.rem
        this.Verse=''
        this.points=''
        this.dataBase
        .updateScore(this.selectedValueScore)
        .then(() => {
          console.log('done');
        })
        .catch((error) => {
          console.log(error);
        });
        break
     }
  }
}
