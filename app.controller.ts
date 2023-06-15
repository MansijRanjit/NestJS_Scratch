import { Controller, Get } from "@nestjs/common";

@Controller("/app") //decorator
export class AppController {
  //controller ko euta class

  @Get() //decorator
  getRootRoute() {
    return {
      name: "Mansij Ranjit",
      dob: "31/7/2001",
      contact: "9840253456",
      gender: "Male",
      address: {
        province: "Bagmati",
        street: "Kalanki",
      },
    };
  }

  @Get("/food")
  getMyFavouriteFood() {
    return {
      food: ["pizza", "momo", "chowmein"],
    };
  }

  @Get("/bye")
  getByeThere() {
    return "bye there";
  }
}
