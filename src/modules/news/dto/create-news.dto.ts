export class CreateNewsDto {
  title: string;
  content: string;
  category?: string;
  image?: string;
  published?: boolean;
}
