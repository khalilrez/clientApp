import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UiModule } from '../../shared/ui/ui.module';
import { VirementRoutingModule } from './virement-routing.module';
import { VirementCaCComponent } from './compteacompte/virementcac.component';
import { VirementMasseComponent } from './virementmasse/virementmasse.component';
import { VirementPermComponent } from './virementpermanent/virementperm.component';
import { VirementBeneficiaireComponent } from './virementversbeneficiaire/virementbenef.component';


@NgModule({
    // tslint:disable-next-line: max-line-length
    declarations: [VirementCaCComponent,VirementMasseComponent,VirementPermComponent,VirementBeneficiaireComponent],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      UiModule,
      VirementRoutingModule
      
    ]
   
  })
  export class VirementModule { }
