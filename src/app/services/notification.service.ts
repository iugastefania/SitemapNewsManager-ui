import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  showSuccess(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Duration in milliseconds
      panelClass: ['success-notification']
    });
  }

  showError(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 5000, // Duration in milliseconds
      panelClass: ['error-notification']
    });
  }
}
