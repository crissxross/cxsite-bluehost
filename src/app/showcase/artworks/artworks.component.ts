import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.css']
})
export class ArtworksComponent implements OnInit {

  @Input() artworks;

  constructor() { }

  ngOnInit() {
  }

}
