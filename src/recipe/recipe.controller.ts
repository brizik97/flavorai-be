import { Controller, Get, Post, Body, UseGuards, Req } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { JwtAuthGuard } from 'src/auth/guards/auth.guard';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createRecipeDto: CreateRecipeDto, @Req() req) {
    const userId = req.user.id;
    return this.recipeService.create(createRecipeDto, userId);
  }

  @Get()
  findAll() {
    return this.recipeService.findAll();
  }
}
