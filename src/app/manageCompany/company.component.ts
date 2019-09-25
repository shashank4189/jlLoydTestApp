import { Component } from '@angular/core';
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  model:{
    Fname:'',
    Lname:'',
    Email:'',
    CompanyName:'',
    LicenseStart:'',
    LicenseEnd:'',
  }
  constructor(private _AppService: AppService)
  {
  
  }
  ngOnInit(){
   
  }

  addCompany(){
    this._AppService.addCompany(this.model).subscribe((data:any) => {
      if(data=='success'){
        
      } else {
        console.log('company already existed.')
      }
    }, error => {
        console.log("There was an error generating the proper GUID on the server", error);
    });
  }
}
