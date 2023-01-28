import { Controller, Get, Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Controller() //decorator
class AppController {
  //controller ko euta function

  @Get() //decorator
  getRootRoute() {
    return {
      name: "Mansij Ranjit",
      dob: "31/7/2001",
      contact: "9840253456",
      address: {
        province: "Bagmati",
        street: "Kalanki",
      },
    };
  }

  @Get("/food")
  getMyFavouriteFood() {
    return {
      food: ["pizza", "momo"],
    };
  }
}

//newspaper class wrapping a jerry
//controller is exposed through module
@Module({
  controllers: [AppController], //creates instance of appcontroller
})
class AppModule {
  //nothing
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
