import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { RestService } from '../../services/rest.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  user = new User('', '', '', '');
  selectedFile: File = null;
  fileName: string = "Upload File";

  constructor(
    private restService: RestService,
    private fireStorage: AngularFireStorage
  ) { }

  ngOnInit(): void {
    this.restService.getList();
  }

  onSubmit(){
    if(this.selectedFile != null){
      var filePath = `${this.user.email}_${this.selectedFile.name}_${new Date().getDate()}`;
      const fileRef = this.fireStorage.ref(filePath);
      this.fireStorage.upload(filePath, this.selectedFile).snapshotChanges().pipe(
        finalize(()=>{
          fileRef.getDownloadURL().subscribe((url)=>{
            this.user.imageURL=url;
            this.restService.uploadQuote(this.user);
            this.resetUser();
          })
        })
      ).subscribe();
    }else{
      this.restService.uploadQuote(this.user);
      this.resetUser();
    }
  }

  onFileSelected(event){
    this.selectedFile = event.target.files[0];
    this.fileName = event.target.files[0].name;
  }

  resetUser(){
    window.alert('Quote succesfully submitted!');
    this.user = new User('', '', '', '');
    this.fileName = 'Upload File';
    this.selectedFile = null;
  }

}
