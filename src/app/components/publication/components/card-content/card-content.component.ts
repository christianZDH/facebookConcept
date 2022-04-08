import { Component, OnInit, Input } from '@angular/core';
import { PublicationI } from '../../../../interfaces/publication.interface';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.scss'],
})
export class CardContentComponent implements OnInit {
  @Input() publication: PublicationI;
  skeletonImg = false;
  constructor() {}

  ngOnInit() {}
}
