import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { AppointmentModel } from "./appointment-model";

import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AppointmentsService {
  readonly APIURL = "http://localhost:3000/api";

  constructor(private http: HttpClient) {}

  getAppointments(): Observable<AppointmentModel[]> {
    return this.http.get<AppointmentModel[]>(this.APIURL + "/appointment");
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
    return this.http.post<AppointmentModel>(this.APIURL + "/appointment", {
      appointmentDate,
      name,
      email,
    });
  }

  cancelAppointment(id: String) {
    //console.log(id);
    return this.http.delete(this.APIURL + "/appointment/" + id);
  }
}
