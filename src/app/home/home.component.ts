import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { DataBaseService } from '../data-base.service';
import { account } from './acc';
import { Observable } from 'rxjs';
const ListOfAyat: any[] = [
  {
    verse:
      '“أَمَا أَمَرْتُكَ؟ تَشَدَّدْ وَتَشَجَّعْ! لاَ تَرْهَبْ وَلاَ تَرْتَعِبْ لأَنَّ الرَّبَّ إِلهَكَ مَعَكَ حَيْثُمَا تَذْهَبُ.” (يشوع 9:1)',
  },
  {
    verse:
      '“تَوَكَّلْ عَلَى الرَّبِّ بِكُلِّ قَلْبِكَ، وَعَلَى فَهْمِكَ لاَ تَعْتَمِدْ.” (أمثال 5:3)',
  },
  {
    verse:
      '“لاَ تَخَفْ لأَنِّي مَعَكَ. لاَ تَتَلَفَّتْ لأَنِّي إِلهُكَ. قَدْ أَيَّدْتُكَ وَأَعَنْتُكَ وَعَضَدْتُكَ بِيَمِينِ بِرِّي.” (إشعياء 10:41)',
  },
];
const ListOfQuizzes: any[] = [
  { name: 'Quiz1', link: 'https://overviewbible.com/bible-trivia-quiz/' },
  { name: 'Quiz2', link: 'https://overviewbible.com/bible-trivia-quiz/' },
  { name: 'Quiz3', link: 'https://overviewbible.com/bible-trivia-quiz/' },
];
const ListOfLecs: any[] = [
  {
    name: 'Week 1',
    link: 'https://drive.google.com/drive/folders/1bIjFim81hf3-NYiqKOcA7E4H6MCm8lEP?usp=sharing',
  },
  {
    name: 'Week 2',
    link: 'https://drive.google.com/drive/folders/1_dSBW3EJXQUs-0xNRZcSHBhmPPYu_Jwn?usp=drive_link',
  },
  {
    name: 'Week 3',
    link: 'https://drive.google.com/drive/folders/1lk0AkPEsA1gZvRXf8Jcc_5_VS25D8EI_?usp=sharing',
  },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  ListOfAyat = ListOfAyat;
  ListOfQuizzes = ListOfQuizzes;
  ListOfLecs = ListOfLecs;

  tasme3: boolean = false;
  quizzes: boolean = false;
  content: boolean = false;
  SelectedBtn: string = '';
  name: string = '';
  score: number = 0;

  account: Observable<any>;

  constructor(public dialog: MatDialog, private dataBase: DataBaseService) {}

  ngOnInit() {
    // setTimeout(() => {
    //   this.score--;
    // }, 5000);
    this.account = this.dataBase.getScore();
    this.account.subscribe((account) => {
      this.name = account.name;
      this.score = account.score;
    });
  }

  SelectActivity(option: string) {
    switch (option) {
      case 'tasme3':
        this.SelectedBtn = 'tasme3';
        if (this.content) this.content = false;

        break;
      case 'quizzes':
        this.SelectedBtn = 'quizzes';
        if (this.content) this.content = false;
        this.quizzes = true;
        break;
      case 'content':
        this.SelectedBtn = 'content';
        if (this.content) this.content = false;
        break;
    }
  }
  navigateToGoogle(link: string): void {
    window.open(link, '_blank');
  }

  openConfirmationDialog(message: string): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '300px',
      height: '150px',
      data: {
        title: message,
        message: 'Are you sure you want to proceed?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        if (message.includes('3')) {
          this.score = this.score - 3;
          this.content = true;
          this.dataBase
            .updateScore(this.score)
            .then(() => {
              console.log('done');
            })
            .catch((error) => {
              console.log(error);
            });
        } else if (message.includes('4')) {
          this.score = this.score - 4;
          this.content = true;
          this.dataBase
          .updateScore(this.score)
          .then(() => {
            console.log('done');
          })
          .catch((error) => {
            console.log(error);
          });
        } else if (message.includes('5')) {
          this.score = this.score - 5;
          this.content = true;
          this.dataBase
          .updateScore(this.score)
          .then(() => {
            console.log('done');
          })
          .catch((error) => {
            console.log(error);
          });
        }
      } else {
        this.score = this.score;
      }
    });
  }
}
