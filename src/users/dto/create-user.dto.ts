import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'example@example.com', description: 'Email' })
  readonly email: string;

  @ApiProperty({ example: '1_2_3', description: 'Password' })
  readonly password: string;
}
