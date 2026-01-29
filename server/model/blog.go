package model

type Blog struct{ // cpaital name which mean it can export
	Id uint `json:"id" gorm:"primaryKey"`
	Title string `json:"title" gorm:"not null;column:title;size:255"`
	Post string `json:"post" gorm:"not null;column:post;size:500"`
	Image string `json:"image" gorm:"not null;column:Image;size:500"`
}