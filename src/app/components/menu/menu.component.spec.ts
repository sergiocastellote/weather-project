import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from '../../app.component';
import { HeaderComponent } from '../../components/header/header.component';
import { AppRoutingModule } from '../../app-routing.module';
import { ShowTemperatureComponent } from '../../views/show-temperature/show-temperature.component';
import { ShowHistorialComponent } from '../../views/show-historial/show-historial.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SelectLanguageComponent } from '../../components/select-language/select-language.component';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MenuComponent } from '../../components/menu/menu.component';
import { CurrentTemperatureTableComponent } from '../../components/current-temperature-table/current-temperature-table.component';
import { HistoryTemperatureTableComponent } from '../../components/history-temperature-table/history-temperature-table.component';
import { ReversePipe } from '../../pipes/reverse.pipe';
import {APP_BASE_HREF} from '@angular/common';
import { TemperatureService } from '../../services/temperature.service';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [
            AppComponent,
            HeaderComponent,
            ShowTemperatureComponent,
            ShowHistorialComponent,
            FooterComponent,
            SelectLanguageComponent,
            MenuComponent,
            CurrentTemperatureTableComponent,
            HistoryTemperatureTableComponent,
            ReversePipe
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
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
