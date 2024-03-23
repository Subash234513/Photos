import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos-shower',
  templateUrl: './photos-shower.component.html',
  styleUrls: ['./photos-shower.component.scss']
})
export class PhotosShowerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  data:any='../../assets/wallpaper1.jpeg'
  List=['./assets/wallpaper1.jpeg','./assets/wallpaper2.jpeg','./assets/wallpaper3.jpeg','./assets/wallpaper4.jpeg','./assets/wallpaper5.jpeg','./assets/wallpaper6.jpeg','./assets/wallpaper7.jpeg','./assets/wallpaper8.jpeg','./assets/wallpaper9.jpeg','./assets/wallpaper10.jpeg','./assets/wallpaper11.jpeg','./assets/wallpaper12.jpeg','./assets/wallpaper13.jpeg','./assets/wallpaper14.jpeg']
  Image(data){
    this.data=data
  }
}
