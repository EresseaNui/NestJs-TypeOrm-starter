import { CreateTestDto, UpdateTestDto } from './../dtos/test.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Test } from 'src/entities/test.entity';
import { Repository } from 'typeorm';
import { from } from 'rxjs';

@Injectable()
export class TestService {
  constructor(
    @InjectRepository(Test)
    private readonly testRepository: Repository<Test>,
  ) {}

  create(createTestPayload: CreateTestDto) {
    return from(
      this.testRepository
        .createQueryBuilder()
        .insert()
        .into(Test)
        .values(createTestPayload)
        .execute(),
    );
  }
  findAll() {
    return from(this.testRepository.find());
  }

  findOneById(id: string) {
    return from(this.testRepository.findOneBy({ id }));
  }

  update(id: string, updateTestPayload: UpdateTestDto) {
    return from(
      this.testRepository
        .createQueryBuilder()
        .update(Test)
        .set(updateTestPayload)
        .where('id = :id', { id })
        .execute(),
    );
  }

  delete(id: string) {
    return from(
      this.testRepository
        .createQueryBuilder()
        .delete()
        .from(Test)
        .where('id = :id', { id })
        .execute(),
    );
  }
}
