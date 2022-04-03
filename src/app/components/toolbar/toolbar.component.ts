import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserI } from '../../interfaces/user.interface';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  user: UserI;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser().subscribe((user: UserI) => {
      this.user = user;
    });
  }
}
