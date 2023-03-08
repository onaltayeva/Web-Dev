import {Component, OnInit} from '@angular/core';
import {Photo} from "../models";
import {AlbumService} from "../album.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit{
  photos: Photo[];
  id: number;
  loaded: boolean;

  constructor(private albumService: AlbumService, private route: ActivatedRoute) {
    this.photos = [];
    this.loaded = true;
    this.id = -1;
  }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {

    this.route.paramMap.subscribe((p)=>{
      this.id = Number(p.get('id'));
    })
    this.loaded = false;
    this.albumService.getAlbumPhotos(this.id).subscribe((photos) => {
      this.photos = photos;
      this.loaded = true;
    })
  }
}
