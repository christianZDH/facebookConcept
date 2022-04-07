import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserI } from '../../interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  user: UserI;
  constructor(private userService: UserService, private route: Router) {}

  ngOnInit() {
    this.userService.getUser().subscribe((user: UserI) => {
      this.user = user;
    });
  }

  redirectToProfile() {
    this.route.navigate(['/profile']);
  }
}
