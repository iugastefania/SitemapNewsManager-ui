import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Url } from '../models/url.model';

@Component({
  selector: 'app-article-thumbnail',
  templateUrl: './article-thumbnail.component.html',
  styleUrls: ['./article-thumbnail.component.css']
})
export class ArticleThumbnailComponent {
  @Input() article!: Url;
  // @Output() edit: EventEmitter<Url> = new EventEmitter<Url>();
  // @Output() delete: EventEmitter<Url> = new EventEmitter<Url>();
  // @Output() readArticle: EventEmitter<string> = new EventEmitter<string>();

  // onEditClick() {
  //   this.edit.emit(this.article);
  // }

  // onDeleteClick() {
  //   this.delete.emit(this.article);
  // }

  // onReadArticleClick(url: string) {
  //   this.readArticle.emit(url);
  // }
}
