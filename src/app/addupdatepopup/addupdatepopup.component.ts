import { Component, OnInit } from '@angular/core';

import { InfoService } from '../shared/info.service';

@Component({
  selector: 'app-addupdatepopup',
  templateUrl: './addupdatepopup.component.html'
})

export class AddupdatepopupComponent implements OnInit 
{
  constructor(public InfoService: InfoService) 
  { }

  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.InfoService.form.controls;
  

  ngOnInit() 
  {
  }

  onSubmit() 
  {
    this.submitted = true;
  
    if (this.InfoService.form.valid) 
    {
      if (this.InfoService.form.get('$key').value == null)
      {
        this.InfoService.insertData(this.InfoService.form.value);
      }
      else
      {
        this.InfoService.updateData(this.InfoService.form.value);
      }
      
      this.showSuccessMessage = true;
      setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.InfoService.form.reset();
      
      //this is to be done for proper reset operation
      this.InfoService.form.setValue({
        $key: null,
        fullName: '',
        email: '',
        mobile: '',
        age: ''
      });
    }
  }
}
