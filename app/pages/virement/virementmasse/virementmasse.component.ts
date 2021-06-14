import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import bsCustomFileInput from 'bs-custom-file-input';

@Component({
  selector: 'app-virementmasse',
  templateUrl: './virementmasse.component.html',
  styleUrls: ['./virementmasse.component.scss']
})

/**
 * Form-elements component
 */
export class VirementMasseComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Virement' }, { label: 'Virement de Masse', active: true }];
    bsCustomFileInput.init();
  }
}
