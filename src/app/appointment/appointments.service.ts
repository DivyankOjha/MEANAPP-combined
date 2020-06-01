import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { AppointmentModel } from "./appointment-model";

import { Observable } from "rxjs";
const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: "root",
})
export class AppointmentsService {
  constructor(private http: HttpClient) {}

  getAppointments(): Observable<AppointmentModel[]> {
    return this.http.get<AppointmentModel[]>(BACKEND_URL + "/appointment");
  }

  // createAppointment(appointmentDate: string, name: string, email: string) {
  //   const data: AppointmentModel = {
  //     appointmentDate: appointmentDate,
  //     name: name,
  //     email: email,
  //   };
  //   return this.http
  //     .post(this.APIURL + "/appointment", data)
  //     .subscribe((response) => {
  //       console.log(response);
  //     });
  // }

  createAppointment(
    appointmentDate: string,
    name: string,
    email: string
  ): Observable<AppointmentModel> {
    return this.http.post<AppointmentModel>(BACKEND_URL + "/appointment", {
      appointmentDate,
      name,
      email,
    });
  }

  cancelAppointment(id: String) {
    //console.log(id);
    return this.http.delete(BACKEND_URL + "/appointment/" + id);
  }
}
