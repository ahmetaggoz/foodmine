import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  constructor(private router: ActivatedRoute, private router2: Router){
    this.router.params.subscribe(params=>{
      if(params['searchTerm'])
        this.searchTerm = params['searchTerm'];
    })
  }

  search(): void {
    if(this.searchTerm)
    this.router2.navigateByUrl('/search/'+ this.searchTerm);
  }
  searchTerm: string = "";

}
