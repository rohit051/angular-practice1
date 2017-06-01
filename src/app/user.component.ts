import { Component } from '@angular/core';

@Component({
  selector: 'user',
  template: `
  <h1>Hello {{name}}</h1>
  <h2>{{surname}}</h2>
  <p>{{hobbies.sports}} 
  {{hobbies.music}}</p>

	<input #box (keyup.enter)="update(box.value)" (blur)="update(box.value)" (keyup)="update(box.value)">
    <p>{{values}}</p>

	<button (click)="togglestate()">{{showstate ? "Hide" : "Show"}} state</button>

	<div *ngIf="showstate">
	  <ul>
	<li *ngFor="let states of state">
	{{states}}
	</li>
	  </ul>
	  <form (submit)="addstate(states.value)">
	<label>Add State:</label>
	<input type="text" #states ><br/>
	  </form>
	  </div>
	  <h3> Edit User</h3>
	<form>
	<label> Name:</label>
	<input type="text" name="name" [(ngModel)]="name"><br/>
	<label> SurName:</label>
	<input type="text" name="surname" [(ngModel)]="surname"><br/>

	<label> Sports:</label>
	<input type="text" name="hobbies.sports" [(ngModel)]="hobbies.sports"><br/>

	<label> Music:</label>
	<input type="text" name="hobbies.music" [(ngModel)]="hobbies.music"><br/>
	</form>
  `,
})
export class UserComponent  { 

	 values = '';
  	 update(value: string) {
     this.values += value + ' | ';
  }

	name:string ;
	surname:string;
	hobbies:hobbies;
	state:string[];
	showstate:boolean;

	constructor(){
	this.name = 'Rohit';
	this.surname='pal',
	this.hobbies= {
	sports:'cricket',
	music:'arijit'
	 }

	 this.state=['up','delhi','mp'];
	 this.showstate=false;

 }

	 togglestate(){
 		if(this.showstate==false){
 			this.showstate=true;
 		}
 	else{
 			this.showstate=false;
 		}
 	}
 	
 		addstate(states)
 		{
 			this.states.push(state);
	 	}
}
	
		interface hobbies {
		sports:string;
		music:string;
	}
