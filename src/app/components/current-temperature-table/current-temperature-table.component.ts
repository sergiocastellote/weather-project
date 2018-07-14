import { Component, OnInit } from '@angular/core';
import { TemperatureService } from '../../services/temperature.service';
import { CityList } from '../../classes/city-list';

@Component({
  selector: 'app-current-temperature-table',
  templateUrl: './current-temperature-table.component.html',
  styleUrls: ['./current-temperature-table.component.css']
})
export class CurrentTemperatureTableComponent implements OnInit {


  public time;
  public cityListTemp = new CityList();

  constructor(private temperatureService: TemperatureService) { }

  ngOnInit() {
    if (!this.temperatureService.intervalStarted) {
      this.getTemperaturesEvery10Min();
    }
    this.getCurrentTemperatures();
  }


  getTemperaturesEvery10Min() {
    setInterval(() => {
      this.temperatureService.intervalStarted = true;
      this.cityListTemp = new CityList();
      this.getCurrentTemperatures();
    }, 180000);
  }



  getCurrentTemperatures(): void {
    this.temperatureService.getCurrentTemperatures()
      .subscribe(temperatures => {
        this.time = new Date().toLocaleString();
        this.cityListTemp.list = temperatures.list;
        this.temperatureService.writeOnLocalStorage(this.cityListTemp.list, this.time);
      }, error => {
        alert(error);
      });
  }

}
