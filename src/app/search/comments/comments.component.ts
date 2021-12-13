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
  controlComment: boolean = true;
  buttonView: boolean = true;
  reviews!: [Review];
  comment!: string;

  constructor(
    private commentService: CommentService
  ){}

  ngOnInit(): void {
  }

  getComments(): void{
    this.commentService.getComments(this.id).subscribe((comment: Comment) => {
      this.reviews = comment.reviews;
      this.reviews.forEach(ele => {
        ele.resume = ele.content.substring(0, 75)+'...';
      });
    })
  }

  showComentarios(): void{
    this.buttonView = false;
    this.getComments();
  }

  controlComments(): void{
    this.controlComment = !this.controlComment;
  }
}
