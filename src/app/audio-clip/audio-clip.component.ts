import { Component, OnInit, Input } from '@angular/core';
import { Howl, Howler } from 'howler';
@Component({
  selector: 'AudioClipComponent',
  templateUrl: './audio-clip.component.html',
  styleUrls: ['./audio-clip.component.less']
})
export class AudioClipComponent implements OnInit {
  @Input() filePath: string;
  sound: Howl;
  constructor() {
    
  }
  
  ngOnInit() {
    console.log(this.filePath)
    this.sound = new Howl({
      src: [this.filePath],
      
    });
    this.sound.play();
    console.log(this.sound.playing());
    // Play the sound.
    
    // Change global volume.
    //Howler.volume(1.0);
  }
  toggle(){
    if(this.sound.playing())
    {
      this.sound.pause();
    }
    else
    {
      this.sound.play();
    }
  }
}
