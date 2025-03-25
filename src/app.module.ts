import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ClientModule } from './client/client.module';
import { StationModule } from './station/station.module';
import { DroneModule } from './drone/drone.module';
import { RoleModule } from './role/role.module';
import { DeliveryModule } from './delivery/delivery.module';
import { StatusModule } from './status/status.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { ArticleModule } from './article/article.module';
import { PaymentModule } from './payment/payment.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'drones_db',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),

    UserModule,
    ClientModule,
    StationModule,
    DroneModule,
    RoleModule,
    DeliveryModule,
    StatusModule,
    OrderModule,
    ProductModule,
    ArticleModule,
    PaymentModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
