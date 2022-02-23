import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css'],
})
export class BookdetailsComponent implements OnInit {
  @Input() bookdetails: any;
  constructor() {}

  ngOnInit(): void {}
}
