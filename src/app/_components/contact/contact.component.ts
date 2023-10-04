import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    contactForm!: FormGroup;
    constructor(
      private fb: FormBuilder
    ) {
    }

    ngOnInit(): void {
      this.mountForm();
    }

    mountForm() {
      
      this.contactForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
        email: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30), Validators.email]],
        message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]]
      });
    
    }

    submit() {
      console.log(this.contactForm.value);
    }

} 
