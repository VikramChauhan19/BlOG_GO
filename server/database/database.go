package database

import (
	"log"
	"os"
	"github.com/vikramchauhan19/BLOG_GO/model"
	"gorm.io/driver/mysql" //help orm to communicate with db
	"gorm.io/gorm"         // ORM
	"gorm.io/gorm/logger"
)

var DBConnection *gorm.DB



func ConnectDB(){
	host := os.Getenv("db_host")
	user := os.Getenv("db_user")
	password := os.Getenv("db_password")
	dbname := os.Getenv("db_name")

	dsn := user + ":" + password + "@tcp(" + host + ":3306)/" + dbname + "?charset=utf8mb4&parseTime=True&loc=Local"

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Error),
	})

	if err != nil {
		panic("Database connection failed.")
	}

	log.Println("Connection successful.")


	db.AutoMigrate(new(model.Blog)) // new create pointer to Blog it takes pointer
	DBConnection = db	
}
