import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'JavaScript',
      description: 'Learn the fundamentals of JavaScript',
      percentComplete: 50,
      favorite: true
    }
  ]; 
  selectedCourse = null;

  constructor() { }

  ngOnInit(): void {
    this.resetSelectedCourse();
  }

  resetSelectedCourse() {
    const emptyCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false
    }

    this.selectedCourse = emptyCourse;
  }

  selectCourse(course) { 
    this.selectedCourse = course;
  }

  saveCourse() {
    
  }

  deleteCourse(courseId) {
    this.courses = this.courses.filter(course => course.id !== courseId);
  }
  
  cancel() {
    this.resetSelectedCourse();
  }
}
