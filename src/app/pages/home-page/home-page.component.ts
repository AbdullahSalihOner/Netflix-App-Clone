import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(private _movieService: MovieService) { }

  ngOnInit() : void{
    this._movieService.getMovies().subscribe(
      data => {
        console.log(data);
      }
    )
  }
}
