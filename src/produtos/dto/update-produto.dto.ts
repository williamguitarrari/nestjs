import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProdutoDto {
  @ApiPropertyOptional({ example: 'Notebook', description: 'Nome do produto' })
  nome?: string;

  @ApiPropertyOptional({ example: 3500.99, description: 'Preço do produto' })
  preco?: number;

  @ApiPropertyOptional({ example: 10, description: 'Quantidade em estoque' })
  quantidade?: number;
} 