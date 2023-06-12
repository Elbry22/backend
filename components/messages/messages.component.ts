import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  userlist:any;
  constructor (private contactData:ContactService , route:Router){

  }
  ngOnInit(): void{
    this.GetContactUsData();
  }

  GetContactUsData(){
    
    this.contactData.GetContactFormData().subscribe({

      next :(response)=>{
        this.userlist = response;
        console.log(response);

      },
      error:(err)=>{
        console.log(err);
      },
      complete:()=>{}

      })
    }


    onclick()
    {
      // [routerLink]="['/reply/{{user.id}}']"
      
     // this.route.navigateByUrl(['/team/113/user/ganesh']);



    }
}