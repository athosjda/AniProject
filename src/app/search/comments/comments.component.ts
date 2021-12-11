import { Component, OnInit } from '@angular/core';
import { Comment } from 'src/app/models/comment';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  id!: number;
  comments!: [{}];

  constructor(
    private commentService: CommentService
  ){}

  ngOnInit(): void {
  }

  getComments(): void{
    this.commentService.getComments(this.id).subscribe((comment: Comment) => {
      this.comments = comment.reviews;
    })
  }

}
