package models

import (
	"time"

	"github.com/jinzhu/gorm"
)

type Loan struct {
	gorm.Model
	Book      Book
	BookID    uint
	UserID    uint
	StartDate *time.Time
	EndDate   *time.Time
}
