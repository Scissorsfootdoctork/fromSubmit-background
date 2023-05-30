import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
};

bootstrap()
  .then((result) => {
    // 处理成功的结果
    console.log(result);
  })
  .catch((error) => {
    // 处理错误
    console.error(error);
  });
