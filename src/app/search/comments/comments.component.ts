import { Component, Input, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { Review } from 'src/app/models/review';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() id!: number;
  buttonView!: boolean;
  commentView!: boolean;
  controlComment = [true];
  reviews!: [Review];
  comment!: string;

  constructor(
    private commentService: CommentService
  ){
    this.commentView = false;
    this.buttonView = true;
  }

  ngOnInit(): void {
  }

  getComments(): void{
    this.commentService.getComments(this.id).subscribe((comment: Comment) => {
      this.makeControlComments(comment.reviews.length);
      this.reviews = comment.reviews;
      this.reviews.forEach(ele => {
        ele.resume = ele.content.substring(0, 75);
      });
    })
  }

  setButton(){
    this.buttonView = true;
    this.commentView = false;
  }

  showComentarios(): void{
    this.commentView = true;
    this.buttonView = false;
    this.getComments();
  }

  makeControlComments(tam: number): void{
    for(let i = 0; i < tam-1; i++){
      this.controlComment.push(true)
    }
  }

  controlComments(idx: number): void{
    this.controlComment[idx] = !this.controlComment[idx];
  }
}
