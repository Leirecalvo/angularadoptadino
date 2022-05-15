import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(public UserService:UserService) { }

  ngOnInit(): void { 
    this.getDataUserId(this.id);
    this.hasDinoWhat();
  }
  
  objectU:User={id: 0, mail:"", password:"", name:"", surname:"",hasDino:""}
  id = JSON.parse(JSON.stringify(localStorage.getItem('userId')));
  getDataUserId(id:number):void{
    this.UserService.getUserId(id).subscribe(data=>
      {
        this.objectU = data;
      })
  }

  dinoWhat = JSON.parse(JSON.stringify(localStorage.getItem('hasDino')));

  hasDino:string = "";
  us:User={id: 0, mail:"", password:"", name:"", surname:"", hasDino:""}
  hasDinoWhat(){
    if(this.dinoWhat === '"Yes"'){
      this.hasDino = "Yes";
    }else{
      this.hasDino = "No";
    }
  }

  userName?:string;
  userSurname?:string;
  putDataUser(id:number, hasDino:string):void{
    this.us.hasDino= hasDino;
    this.UserService.putUser(id, this.us).subscribe();
    this.userName = this.us.name;
    this.userSurname = this.us.surname;
    localStorage.setItem('userName', JSON.stringify(this.userName));
    localStorage.setItem('userSurname', JSON.stringify(this.userSurname));
    window.location.href=('http://localhost:4200/user/2006' + id);
    alert("Cambios realizados con éxito.");
  }

  deleteDataUser(id:number):void{
    this.UserService.deleteUser(id).subscribe();
    localStorage.clear();
    window.location.href=('http://localhost:4200');
    alert("Usuario eliminado.");
  }

  view = false;

  editUserDisplay(){
    this.view = !this.view;
    const userOptions = <HTMLInputElement>document.getElementById('user-options');
    if (this.view){
      userOptions.innerHTML = "Cerrar";
    }else if(!this.view){
      userOptions.innerHTML = "Editar usuario";
    }
  } 
}
