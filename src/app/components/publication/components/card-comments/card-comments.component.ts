import { Component, Input, OnInit } from '@angular/core';
import { PublicationI } from '../../../../interfaces/publication.interface';

@Component({
  selector: 'app-card-comments',
  templateUrl: './card-comments.component.html',
  styleUrls: ['./card-comments.component.scss'],
})
export class CardCommentsComponent implements OnInit {
  @Input() publication: PublicationI;
  constructor() {}

  ngOnInit() {}
}
