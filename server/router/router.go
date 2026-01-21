package router

import (
	"github.com/gofiber/fiber/v2"
	"github.com/vikramchauhan19/BLOG_GO/controller"
)

func SetUpRoutes(app *fiber.App) {
	app.Get("/", controller.BlogList)
	app.Post("/", controller.BlogCreate)
	app.Put("/:id", controller.BlogUpdate)
	app.Delete("/:id", controller.BlogDelete)
}