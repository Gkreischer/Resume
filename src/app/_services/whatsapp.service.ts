import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class WhatsappService {
  constructor() {}

  public sendMessage(form: FormGroup) {
    const name = form.get('name')!.value;
    const email = form.get('email')!.value;
    const message = form.get('message')!.value;
    window.open(
      `${environment.whatsappApiUrl}/send?text=Olá, me chamo ${name}, meu email é ${email}. Segue a mensagem: ${message}`,
      '_blank'
    );
  }
}
