import { Publication } from './../../publications/entities/publication.entity';
export class User {
  id: number;
  name: string;
  image: string;
  publications: Publication[];
}
