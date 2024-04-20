import { Component, Input, OnInit, input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css'
})
export class LazyImageComponent implements OnInit{


  @Input()
  public urlImage!: string;

  @Input()
  public altImage?:string;


  public hasLoaded:boolean = false;



  ngOnInit(): void {
    if(!this.urlImage) throw new Error('URL propiety required')
  }

  onLoad(){
   setTimeout(() => {
    this.hasLoaded = true;
   }, 1000);
  }


}
