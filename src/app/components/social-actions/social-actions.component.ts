import { Component, Input, OnInit } from '@angular/core';
import { UserI } from '../../interfaces/user.interface';

@Component({
  selector: 'app-social-actions',
  templateUrl: './social-actions.component.html',
  styleUrls: ['./social-actions.component.scss'],
})
export class SocialActionsComponent implements OnInit {
  @Input() user: UserI;
  firstName: string;
  constructor() {}

  ngOnInit() {
    this.firstName = this.user.userName.split(' ')[0];
  }
}
