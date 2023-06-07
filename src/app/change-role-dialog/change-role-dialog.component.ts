import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-change-role-dialog',
  template: `
    <h2 mat-dialog-title>Change User Role</h2>
    <mat-dialog-content>
      <mat-form-field>
        <mat-label>Role</mat-label>
        <mat-select [(ngModel)]="data.selectedRole">
          <mat-option *ngFor="let role of data.roles" [value]="role">
            {{ role }}
          </mat-option>
        </mat-select>
      </mat-form-field>
    </mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button [mat-dialog-close]="data.selectedRole">Change</button>
      <button mat-button mat-dialog-close>Cancel</button>
    </mat-dialog-actions>
  `
})
export class ChangeRoleDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ChangeRoleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { roles: string[], selectedRole: string }
  ) {}
}
