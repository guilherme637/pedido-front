import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {
  @Input() collapsed = false;
  @Input() screenWidth = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public getBodyClass(): string {
    let styleeClass = '';

    if (this.collapsed && this.screenWidth > 768) {
      styleeClass = 'body-trimed';
    }

    if (this.collapsed && this.screenWidth <= 768 && this.screenWidth >0) {
      styleeClass = 'body-md-screen'
    }

    return styleeClass;
  }
}
