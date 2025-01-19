import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticlesService {
  private articles = [];

  findAll() {
    return this.articles;
  }

  create(article) {
    this.articles.push(article);
    return article;
  }
}
