import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';
import { MarketNamePipe } from './pipes/market-name.pipe'; 

@NgModule({
  declarations: [],
  imports: [ 
    MarketNamePipe,
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}