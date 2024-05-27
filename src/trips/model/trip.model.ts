import { Column, Model, Table } from 'sequelize-typescript';

@Table ({ tableName: 'Trip' })
export class Trip extends Model {
  @Column
  address_start: string;

  @Column
  address_finish: string;

  @Column
  user_id: string;

  @Column({ defaultValue: false })
  isStarted: boolean;
  
  @Column({ defaultValue: false })
  isFinished: boolean;


  @Column({ defaultValue: true })
  isActive: boolean;
}




