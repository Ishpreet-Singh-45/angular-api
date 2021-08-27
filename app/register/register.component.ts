import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Components




@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit
{

	constructor()
	{ }

	ngOnInit(): void
	{
	}

	// console.log(user_name.invalid);
	// console.log(user_name.touched);
	// console.log(user_name.)

	registerForm = new FormGroup(
	{
		user_name: new FormControl('', [
			Validators.required,
			Validators.minLength(3),
			Validators.maxLength(25)
			]),

		user_email: new FormControl('', [
			Validators.required,
			Validators.email
			]),

		user_contact: new FormControl('', [
			Validators.required,
			Validators.pattern('')
			]),

		user_password: new FormControl('', [
			Validators.required
			]),

		user_cpassword: new FormControl('', [
			Validators.required
			])

	})

	get user_name()
	{
		return this.registerForm.get('user_name')
	}
	get user_email()
	{
		return this.registerForm.get('user_email')
	}

	get user_contact()
	{
		return this.registerForm.get('user_contact')
	}

	get user_password()
	{
		return this.registerForm.get('user_password')
	}

	get user_cpassword()
	{
		return this.registerForm.get('user_cpassword')
	}



}
