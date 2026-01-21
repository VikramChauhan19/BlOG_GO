package controller

import (
	"github.com/gofiber/fiber/v2"
	"github.com/vikramchauhan19/BLOG_GO/database"
	"github.com/vikramchauhan19/BLOG_GO/model"
	"log"
)

func BlogList(c *fiber.Ctx) error {
	db := database.DBConnection
	var records []model.Blog
	db.Find(&records)
	return c.Status(200).JSON(fiber.Map{
		"statusText":   "Ok",
		"message":      "Blig List",
		"blog_records": records,
	})
}

func BlogCreate(c *fiber.Ctx) error {
	Context := fiber.Map{
		"statusText": "ok",
		"message":    "Blog created",
	}
	blog := new(model.Blog)
	err := c.BodyParser(blog) //read http req body and fill in struct
	if err != nil {
		log.Println("error while parsing request")
		Context["statusText"] = "Bad"
		Context["message"] = "Invalid request body"
		return c.Status(400).JSON(Context)
	}
	result := database.DBConnection.Create(blog)
	if result.Error != nil {
		log.Println("error while saving data")
		Context["statusText"] = "Bad"
		Context["message"] = "Something went wrong"
		return c.Status(500).JSON(Context)
	}
	Context["data"] = blog
	return c.Status(201).JSON(Context) // 201->new entry)
}

func BlogDelete(c *fiber.Ctx) error {
	Context := fiber.Map{
		"statusText": "Ok",
		"message":    "Blog Deleted",
	}
	id := c.Params("id")
	var record model.Blog
	database.DBConnection.First(&record, id)
	if record.Id == 0 {
		log.Println("Record not found")
		Context["statusText"] = "Bad"
		Context["message"] = "Record not found"
		return c.Status(404).JSON(Context) //404 not found
	}

	result := database.DBConnection.Delete(&record, id)
	if result.Error != nil {
		log.Println("error while deleting")
		Context["statusText"] = "Bad"
		Context["message"] = "Internal server error"
		return c.Status(500).JSON(Context)
	}
	Context["data"] = record
	return c.Status(200).JSON(Context)
}

func BlogUpdate(c *fiber.Ctx) error {
	Context := fiber.Map{
		"statusText": "ok",
		"message":    "Blog updated",
	}
	id := c.Params("id")
	var record model.Blog
	database.DBConnection.First(&record, id) // find and store in record
	if record.Id == 0 {
		log.Println("Record not found")
		Context["statusText"] = "Bad"
		Context["message"] = "Record not found"
		return c.Status(404).JSON(Context)
	}
	err := c.BodyParser(&record) // convert in go struct and store in record
	if err != nil {
		log.Println("error while parsing")
		Context["statusText"] = "Bad"
		Context["message"] = "Something went wrong"
		return c.Status(500).JSON(Context) // 500->Internal server error
	}
	result := database.DBConnection.Save(record)

	if result.Error != nil {
		log.Println("error while saving data")
		Context["statusText"] = "Bad"
		Context["message"] = "Something went wrong"
		return c.Status(500).JSON(Context) // 500->Internal server error
	}
	Context["data"] = record
	return c.Status(200).JSON(Context)
}
