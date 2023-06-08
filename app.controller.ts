import { Controller, Get, Module } from "@nestjs/common";

@Controller() //decorator
export class AppController {
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
