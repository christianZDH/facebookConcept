import { Component, Input, OnInit } from '@angular/core';
import { PublicationI } from '../../../../interfaces/publication.interface';

@Component({
  selector: 'app-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss'],
})
export class CardHeaderComponent implements OnInit {
  @Input() publication: PublicationI;
  skeletonImg = false;
  constructor() {}

  ngOnInit() {}
}
