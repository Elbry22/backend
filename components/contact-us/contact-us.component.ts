import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

  contact: any={};
userDetailsForm!: FormGroup;

    constructor (private contactData:ContactService , private fb: FormBuilder){
   
    }

    ngOnInit(){
      this.userDetailsForm = this.fb.group({
        name: ['', [Validators.required , Validators.maxLength(50),
           Validators.pattern('^[a-zA-Z ]*$')]],
        email: ['', [Validators.required, Validators.email , Validators.maxLength(50), 
          Validators.pattern('^[a-zA-Z]*$')
        ]],
        subject: ['', [Validators.required , Validators.maxLength(50),Validators.minLength(5),
            Validators.pattern('^[a-zA-Z ]*$')]],
        massage: ['', [Validators.required , Validators.maxLength(500),Validators.minLength(5)]],
      });
    }

------------------------------------------------------------------------


this.userDetailsForm = this.fb.group({
  name: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(/^[a-zA-Z\s]*$/)]],
  email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
  subject: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(5), Validators.pattern(/^[a-zA-Z\s]*$/)]],
  massage: ['', [Validators.required, Validators.maxLength(500), Validators.minLength(5)]],
});



  SendContactUsData(data : any){
    
    this.contactData.SendContactFormData(data).subscribe({

      next :(response)=>{
        console.log(response)

      },
error:(err)=>{
  console.log(err);
},
complete:()=>{}

    })

    
  }

 /* myForm() {
    this.userDetailsForm = this.fb.group({
    email: ['', [Validators.required, 
       Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
      
      ]
    });
 }*/
}
