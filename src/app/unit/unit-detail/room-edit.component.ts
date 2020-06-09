import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Room} from '../room.model';

@Component({
  selector: 'app-unit-detail',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.css']
})
export class RoomEditComponent implements OnInit {
  // @ts-ignore
  @ViewChild('roomInput') roomInputRef: ElementRef;
  // @ts-ignore
  @ViewChild('isoInput') isolationInputRef: ElementRef;
  // @ts-ignore
  @ViewChild('reasonInput') reasonInputRef: ElementRef;
  @Output() roomAdded = new EventEmitter<Room>();

  constructor() { }

  ngOnInit() {
  }

  public onAddItem() {
    const roomNo = this.roomInputRef.nativeElement.value;
    const iso = this.isolationInputRef.nativeElement.value;
    const reasonForIso = this.reasonInputRef.nativeElement.value;
    const newRoom = new Room(roomNo, iso, reasonForIso);
    this.roomAdded.emit(newRoom);
  }


}
