import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api.service';
import Validation from "../utils/validation"


// Components




@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit
{
	submitted = false

	constructor(private user:ApiService,
		private router: Router,
		private toastr: ToastrService
		)
	{ }

	ngOnInit(): void
	{}

	registerForm = new FormGroup(
	{
		user_name: new FormControl('', [
			Validators.required,
			Validators.minLength(3),
			Validators.maxLength(25),
			Validators.pattern('^([a-zA-Z\' \']*)$')
			]),

		user_email: new FormControl('', [
			Validators.required,
			Validators.email,
			]),

		user_contact: new FormControl('', [
			Validators.required,
			Validators.pattern('^([0-9]*)$'),
			Validators.minLength(10),
			Validators.maxLength(12)
			]),

		user_password: new FormControl('', [
			Validators.required,
			Validators.minLength(6),
			Validators.maxLength(25),
			Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$')
			]),

		user_cpassword: new FormControl('', [
			Validators.required,
			])
	},
	// adding form group validator to second parameter of form group
	{
		validators: [Validation.match('user_password', 'user_cpassword')] // call the match function to check the mismatch
	})


	// get all form values with form getter function
	get form():	{ [key: string]: AbstractControl }
	{
		return this.registerForm.controls
	}

	onSubmit(data: any)
	{
		console.log(data)
		return this.user.setUserData(data).subscribe((response)=>
		{
			// console.log(response)
			if(response == 'Registration Success')
			{
				this.toastr.success(response)
				this.router.navigate(['/'])
			}else
			{
				this.toastr.error(response);

			}


		})
		this.submitted = true

		// console.log(JSON.stringify(this.registerForm.value, null, 2))
	}

	onReset(): void
	{
		this.submitted = false;
		this.registerForm.reset()
	}


}
