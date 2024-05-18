import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WhatsappService } from 'src/app/_services/whatsapp.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    contactForm!: FormGroup;
    constructor(
      private fb: FormBuilder,
      private whatsappService: WhatsappService
    ) {
    }

    ngOnInit(): void {
      this.mountForm();
    }

    mountForm() {
      
      this.contactForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
        email: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.email]],
        message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
      });
    
    }

    submit() {
      this.whatsappService.sendMessage(this.contactForm);
    }

} 
