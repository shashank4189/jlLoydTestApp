import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompanyComponent } from './manageCompany/company.component';
import { ListCompanyComponent } from './manageCompany/listCompany.component';

const routes: Routes = [
    {
        path: '',
        component: AppComponent,
    },
    {
        path: 'listCompany',
        component: ListCompanyComponent,
    },
    {
        path: 'addCompany',
        component: CompanyComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
