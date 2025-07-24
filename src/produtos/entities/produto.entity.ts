import { ApiProperty } from '@nestjs/swagger';

export class Produto {
  @ApiProperty({ example: 1, description: 'ID do produto' })
  id: number;

  @ApiProperty({ example: 'Notebook', description: 'Nome do produto' })
  nome: string;

  @ApiProperty({ example: 3500.99, description: 'Preço do produto' })
  preco: number;

  @ApiProperty({ example: 10, description: 'Quantidade em estoque' })
  quantidade: number;
} 