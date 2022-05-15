import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginService } from '../login.service';
import { UserService } from '../user.service';
import { Adoption } from '../adoption';
import { AdoptionService } from '../adoption.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mail?:string;
  password?:string;
  
  constructor(public LoginService:LoginService, public UserService:UserService, public AdoptionService:AdoptionService) { }

  ngOnInit(): void {
    this.getDataUsers();
    this.getDataAdoption();
  }
  
  objectUs?:User[];
  
  getDataUsers():void{
    this.LoginService.getUser().subscribe(data=>
    {
      this.objectUs = data;
    })
  }

  objectAd?:Adoption[];
  getDataAdoption():void{
    this.AdoptionService.getAdoption().subscribe(data =>
    {
      this.objectAd = data;
    })
  }

  userName?:string;
  userSurname?:string;
  userId?:number;
  hasDino?:string;
  login() {
    if(this.objectUs != undefined){
      this.objectUs.forEach(element => {
        if(this.mail === element.mail && this.password === element.password){
          this.userName = element.name;
          this.userSurname = element.surname;
          this.userId = element.id;
          this.hasDino = element.hasDino;
          localStorage.setItem('userName', JSON.stringify(this.userName));
          localStorage.setItem('userSurname', JSON.stringify(this.userSurname));
          localStorage.setItem('userId', JSON.stringify(this.userId));
          localStorage.setItem('hasDino', JSON.stringify(this.hasDino));
          if(element.hasDino === 'Yes'){
            this.getDataAdoption();
            this.objectAd?.forEach(elem => {
              if(elem.userId === this.userId){
                localStorage.setItem('adoptionId', JSON.stringify(elem.id));
              }
            });
          }
         }
      });
    }
    window.location.href=('http://localhost:4200');
  }
}