import { Injectable, NotFoundException } from '@nestjs/common';
import { Publication } from './../entities/publication.entity';
import {
  CreatePublicationDto,
  UpdatePublicationDto,
} from './../dtos/publications.dtos';

@Injectable()
export class PublicationsService {
  private counterId = 1;
  private publications: Publication[] = [
    {
      id: 1,
      tittle: 'Sera o no sera',
      content: 'Deproto es o depronto no es',
      image: 'url image',
    },
  ];
  findAll() {
    return this.publications;
  }
  findOne(id: number) {
    const publication = this.publications.find((item) => item.id === id);
    if (!publication) {
      throw new NotFoundException(`Publications ${id} does not exists`);
    }
    return publication;
  }
  create(payload: CreatePublicationDto) {
    this.counterId = this.counterId + 1;
    const newPublication = {
      id: this.counterId,
      ...payload,
    };
    this.publications.push(newPublication);
    return newPublication;
  }
  update(id: number, payload: UpdatePublicationDto) {
    const publication = this.findOne(id);
    if (publication) {
      const index = this.publications.findIndex((item) => item.id === id);
      this.publications[index] = {
        ...publication,
        ...payload,
      };
      return this.publications[index];
    }
    return null;
  }
  remove(id: number) {
    const index = this.publications.findIndex((item) => item.id === id);
    if (index === -1) {
      throw new NotFoundException(`Publication #${id} not found`);
    }
    this.publications.splice(index, 1);
    return true;
  }
}
