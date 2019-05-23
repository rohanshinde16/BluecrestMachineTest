import { Component, OnInit } from '@angular/core';

import { InfoService } from '../shared/info.service';

@Component({
  selector: 'app-tableview',
  templateUrl: './tableview.component.html'
})
export class TableviewComponent implements OnInit {
  constructor(public InfoService: InfoService) 
  { }
  
  informationArray = [];
  showDeletedMessage: boolean;
  searchText: string = "";

  ngOnInit() 
  {
    this.InfoService.getData().subscribe(
      list => {
        this.informationArray = list.map(item => {
          return {
            $key: item.key,
            ...item.payload.val()
          };
        });
      });
  }

  onDelete($key) 
  {
    if (confirm('Admin : Are you sure to delete this Information ?')) 
    {
      this.InfoService.deleteData($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }

  filterCondition(data) 
  {
    return data.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }
}
