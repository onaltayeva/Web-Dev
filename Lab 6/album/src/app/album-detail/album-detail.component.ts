import {Component, OnInit} from '@angular/core';
import {Album} from "../models";
import {ActivatedRoute} from "@angular/router";
import {ALBUMS} from "../fakedb";
import {AlbumService} from "../album.service";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit{
  album: Album;
  loaded: boolean;
  tempAlbum: Album;
  constructor(private route: ActivatedRoute, private albumService: AlbumService) {
    this.album = {} as Album;
    this.loaded = true;
    this.tempAlbum  = {} as Album;
  }

  ngOnInit(): void {
    this.getAlbum();
  }

  getAlbum() {
    // const id = Number(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get("id"));
      // this.album = ALBUMS.find((album) => album.id === id) as Album;
      this.loaded = false;
      this.albumService.getAlbum(id).subscribe(
        (album) => {
          this.album = album;
          this.loaded = true;
        }
      )
    });
  }

  updateAlbumTitle() {
    this.tempAlbum.id = this.album.id;
    this.tempAlbum.userId = this.album.id;
    this.loaded = false;
    this.albumService.updateAlbum(this.tempAlbum, this.album.id).subscribe((album)=>{
      this.album = album;
      this.loaded = true;
    });
    this.tempAlbum = {} as Album;
  }
}
