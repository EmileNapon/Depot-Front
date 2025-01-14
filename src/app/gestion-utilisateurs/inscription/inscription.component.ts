import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './service-inscription/service-inscription.service';
import { User } from './interface-inscription/interface-inscription';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private route: ActivatedRoute, private router: Router) {}

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
      const user: User = this.registrationForm.value;
      console.log(user)
      this.userService.registerUser(user).subscribe({
        next: (response) => {
          console.log('User registered successfully:', response);
          this.router.navigate([`/usersPages/login`])
        },
        error: (error) => {
          console.error('Error registering user:', error);
        }
      });
    }

   
    
  }

 
}
