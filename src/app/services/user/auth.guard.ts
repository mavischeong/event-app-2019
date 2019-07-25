import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
	providedIn: 'root'
})
//codes below is to make sure users can only go into some page after the login. otherwise the app will direct them to login page.
//After codes below, go to app-routing-module.ts to note which page need to be guarded.
export class AuthGuard implements CanActivate {
	constructor(private router:Router) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot):boolean | 
	Observable<boolean> | Promise<boolean>{
		return new Promise((resolve,reject)=>{
			firebase.auth().onAuthStateChanged((user:firebase.User)=>{
				if (user) {
					resolve(true);
				} else {
					console.log('User is not logged in');
					this.router.navigate(['/login']);
					resolve(false);
				}
			});
		});
	}

}
