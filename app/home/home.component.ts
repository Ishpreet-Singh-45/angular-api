import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit
{
	courses = ['course1', 'course2', 'course3', 'course4']
	coursesList = {
	    show: false,
	    title: 'Show'
	}

	constructor()
	{}


	ngOnInit(): void
	{}


	showList()
	{
		this.coursesList.show = !this.coursesList.show
		this.coursesList.title = this.coursesList.show ? 'Hide' : 'Show'
	}


}
