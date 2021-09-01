import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";




@Injectable({
	providedIn:'root'
})



export class ApiService 
{
	url = "http://localhost:3500/auth"

	constructor(private http: HttpClient)
	{}



	getUserData(data: any)
	{
		// console.log(`Get Request receieved: for user email: ${data.user_email}\n`)
		return this.http.post(`${this.url}/login`, data,{ responseType: 'text'})
	}



	setUserData(data:any)
	{
		// console.log(`Post Request receieved: for data: ${data} \n\n`);
		return this.http.post(`${this.url}/register`,data, {responseType: 'text'});
	}

	deleteUserData(id: number)
	{
		console.log(`Delete Request receieved.for id - ${id} \nIn Process...`)
		this.http.delete(`${this.url}/d/${id}`)

	}
}
