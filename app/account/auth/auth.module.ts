import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { UiModule } from '../../shared/ui/ui.module';


import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [LoginComponent, SignupComponent, PasswordresetComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        NgbAlertModule,
        UiModule,
        RouterModule
    ]
})
export class AuthModule { }
