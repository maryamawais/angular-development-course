import { Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './components/layout/layout.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContentComponent } from './components/main-content/main-content.component';

export const routes: Routes = [
   {
    path: 'home',component: MainContentComponent
   },
   {
    path: 'contact us', component: MainContentComponent
   },
   {
    path: 'about', component: MainContentComponent
   },
   {
    path: 'info.', component: MainContentComponent
   },
   {
    path: 'others', component: MainContentComponent
   },
];
