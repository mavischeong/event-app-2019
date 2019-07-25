import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/user/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

	email
	password

  constructor(public authService:AuthService) { }

  ngOnInit() {
  	}

  	signupPressed(){
  		this.authService.signupUser(this.email, this.password)
  		.then(resp=>{
  			console.log(resp)
  			console.log('User successfully registered')
  		})
  		.catch(err=>{
  			console.log(err)
  		})
  	}
  }


