import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";

//newspaper class wrapping a jerry
//controller is exposed through module
@Module({
  controllers: [AppController], //creates instance of appcontroller
})
export class AppModule {
  //nothing
}
