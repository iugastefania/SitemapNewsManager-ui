import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  users: User[] = [];
  errorMessage: string = '';

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.adminService.getAllUsers().subscribe(
      users => {
        this.users = users;
      },
      error => {
        this.errorMessage = error.error;
        console.log('Error retrieving users:', error);
      }
    );
  }

  deleteUser(username: string) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.adminService.deleteUser(username).subscribe(
        response => {
          console.log('User deleted successfully');
          // Refresh the user list
          this.getAllUsers();
        },
        error => {
          console.log('Error deleting user:', error);
        }
      );
    }
  }
}
