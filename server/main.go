package main

import (
	"log"
	"os"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/joho/godotenv"
	"github.com/vikramchauhan19/BLOG_GO/database"
	"github.com/vikramchauhan19/BLOG_GO/router"
	
)

func init(){
	database.ConnectDB() // connection with db
}
func main(){
	if os.Getenv("ENV") != "production"{ // load ker rhe he .env k variable
		err := godotenv.Load(".env")
		if err != nil{
			log.Fatal("error loading .env file")
		}
	}
	sqlDB,err := database.DBConnection.DB() // give advance control
	if err != nil{
		panic("Error in sql Connection")
	}
	defer sqlDB.Close()


	app := fiber.New() //creating server
	app.Use(logger.New())
	router.SetUpRoutes(app)
	
	app.Get("/",func(c *fiber.Ctx)error{
		return c.Status(200).JSON(fiber.Map{"message":"Welcome to my server"})
	})
	
	PORT := os.Getenv("PORT")
	app.Listen("0.0.0.0:"+PORT) //0.0.0.0 listen everywhere
}