import { CustomUser } from '../formateur/models/tousModel';

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from '../formateur/services/utilisateur.service';

@Component({
    selector: 'app-creation-formateur',
    templateUrl: './creation-formateur.component.html',
    styleUrls: ['./creation-formateur.component.css'],
    standalone: false
})
export class CreationFormateurComponent {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UtilisateurService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      password2: ['', Validators.required],
      phone_number: ['', Validators.required],
      role: ['', Validators.required]
    }, this.passwordMatchValidator);
  }

  passwordMatchValidator(formGroup: FormGroup): { [key: string]: boolean } | null {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const user: CustomUser = this.registrationForm.value;
      console.log(user)
      this.userService.createUser(user).subscribe({
        next: (response) => {
          console.log('User registered successfully:', response);
          this.router.navigate([`/gestionnaire/acceuil`])
        },
        error: (error) => {
          console.error('Error registering user:', error);
        }
      });
    }

   
    
  }




}
