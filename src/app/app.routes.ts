import {Routes} from "@angular/router";
import {WelcomeComponent} from "./home/welcome.component";

export let routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
];
