import { CreateTestDto, UpdateTestDto } from './../dtos/test.dto';
import {
  Controller,
  Post,
  Body,
  Get,
  Patch,
  Delete,
  Param,
} from '@nestjs/common';
import { TestService } from 'src/services/test.service';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Post()
  create(@Body() createTestPayload: CreateTestDto) {
    return this.testService.create(createTestPayload);
  }

  @Get()
  findAll() {
    return this.testService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.testService.findOneById(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestPayload: UpdateTestDto) {
    return this.testService.update(id, updateTestPayload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.testService.delete(id);
  }
}
