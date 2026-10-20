import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { finalize } from 'rxjs';
import { AccountService } from '@yk/api/auth';

@Component({
  selector: 'app-register',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register implements OnInit {
  public hidePassword = signal(true);
  public availableRoles = ['seller', 'buyer', 'admin'];
  public registerForm: FormGroup = new FormGroup({});

  private readonly accountService = inject(AccountService);
  private readonly router = inject(Router);

  public isSubmitting = signal(false);
  public errorMessage = signal<string | null>(null);

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }


  private initializeForm(): void {
    this.registerForm = this.formBuilder.group({
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(/^\+?[0-9]{10,15}$/),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      role: ['', Validators.required],
    });
  }

  togglePasswordVisibility(): void {
    this.hidePassword.set(!this.hidePassword());
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const { phoneNumber, password, role } = this.registerForm.getRawValue();

    this.isSubmitting.set(true);
    this.errorMessage.set(null);

    this.accountService
      .apiAccountsRegisterPost({
        createUserRequest: { phone: phoneNumber, password, role },
      })
      .pipe(finalize(() => this.isSubmitting.set(false)))
      .subscribe({
        next: () => this.router.navigate(['/account/login']),
        error: (err: HttpErrorResponse) => this.errorMessage.set(this.readError(err)),
      });
  }

  private readError(err: HttpErrorResponse): string {
    const problem = err.error;

    // Validation errors: { errors: { field: ["message"] } }
    if (problem?.errors) {
      return Object.values(problem.errors as Record<string, string[]>).flat().join(' ');
    }

    // Other errors: ProblemDetails { detail: "..." }
    return problem?.detail ?? 'Registration failed. Please try again.';
  }

}
