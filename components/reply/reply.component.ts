import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent {

  userlist:any;

  constructor (private contactData:ContactService , private route: ActivatedRoute){

  }
  ngOnInit(): void{
   this.route.params.subscribe(params => {
    const userId = params['id']
    this.GetContactUsDataById(userId);
    console.log(userId);
    
   });
  }

  GetContactUsDataById(userId:string){
    
    this.contactData.GetContactFormDataById(userId).subscribe({

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

    replaymessage(){
      this.contactData.replyButton().subscribe({

        next :(response)=>{
          
        },
        error:(err)=>{
          console.log(err);
        },
        complete:()=>{}
  
        })
    }
}
