import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "./auth/auth.guard";
import { PostListComponent } from "./posts/posts/post-list/post-list.component";
import { PostCreateComponent } from "./posts/posts/post-create/post-create.component";
import { SendEmail } from "./posts/sendemail/send-email.component";
import { HomeComponent } from "./appointment/home/home.component";
import { AppointmentListComponent } from "./appointment/appointment-list/appointment-list.component";
import { PasswordComponent } from "./passwordgenerator/password.component";
//import { AppointmentComponent } from "./appointment/appointment.component";

const routes: Routes = [
  { path: "", component: PostListComponent },
  { path: "create", component: PostCreateComponent, canActivate: [AuthGuard] },
  {
    path: "edit/:postId",
    component: PostCreateComponent,
    canActivate: [AuthGuard],
  },
  { path: "sendemail", component: SendEmail, canActivate: [AuthGuard] },
  {
    path: "passwordgenerator",
    component: PasswordComponent,
    canActivate: [AuthGuard],
  },

  { path: "AppointmentHome", component: HomeComponent },
  { path: "appointmentlist", component: AppointmentListComponent },
  { path: "auth", loadChildren: "./auth/auth.module#AuthModule" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
