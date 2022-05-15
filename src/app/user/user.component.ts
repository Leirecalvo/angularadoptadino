import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(public UserService:UserService) { }

  ngOnInit(): void {
    this.getDataUsers();
  }

  objectUs?:User[];

  getDataUsers():void{
    this.UserService.getUser().subscribe(data=>
    {
      this.objectUs = data;
    })
  }

  ue:User={id: 0, mail:"", password:"", name:"", surname:"", hasDino:"No"}
  postDataUser():void{
    this.UserService.postUser(this.ue).subscribe();
    alert("Usuario registrado con éxito.");
    window.location.href=('http://localhost:4200/login');
  }

}
