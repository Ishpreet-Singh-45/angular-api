import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";



interface Data
{
	email: string,
	password: string
}


@Injectable()
{
	providedIn: "root"
}

export class ApiService 
{
	url = "http://localhost/crudapi/auth"

	constructor(private http: HttpClient)
	{}



	getUserData(id: number)
	{
		console.log(`Get Request receieved: for id: ${id}\n`)
	}



	setUserData(data: Data)
	{
		console.log(`Post Request receieved: for data: ${data} \n\n`);
		this.http.post(`${this.url}/a`,data);
	}

	updateUserData(data: Data)
	{
		console.log(`Update Request receieved. \nData receieved: ${data}\n\n`);
		this.http.put(`${this.url}/u`, data, {headers: new HttpHeaders().set('Access-Control-Allow-Origin', '*')})
	}

	deleteUserData(id: number)
	{
		console.log(`Delete Request receieved.for id - ${id} \nIn Process...`)
		this.http.delete(`${this.url}/d/${id}`)

	}
}
