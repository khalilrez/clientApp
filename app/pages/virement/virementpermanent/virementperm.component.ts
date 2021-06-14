import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import bsCustomFileInput from 'bs-custom-file-input';

@Component({
  selector: 'app-virementPerm',
  templateUrl: './virementPerm.component.html',
  styleUrls: ['./virementPerm.component.scss']
})

/**
 * Form-elements component
 */
export class VirementPermComponent implements OnInit {

  // bread crumb items
  breadCrumbItems: Array<{}>;

  constructor() { }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Virement' }, { label: 'Virement Permanent', active: true }];
    bsCustomFileInput.init();
  }
}
