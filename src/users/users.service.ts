import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { EntityNotFoundError } from 'src/errors/entity-not-found.error';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'William Guitarrari',
      email: 'williamguitarrari@gmail.com'
    }
  ];

  create(createUserDto: CreateUserDto) {

    const id = this.users[this.users.length - 1].id + 1;

    const user: User = {
      id,
      ...createUserDto,
    };

    this.users.push(user);


    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user: User) => user.id === id);

    if (!user) {
      throw new EntityNotFoundError(`User with id #${id} was not found.`);
    }

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id);

    const newUser: User = {
      ...user,
      ...updateUserDto,
    };

    const index = this.users.indexOf(user);

    this.users[index] = newUser;

    return newUser;
  }

  remove(id: number) {
    const user = this.findOne(id);

    const index = this.users.indexOf(user);

    this.users.splice(index, 1);
  }
}
