import { Injectable } from '@angular/core';
import { BaseService } from "../../shared/services/base.service";
import { Instructor } from "../model/instructor";
import { HttpClient } from "@angular/common/http";
import { ResourceService } from "../../shared/services/resource.service";


@Injectable({
  providedIn: 'root'
})
export class InstructorsService extends ResourceService<Instructor> {

  constructor(http: HttpClient) {
    super(http);
    this.basePath = 'http://localhost:3000/api/v1/instructors';
  }
}
