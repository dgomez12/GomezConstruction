import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BannerComponent } from './components/banner/banner.component';
import { QuoteComponent } from './components/quote/quote.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path:'', redirectTo: 'home', pathMatch: 'full' },
  { path:'home', component: HomeComponent },
  { path:'about', component: AboutComponent },
  { path:'portfolio', component: PortfolioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, NavBarComponent, BannerComponent, QuoteComponent, AboutComponent, PortfolioComponent]