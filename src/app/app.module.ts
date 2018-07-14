import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShowTemperatureComponent } from './views/show-temperature/show-temperature.component';
import { ShowHistorialComponent } from './views/show-historial/show-historial.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TemperatureService } from './services/temperature.service';
import { ReversePipe } from './pipes/reverse.pipe';
import { CurrentTemperatureTableComponent } from './components/current-temperature-table/current-temperature-table.component';
import { HistoryTemperatureTableComponent } from './components/history-temperature-table/history-temperature-table.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SelectLanguageComponent } from './components/select-language/select-language.component';
import {APP_BASE_HREF} from '@angular/common';


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShowTemperatureComponent,
    ShowHistorialComponent,
    MenuComponent,
    ReversePipe,
    CurrentTemperatureTableComponent,
    HistoryTemperatureTableComponent,
    SelectLanguageComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [TemperatureService, {provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
