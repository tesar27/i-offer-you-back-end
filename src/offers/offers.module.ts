import { Module } from '@nestjs/common';
import { Offer } from './offers.model';
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
    controllers: [],
    providers: [],
    imports: [
        SequelizeModule.forFeature([Offer])
    ]
})
export class UsersModule { }
