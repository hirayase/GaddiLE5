import { Component } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Post } from 'src/app/models/post.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})

export class PostDetailComponent {
  private routeSub: Subscription = new Subscription();
  private id: number = 0;
  post?: Post;

constructor(
	private route: ActivatedRoute,
	private http: HttpClient
){}

ngOnInit(): void {
	this.routeSub = this.route.params.subscribe(params => {
		this.id = params['id'];
		})
		this.initData(); 
	}

initData(): void {
	this.http.get<Post>("https://localhost:7199/api/Post/" + this.id).subscribe({
		next: (data: Post) => { 
			this.post = data;
			console.log(this.post);
			}
		})
}

}



