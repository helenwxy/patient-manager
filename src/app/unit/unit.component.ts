import { Component, OnInit } from '@angular/core';
import {Room} from './room.model';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {
  rooms: Room[] = [new Room('386-1', 'droplet', 'positive flu')];
  constructor() { }

  ngOnInit() {
  }

  public onRoomAdded(room: Room) {
    this.rooms.push(room);
  }
}
