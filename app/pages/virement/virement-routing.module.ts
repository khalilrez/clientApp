import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {VirementCaCComponent} from './compteacompte/virementcac.component';
import {VirementMasseComponent} from './virementmasse/virementmasse.component';
import {VirementPermComponent} from './virementpermanent/virementperm.component';
import {VirementBeneficiaireComponent} from './virementversbeneficiaire/virementbenef.component';




const routes: Routes = [

    {
        path:'virementcompteacompte',
        component:VirementCaCComponent
    },
    {
        path:'virementdemasse',
        component:VirementMasseComponent
    },
    {
        path:'virementpermanent',
        component:VirementPermComponent
    },
    {
        path:'virementbeneficiaire',
        component:VirementBeneficiaireComponent
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VirementRoutingModule { }