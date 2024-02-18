import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users';
import { Role } from '../roles';

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
  @ApiProperty({ example: 1, description: 'Uniq ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Role)
  @ApiProperty({ example: 'admin', description: 'Role' })
  @Column({ type: DataType.INTEGER })
  roleId: number;

  @ForeignKey(() => User)
  @ApiProperty({ example: 'admin', description: 'Role' })
  @Column({ type: DataType.INTEGER })
  userId: number;
}
