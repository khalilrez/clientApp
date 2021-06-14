import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import bsCustomFileInput from 'bs-custom-file-input';

@Component({
  selector: 'app-virementbenef',
  templateUrl: './virementbenef.component.html',
  styleUrls: ['./virementbenef.component.scss']
})

/**
 * Form-elements component
 */
export class VirementBeneficiaireComponent implements OnInit {

  BenefForm: FormGroup;
  submitted = false;
  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Virement' }, { label: 'Virement Vers Bénéficiaire', active: true }];
    bsCustomFileInput.init();

    this.BenefForm = this.formBuilder.group({
      comptedebit: ['', Validators.required],
      comptecredit: ['', Validators.required],
      devise: ['', [Validators.required]],
      montant: ['', [Validators.required]],
      motifpaiement: ['', [Validators.required]],
      dateexec: ['', Validators.required],
      beneficiaire: ['', Validators.required],
      raisonsocial: ['', Validators.required],
      banque: ['', Validators.required],
      numcompte: ['', Validators.required]
  });
}
 // convenience getter for easy access to form fields
 get f() { return this.BenefForm.controls; }

 onSubmit() {
     this.submitted = true;

     // stop here if form is invalid
     if (this.BenefForm.invalid) {
         return;
     }

     alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.BenefForm.value))
 }
}
