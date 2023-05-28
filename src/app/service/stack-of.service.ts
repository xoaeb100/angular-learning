import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StackOFService {
  constructor(private http: HttpClient) {

  }

  async getStudents(): Promise<any[]> {
    const response: any = await this.http
      .get('https://school-api.timepayx.com/student/getAllStudents')
      .toPromise();

    console.log(response.data);
    return response.data;
  }
}
