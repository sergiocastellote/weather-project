import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryTemperatureTableComponent } from './history-temperature-table.component';
import { ReversePipe } from '../../pipes/reverse.pipe';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TemperatureService } from '../../services/temperature.service';
import { AppRoutingModule } from '../../app-routing.module';
import { ShowTemperatureComponent } from '../../views/show-temperature/show-temperature.component';
import { ShowHistorialComponent } from '../../views/show-historial/show-historial.component';
import { MenuComponent } from '../../components/menu/menu.component';
import { CurrentTemperatureTableComponent } from '../../components/current-temperature-table/current-temperature-table.component';
import {APP_BASE_HREF} from '@angular/common';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}


describe('HistoryTemperatureTableComponent', () => {
  let component: HistoryTemperatureTableComponent;
  let fixture: ComponentFixture<HistoryTemperatureTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        HistoryTemperatureTableComponent, 
        ReversePipe,
        ShowTemperatureComponent,
        ShowHistorialComponent,
        MenuComponent,
        CurrentTemperatureTableComponent
        ], 
        imports: [
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
        providers: [TemperatureService, {provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(HistoryTemperatureTableComponent);
    component = fixture.componentInstance;


  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
