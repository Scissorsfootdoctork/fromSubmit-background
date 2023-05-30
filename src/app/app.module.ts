import { Module } from '@nestjs/common'
import { AppController } from './controllers/app.controller'
import { AppService } from './providers/app.service'
import { ConfigModule, ConfigService } from '@nestjs/config'
import appConfig from './configs/app.config'
import { dbConfig } from './configs/db.config'
import { TypeOrmModule } from '@nestjs/typeorm'

// as
@Module({
  imports: [
    ConfigModule.forRoot({ load: [appConfig, dbConfig] }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: parseInt(configService.get('DB_PORT'), 10),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE')
      })
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
