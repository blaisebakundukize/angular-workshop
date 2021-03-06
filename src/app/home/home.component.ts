import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = "Hello Workshop";
  // themeColor = 'blue';
  currentLesson = null;
  courseLessons = [
    { title: 'Hello Angular' },
    { title: 'Component Fundamentals' },
    { title: 'Template Driven Forms' },
    { title: 'Angular Services' },
    { title: 'Server Communication' },
    { title: 'Component Driven Architecture' },
    { title: 'Angular Routing' },
    { title: 'Unit Testing Fundamentals' },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  // updateColor() {
  //   this.themeColor = 'salmon';
  // }

  selectLesson(lesson) {
    this.currentLesson = lesson;
  }

}
