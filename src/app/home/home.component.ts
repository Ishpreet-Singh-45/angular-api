import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

	constructor(private router: Router)
	{
		if(!localStorage.getItem('email'))
		{
			this.router.navigate(['/'])
		}
	}


	ngOnInit(): void
	{}


	showList()
	{
		this.coursesList.show = !this.coursesList.show
		this.coursesList.title = this.coursesList.show ? 'Hide' : 'Show'
	}

	logOut()
	{
		localStorage.removeItem('email');
		this.router.navigate(['/'])
	}


}
