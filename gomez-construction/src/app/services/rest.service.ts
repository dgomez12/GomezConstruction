import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  quoteDetails: AngularFireList<User>;

  constructor(
    private fireDatabase: AngularFireDatabase,
  ) { }

  getList(){
    this.quoteDetails = this.fireDatabase.list('gomez-construction')
  }

  uploadQuote(u: User){
    this.quoteDetails.push(u);
  }

}
