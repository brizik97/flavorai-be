import { IsOptional, IsString } from 'class-validator';

export class CreateRecipeDto {
  @IsString()
  title: string;

  @IsString()
  instructions: string;

  @IsString()
  ingredients: string;

  @IsOptional()
  @IsString()
  description?: string;
}
