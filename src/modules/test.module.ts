import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Test } from 'src/entities/test.entity';
import { TestController } from 'src/controllers/test.controller';
import { TestService } from 'src/services/test.service';

@Module({
  imports: [TypeOrmModule.forFeature([Test])],
  controllers: [TestController],
  providers: [TestService],
})
export class TestModule {}
