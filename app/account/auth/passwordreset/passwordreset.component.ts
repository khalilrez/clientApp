import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-passwordreset',
  templateUrl: './passwordreset.component.html',
  styleUrls: ['./passwordreset.component.scss']
})

/**
 * Reset-password component
 */
export class PasswordresetComponent implements OnInit, AfterViewInit {

  resetForm: FormGroup;
  submitted = false;
  error = '';
  returnUrl: string;

  // set the currenr year
  year: number = new Date().getFullYear();

  ngAfterViewInit(): void {
  }
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    document.body.removeAttribute('data-layout');
    document.body.classList.add('auth-body-bg');
  }
  get f() { return this.resetForm.controls; }
  onSubmit() {}

}
