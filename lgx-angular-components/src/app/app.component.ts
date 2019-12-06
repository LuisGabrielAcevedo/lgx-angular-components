import { Component, OnInit } from '@angular/core';
import { NgxSimpleCryptService } from './services/ngx-simple-crypt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lgx-angular-components';

  constructor(public ngxSimpleCry: NgxSimpleCryptService) {
    // ngx-simple-crypt
    const password = this.ngxSimpleCry.encode('95666081');
    console.log(password);
    const decodePassword = this.ngxSimpleCry.decode(password);
    console.log(decodePassword);
    const user = this.ngxSimpleCry.encodeObject({password: 95666081 , user: 'Luis Gabriel Acevedo'});
    console.log(user);
    const decodeUser = this.ngxSimpleCry.decodeObject(user);
    console.log(decodeUser);
  }

  ngOnInit() {
  }
}
