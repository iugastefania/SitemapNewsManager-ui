import { Component, Input } from '@angular/core';
import { Url } from '../url.model';

@Component({
  selector: 'app-article-thumbnail',
  templateUrl: './article-thumbnail.component.html',
  styleUrls: ['./article-thumbnail.component.css']
})
export class ArticleThumbnailComponent {
  @Input() article!: Url;
}
