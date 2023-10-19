import { Component, ElementRef, ViewChild } from '@angular/core';


export interface PeriodicElement {
  name: string;
  id: number;
  artist: string;
  url: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Sister Golden Hair', artist: 'Some Guys', url: 'https://www.jonathancoulton.com/wp-content/uploads/encodes/Some_Guys/mp3/01_Sister_Golden_Hair_mp3_8961f17.mp3'},
  {id: 2, name: 'Wake Up', artist: 'Solid State', url: 'https://www.jonathancoulton.com/wp-content/uploads/encodes/Solid_State/mp3/01_Wake_Up_mp3_a024ffd.mp3'},
  {id: 3, name: 'Glasses', artist: 'Artificial Heart', url: 'https://www.jonathancoulton.com/wp-content/uploads/encodes/Artificial_Heart/mp3/07_Glasses_mp3_048e1ad.mp3'},
  {id: 4, name: 'I\'m Having a Party', artist: 'Smoking Monkey', url: 'https://www.jonathancoulton.com/wp-content/uploads/encodes/Smoking_Monkey/mp3/01_Im_Having_a_Party_mp3_3da9071.mp3'},
  {id: 5, name: 'Octopus', artist: 'The Aftermath', url: 'https://www.jonathancoulton.com/wp-content/uploads/encodes/The_Aftermath/mp3/01_Octopus_mp3_29210e9.mp3'},
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['id', 'artist',  'name'];
  @ViewChild('audioOption') audioOption!: ElementRef;
  audioPath!: string

  onPlaySound(audioSrc: string) {
    this.audioPath = audioSrc
    this.audioOption?.nativeElement.load()
    this.audioOption?.nativeElement.play()
  }

}
