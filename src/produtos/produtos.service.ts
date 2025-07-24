import { Injectable, NotFoundException } from '@nestjs/common';
import { Produto } from './entities/produto.entity';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Injectable()
export class ProdutosService {
  private produtos: Produto[] = [];
  private nextId = 1;

  create(createProdutoDto: CreateProdutoDto): Produto {
    const produto: Produto = {
      id: this.nextId++,
      nome: createProdutoDto.nome,
      preco: createProdutoDto.preco,
      quantidade: createProdutoDto.quantidade,
    };
    this.produtos.push(produto);
    return produto;
  }

  findAll(): Produto[] {
    return this.produtos;
  }

  findOne(id: number): Produto {
    const produto = this.produtos.find((p) => p.id === id);
    if (!produto) {
      throw new NotFoundException('Produto não encontrado');
    }
    return produto;
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto): Produto {
    const produto = this.findOne(id);
    Object.assign(produto, updateProdutoDto);
    return produto;
  }

  remove(id: number): void {
    const index = this.produtos.findIndex((p) => p.id === id);
    if (index === -1) {
      throw new NotFoundException('Produto não encontrado');
    }
    this.produtos.splice(index, 1);
  }
} 