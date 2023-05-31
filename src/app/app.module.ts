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
        host: configService.get('db.host'),
        port: configService.get('db.port'),
        username: configService.get('db.username'),
        password: configService.get('db.password'),
        database: configService.get('db.database'),
        synchronize: configService.get('typeOrm.Synchronize'),
        autoLoadEntities: configService.get('typeOrm.AutoLoadEntities')
      })
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
