import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})

export class InfoService 
{
  constructor(private firebase: AngularFireDatabase) { }
 
  dataList: AngularFireList<any>;
  loadComponent= false;

  form = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email,Validators.required]),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10),Validators.pattern("^[0-9]*$")]),
    age: new FormControl('',[Validators.required, Validators.pattern("[0-9]{0,3}")])
  });


  getData() 
  {
    this.dataList = this.firebase.list('details');
    return this.dataList.snapshotChanges();
  }

  insertData(data) 
  {
    this.dataList.push({
      fullName: data.fullName,
      email: data.email,
      mobile: data.mobile,
      age: data.age
    });
  }

  populateForm(data) 
  {
    this.loadComponent = true;
    this.form.setValue(data);
  }

  updateData(data) 
  {
    this.dataList.update(data.$key,
      {
        fullName: data.fullName,
        email: data.email,
        mobile: data.mobile,
        age: data.age
      });
  }

  deleteData($key: string) 
  {
    this.dataList.remove($key);
  }
}
