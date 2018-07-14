import { Component, OnInit } from '@angular/core';
import { TemperatureService } from '../../services/temperature.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-history-temperature-table',
  templateUrl: './history-temperature-table.component.html',
  styleUrls: ['./history-temperature-table.component.css']
})
export class HistoryTemperatureTableComponent implements OnInit {

  public tempHistory = [];
  public tempHistoryToShow = [];
  private initRow = 0;
  private endRow = 10;
  public name: string;
  public totalRows = 0;
  constructor(private temperatureService: TemperatureService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getHistory();
  }

  getHistory() {
    const id = this.route.snapshot.paramMap.get('id');
    this.name = this.route.snapshot.paramMap.get('name');
    this.tempHistory = JSON.parse(this.temperatureService.getHistory(id));
    if (this.tempHistory) {
      this.totalRows = this.tempHistory.length;
      this.tempHistoryToShow = this.tempHistory.slice(this.initRow, this.endRow);
    }
  }

  nextRows() {
    this.initRow = this.initRow - 10;
    this.endRow = this.endRow - 10;
    this.tempHistoryToShow = this.tempHistory.slice(this.initRow, this.endRow);
    // if is last page we select the same rows
    if (this.tempHistoryToShow.length === 0) {
      this.initRow = this.initRow + 10;
      this.endRow = this.endRow + 10;
      this.tempHistoryToShow = this.tempHistory.slice(this.initRow, this.endRow);
    }
  }

  previousRows() {
    if (this.tempHistoryToShow.length >= 9) {
      this.initRow = this.initRow + 10;
      this.endRow = this.endRow + 10;
      this.tempHistoryToShow = this.tempHistory.slice(this.initRow, this.endRow);
    }
  }
}
