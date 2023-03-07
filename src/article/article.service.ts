import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}

  createArticle(createArticleDto: CreateArticleDto) {
    return this.prisma.article.create({
      data: {
        ...createArticleDto,
      },
    });
  }

  findAll() {
    return this.prisma.article.findMany();
  }

  findOne(id: number) {
    return this.prisma.article.findUnique({
      where: { id },
    });
  }

  updateArticle(id: number, updateArticleDto: UpdateArticleDto) {
    return this.prisma.article.update({
      where: { id },
      data: {
        ...updateArticleDto,
      },
    });
  }

  remove(id: number) {
    return this.prisma.article.delete({
      where: { id },
    });
  }
}
