import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit
{
	submitted = false

	constructor()
	{ }

	ngOnInit(): void
	{}

	registerForm = new FormGroup(
	{

		user_email: new FormControl('', [
			Validators.required,
			Validators.email
		]),

		user_password: new FormControl('', [
			Validators.required,
		])
	})


	// get all form values with form getter function
	get form():	{ [key: string]: AbstractControl }
	{
		return this.registerForm.controls
	}

	onSubmit(): void
	{
		this.submitted = true

		if(this.registerForm.invalid)
		{
			return;
		}

		console.log(JSON.stringify(this.registerForm.value, null, 2))
	}
}
