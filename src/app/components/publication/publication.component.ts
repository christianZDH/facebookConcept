import { Component, Input, OnInit } from '@angular/core';
import { PublicationI } from '../../interfaces/publication.interface';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss'],
})
export class PublicationComponent implements OnInit {
  @Input() publication: PublicationI;
  constructor() {}

  ngOnInit() {}
}
