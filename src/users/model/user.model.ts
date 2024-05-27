import { Column, Model, Table } from 'sequelize-typescript';

@Table ({ tableName: 'User' })
export class User extends Model {
  @Column
  name: string;

  @Column
  email: string;

  @Column
  password: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
