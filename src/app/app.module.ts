import { ErrorInterceptor } from "./error-interceptor";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient,
} from "@angular/common/http";

import { AppComponent } from "./app.component";

import { AppRoutingModule } from "./app-routing.module";
import { AuthInterceptor } from "./auth/auth-interceptor";
import { HeaderComponent } from "./header/header.component";
import { Errorcomponent } from "./error.component";
import { SendEmail } from "./posts/sendemail/send-email.component";
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { PasswordComponent } from "./passwordgenerator/password.component";
import { AngularMaterialModule } from "./angular.material";
import { PostModule } from "./posts/posts/post.module";
import { AppointmentModule } from "./appointment/appointment.module";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Errorcomponent,
    SendEmail,
    PasswordComponent,
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxSpinnerModule,
    AngularMaterialModule,
    PostModule,
    AppointmentModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    //{ provide: NgxSpinnerService },
  ],
  bootstrap: [AppComponent],
  entryComponents: [Errorcomponent],
})
export class AppModule {}
