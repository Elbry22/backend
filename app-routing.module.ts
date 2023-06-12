import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MessagesComponent } from './components/messages/messages.component';
import { ReplyComponent } from './components/reply/reply.component';

const routes: Routes = [
  {path:'',redirectTo:'home' , pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'messages',component:MessagesComponent},
  {path:'reply/:id',component:ReplyComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
