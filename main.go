package main

import (

	// "fmt"
	"log"

	"github.com/iancullinane/base-app/lastfm"
	"github.com/iancullinane/base-app/server"
)

func main() {

	log.SetFlags(log.LstdFlags | log.Lshortfile)

	tracks := lastfm.New(lastfm.NewHttpClient("ianpants", "57ee3318536b23ee81d6b27e36997cde"))
	// pdb.Test()

	server := server.SetUpServer(tracks)

	server.ListenAndServe()
}

// func setupPestoDb() {
// 	os.Remove("./pesto_db/files/pesto.db")
// 	db, err := sql.Open("sqlite3", "./pesto_db/files/pesto.db")
// 	if err != nil {
// 		log.Fatal(err)
// 	}
// 	defer db.Close()

// 	pdb := pesto_db.New(db)

// 	err = pdb.CreateAllTables()
// 	if err != nil {
// 		fmt.Printf("Error creating database: %s\n", err)
// 	}
// 	pdb.InsertProducts()
// 	pdb.InsertOrders()
// }
