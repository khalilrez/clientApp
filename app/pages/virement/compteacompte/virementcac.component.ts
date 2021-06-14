import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import bsCustomFileInput from 'bs-custom-file-input';

@Component({
  selector: 'app-virementcac',
  templateUrl: './virementcac.component.html',
  styleUrls: ['./virementcac.component.scss']
})


 export class VirementCaCComponent implements OnInit {

  CACForm: FormGroup;
  submitted = false;
 
  breadCrumbItems: Array<{}>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Virement' }, { label: 'Virement Compte à Compte', active: true }];
    bsCustomFileInput.init();

    this.CACForm = this.formBuilder.group({
      comptedebit: ['', Validators.required],
      comptecredit: ['', Validators.required],
      devise: ['', [Validators.required]],
      montant: ['', [Validators.required]],
      motifpaiement: ['', [Validators.required]],
      dateexec: ['', Validators.required]
  });
}

 get f() { return this.CACForm.controls; }

 onSubmit() {
     this.submitted = true;

    
     if (this.CACForm.invalid) {
         return;
     }

     alert('SUCCESS!! :-)\n\n');
 }
}
