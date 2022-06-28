import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Offer extends Model<Offer>{
    @Column
    title: string;

    @Column
    content: string;

    @Column({ defaultValue: false })
    isPublished: boolean;
}