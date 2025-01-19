import { Controller, Get, Post, Body } from '@nestjs/common';
import { ArticlesService } from './articles.service';

@Controller('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Get()
  findAll() {
    return this.articlesService.findAll();
  }

  @Post()
  create(@Body() createArticleDto: any) {
    return this.articlesService.create(createArticleDto);
  }
}
