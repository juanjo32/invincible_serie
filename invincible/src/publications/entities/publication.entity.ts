import { User } from './../../users/entities/user.entity';
import { Comment } from './../../comments/entities/comments.entity';

export class Publication {
  id: number;
  tittle: string;
  content: string;
  image: string;
  date: Date;
  user: User;
}
