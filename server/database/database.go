package database

import (
	"log"
	"os"

	"github.com/joho/godotenv"
	"github.com/vikramchauhan19/BLOG_GO/model"
	"gorm.io/driver/mysql" //help orm to communicate with db
	"gorm.io/gorm"         // ORM
	"gorm.io/gorm/logger"
)

var DBConnection *gorm.DB



func ConnectDB(){
	if os.Getenv("ENV") != "production"{
		//load only when ENV == development	
		err := godotenv.Load(".env")
		if err != nil {
			log.Fatal("Error loading .env file", err)
		}
	}
	dsn := os.Getenv("DATABASE_URL")
	db,err := gorm.Open(mysql.Open(dsn),&gorm.Config{
		Logger: logger.Default.LogMode(logger.Error),
	})
	if err != nil{
		log.Fatal("Database connection failed:", err)
	}
	log.Println("Connection successful")
	db.AutoMigrate(new(model.Blog)) // new create pointer to Blog it takes pointer
	DBConnection = db	
}
