import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-list-company',
  templateUrl: './listCompany.component.html',
  styleUrls: ['./listCompany.component.css']
})
export class ListCompanyComponent implements OnInit {
  title = 'app works!';
  companyList =[];
  constructor(private _AppService: AppService)
  {
  
  }
  ngOnInit(){
    this._AppService.getCompany().subscribe((data:any) => {
      this.companyList =  data;
    }, error => {
        console.log("There was an error generating the proper GUID on the server", error);
    });
  }

  changeActivation(id,isActivate){
    this._AppService.changeActivation({id:id,isActivate:isActivate}).subscribe((data:any) => {
      if(data=='success'){
        console.log('Action performed')
      } else {
       
      }
    }, error => {
        console.log("There was an error generating the proper GUID on the server", error);
    });
  }
}
