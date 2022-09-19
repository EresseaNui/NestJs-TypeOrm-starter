import { PartialType } from '@nestjs/mapped-types';

export class TestDto {
  id: string;
  name: string;
}

export class CreateTestDto {}

export class UpdateTestDto extends PartialType(CreateTestDto) {}
