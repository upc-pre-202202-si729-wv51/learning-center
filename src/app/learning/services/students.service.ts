import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Student } from "../model/student";
import { ResourceService } from "../../shared/services/resource.service";

@Injectable({
  providedIn: 'root'
})
export class StudentsService extends ResourceService<Student> {

  // Students Endpoint

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'http://localhost:3000/api/v1/students';
  }

}
