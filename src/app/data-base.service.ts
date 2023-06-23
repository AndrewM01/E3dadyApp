import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import{getFirestore,collection,doc,onSnapshot, setDoc}from'firebase/firestore';
import { AuthService } from './auth.service';
import { AngularFirestore ,AngularFirestoreCollection} from '@angular/fire/compat/firestore';

import { Observable } from 'rxjs';
import { account } from './home/acc';
const config = {
  firebase: {
    apiKey: "AIzaSyCnWkumqCJDD0GFZlmKrxT21xGEk4NpWx8",
    authDomain: "e3dadyscoringsys.firebaseapp.com",
    projectId: "e3dadyscoringsys",
    storageBucket: "e3dadyscoringsys.appspot.com",
    messagingSenderId: "246068229191",
    appId: "1:246068229191:web:9218180267ca871e9c2d62"

  }
}
@Injectable({
  providedIn: 'root'
})
export class DataBaseService  {
  firebaseApp = initializeApp(config.firebase);
  firestore=getFirestore(this.firebaseApp);
  ScoresCollection=collection(this.firestore,'scores')
  scoresDoc=doc(this.ScoresCollection,'2dV9BCEx7c4WMsgqnFsV')
  userID: any;
  private scoresCollection: AngularFirestoreCollection<account>;
  users$: Observable<account[]>;
  constructor(private fire: AngularFirestore, private auth: AuthService) {
    auth.auth.onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem('userUID', user.uid);
      }
    });

    this.scoresCollection = this.fire.collection<account>('/scores/');

   }

   getScore():Observable<any>{
    let userID = localStorage.getItem('userUID') || '{}';
    const documentRef = this.fire.collection('/scores/').doc(userID);
    console.log(documentRef.valueChanges())
    return documentRef.valueChanges();
  }

  updateScore(score:number): Promise<void>
  {
    let userID = localStorage.getItem('userUID') || '{}';
    const documentRef = this.fire.collection('/scores/').doc(userID);
    const updateData = { ['score']: score };
    return documentRef.update(updateData);
  }

  getAllUsers():Observable<account[]>{


    return this.scoresCollection.valueChanges();
  }

}
