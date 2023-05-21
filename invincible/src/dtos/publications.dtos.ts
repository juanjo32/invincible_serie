export class CreatePublicationDto {
  readonly tittle: string;
  readonly content: string;
  readonly image: string;
}

export class UpdatePublicationDto {
  readonly tittle?: string;
  readonly content?: string;
  readonly image?: string;
}
