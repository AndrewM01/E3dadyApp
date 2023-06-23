import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  open:boolean=true
  isAdminPage: boolean=false


  constructor(private router: Router,public authService:AuthService) {}

  ngOnInit(){
    this.isAdminPage=this.router.url.includes('admin')
    console.log(this.isAdminPage)
  }

  tog(){
    this.open=!this.open
  }



}
