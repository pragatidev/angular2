import {Component} from '@angular/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    template: '<h1>Hello</h1><courses></courses><authors></authors>',
    directives: [CoursesComponent, AuthorsComponent],
    styleUrls: ['app.component.css']
})
export class AppComponent {
    title = 'app works!';
}
