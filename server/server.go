package main

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/joho/godotenv"
	"github.com/vikramchauhan19/BLOG_GO/database"
	"github.com/vikramchauhan19/BLOG_GO/router"
	"log"
)

func init() {
	if err := godotenv.Load(".env"); err != nil {
		log.Fatal("Error in loading .env file.")
	}
	database.ConnectDB() // connection with db
}
func main() {
	
	sqlDB, err := database.DBConnection.DB() // give advance control
	if err != nil {
		panic("Error in sql Connection")
	}
	defer sqlDB.Close()

	app := fiber.New() //creating server

	app.Static("/static", "./static") //“If someone asks for something starting with /static in the URL , give them the file from the ./static folder on disk.”

	app.Use(cors.New(cors.Config{ //not req for production because FE and BE must serve under same domain
		AllowHeaders: "Origin, Content-Type,Accept",
		AllowOrigins: "*",
		AllowMethods: "GET,POST,PUT,DELETE,PATCH",
	}))
	app.Use(logger.New()) // terminal pe req dekhata he
	
	router.SetUpRoutes(app)
	app.Listen(":8000")
}
