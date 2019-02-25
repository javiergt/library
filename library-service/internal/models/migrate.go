package models

import "github.com/jinzhu/gorm"

// Migrate migrates the models contained in the package
func Migrate(db *gorm.DB) {
	db.AutoMigrate(&Author{}, &Publisher{}, &Book{}, &Loan{})
}
