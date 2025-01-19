import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { ArticlesModule } from './articles/articles.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',  // หรือ IP ของเครื่องเซิร์ฟเวอร์
      port: 5432,
      username: 'your_username',  // ตั้งค่าตามที่คุณใช้
      password: 'your_password',  // ตั้งค่าตามที่คุณใช้
      database: 'ecommerce_db',  // ชื่อฐานข้อมูล
      entities: [],
      synchronize: true, // ใช้ในระหว่างพัฒนาเพื่อสร้างตารางอัตโนมัติ
    }),
    ProductsModule,
    ArticlesModule,
    UsersModule,
    OrdersModule,
  ],
})
export class AppModule {}
