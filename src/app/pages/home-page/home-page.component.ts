import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { HeaderComponent } from "./components/header/header.component";
import { BannerComponent } from "./components/banner/banner.component";
import { MovieCarouselComponent } from "./components/movie-carousel/movie-carousel.component";
import { AuthService } from '../../services/auth.service';
import { Observable, forkJoin, map } from 'rxjs';
import { IVideoContent } from '../../models/video-content.interface';

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss',
    imports: [CommonModule,HeaderComponent, BannerComponent, MovieCarouselComponent]
})
export class HomePageComponent {
  constructor(private _router:Router,private movieService: MovieService, private _authService: AuthService) { }




  name = "Talha Alataş";
  userProfileImg = "https://avatars.githubusercontent.com/u/47273253?v=4";
  bannerDetail$ = new Observable<any>();
  bannerVideo$ = new Observable<any>();

  movies: IVideoContent[] = [];
  tvShows: IVideoContent[] = [];
  ratedMovies: IVideoContent[] = [];
  nowPlayingMovies: IVideoContent[] = [];
  popularMovies: IVideoContent[] = [];
  topRatedMovies: IVideoContent[] = [];
  upcomingMovies: IVideoContent[] = [];

  /* sources = [
    this.movieService.getMovies(),
    this.movieService.getTvShows(),
    this.movieService.getRatedMovies(),
    this.movieService.getNowPlayingMovies(),
    this.movieService.getUpcomingMovies(),
    this.movieService.getPopularMovies(),
    this.movieService.getTopRated()
  ];


  ngOnInit(): void {
    forkJoin(this.sources)
    .pipe(
      map(([movies, tvShows, ratedMovies, nowPlaying, upcoming, popular, topRated])=>{
        this.bannerDetail$ = this.movieService.getBannerDetail(movies.results[1].id);
        this.bannerVideo$ = this.movieService.getBannerVideo(movies.results[1].id);
        return {movies, tvShows, ratedMovies, nowPlaying, upcoming, popular, topRated}
      })
    ).subscribe((res:any)=>{
      this.movies = res.movies.results as IVideoContent[];
      this.tvShows = res.tvShows.results as IVideoContent[];
      this.ratedMovies = res.ratedMovies.results as IVideoContent[];
      this.nowPlayingMovies = res.nowPlaying.results as IVideoContent[];
      this.upcomingMovies = res.upcoming.results as IVideoContent[];
      this.popularMovies = res.popular.results as IVideoContent[];
      this.topRatedMovies = res.topRated.results as IVideoContent[];
      this.getMovieKey();
    })
  }

  getMovieKey() {
    this.movieService.getBannerVideo(this.movies[0].id)
    .subscribe(res=>{
      console.log(res);
    })
  }

  singOut() {
    sessionStorage.removeItem("loggedInUser");
    this._authService.signOut();
    this._router.navigate(["/login"]);

  } */

}
