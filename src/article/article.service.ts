import { Injectable } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Article } from './entities/article.entity';

@Injectable()
export class ArticleService {
  constructor(
    @InjectRepository(Article)
    private readonly articleRepository: Repository<Article>,
  ) {}

  create(createArticleDto: CreateArticleDto) {
    const articleData: DeepPartial<Article> = {
      ...createArticleDto,
      product:
        typeof createArticleDto.product === 'number'
          ? { id: createArticleDto.product }
          : createArticleDto.product,
      order:
        typeof createArticleDto.order === 'number'
          ? { id: createArticleDto.order }
          : createArticleDto.order,
    };

    const newArticle = this.articleRepository.create(articleData);
    return this.articleRepository.save(newArticle);
  }

  findAll() {
    return this.articleRepository.find();
  }

  findOne(id: number) {
    return this.articleRepository.findOne({ where: { id } });
  }

  update(id: number, updateArticleDto: UpdateArticleDto) {
    const updateData: DeepPartial<Article> = {
      ...updateArticleDto,
      product:
        typeof updateArticleDto.product === 'number'
          ? { id: updateArticleDto.product }
          : updateArticleDto.product,
      order:
        typeof updateArticleDto.order === 'number'
          ? { id: updateArticleDto.order }
          : updateArticleDto.order,
    };

    return this.articleRepository.update(id, updateData);
  }

  remove(id: number) {
    return this.articleRepository.delete(id);
  }
}
