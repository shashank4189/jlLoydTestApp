
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // Import it up here

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

  getCompany() {
    return this.http.get('https://localhost:8080/api/company')
  }

  addCompany(data) {
    return this.http.post('https://localhost:8080/api/addCompany', data)
  }

  updateCompany(data) {
    return this.http.put('https://localhost:8080/api/addCompany', data)
  }


  changeActivation(data) {
    return this.http.put('https://localhost:8080/api/changeActivation', data)
  }
}