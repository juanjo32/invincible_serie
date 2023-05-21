import { User } from './../../users/entities/user.entity';
import { Publication } from './../../publications/entities/publication.entity';

export class Comment {
  id: number;
  content: string;
  user: User;
}
