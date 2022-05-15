import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logged:boolean = false;
  hasdino:boolean = false;

  userId = JSON.parse(JSON.stringify(localStorage.getItem('userId')));
  adoptionId = JSON.parse(JSON.stringify(localStorage.getItem('adoptionId')));

  constructor(public UserService:UserService) { }

  ngOnInit(): void {
    this.hasDinoWhat();
    if(localStorage.getItem('userId')){
      this.logged = true;
    }
    if(this.dinoYes === "Yes"){
      this.hasdino = true;
    }
  }
  logout(){
    localStorage.clear();
    alert("Se ha cerrado sesión.");
    window.location.href=('http://localhost:4200');
  }
  menuResponsive(){
    const menu = <HTMLInputElement>document.querySelector('.menu-responsive');
    
    if(menu.classList.contains("displayed")){
      menu.style.display = "none";
      menu.classList.remove("displayed");
    }else{
      menu.classList.add("displayed");
      menu.style.display = "flex";
    }
  }
  dinoWhat = JSON.parse(JSON.stringify(localStorage.getItem('hasDino')));
  dinoYes:string = "";
  hasDinoWhat(){
    if(this.dinoWhat === '"Yes"'){
      this.dinoYes = "Yes";
    }else{
      this.dinoYes = "No";
    }
  }
}