import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit
{
	submitted = false

	constructor(private user: ApiService,
		private toastr: ToastrService,
		private router: Router)
	{
		if(localStorage.getItem('email'))
		{
			this.router.navigate(['/home'])
		}
	}

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

	onSubmit(data: any)
	{
		// console.log('Login Data: ', data);
		this.user.getUserData(data).subscribe((response) =>
		{
			// console.log(response)
			if(response == "Logged In")
			{
				this.toastr.success(response);
				localStorage.setItem('email', data.user_email)
				this.router.navigate(['/home'])
			}else
			{
				this.toastr.error(response)
			}

		})

		// console.log(JSON.stringify(this.registerForm.value, null, 2))
	}
}
