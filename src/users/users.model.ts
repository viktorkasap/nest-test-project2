import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: 1, description: 'Uniq ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'example@example.com', description: 'Email' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: '1_2_3', description: 'Password' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  password: string;

  @ApiProperty({ example: false, description: 'Is banned' })
  @Column({
    type: DataType.BOOLEAN,
    unique: true,
    defaultValue: false,
  })
  banned: boolean;

  @ApiProperty({ example: 'Bad guy', description: 'Reason of banned' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: true,
  })
  banReason: string;
}
