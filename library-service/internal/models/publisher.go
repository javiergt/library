package models

import (
	"github.com/jinzhu/gorm"
)

type Publisher struct {
	gorm.Model
	Name string `gorm:"unique"`
}
