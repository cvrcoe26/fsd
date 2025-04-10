// in mongo shell, run the following commands one by one

use mydatabase;
db.products.insertMany([
    { name: "Smartphone", category: "electronics", price: 1200, stock: 15, brand: "TechOne" },
    { name: "Sofa", category: "furniture", price: 800, stock: 5, brand: "HomeCo" },
    { name: "Shirt", category: "clothing", price: 200, stock: 30, brand: "StyleFit" },
    { name: "TV", category: "electronics", price: 1500, stock: 7, brand: "ViewPlus" },
    { name: "Sneakers", category: "clothing", price: 450, stock: 20, brand: "RunMax" },
    { name: "Sandwich Maker", category: "electronics", price: 300, stock: 9, brand: "CookPro" },
    { name: "Dining Table", category: "furniture", price: 950, stock: 3, brand: "WoodWorks" },
    { name: "Soap", category: "food", price: 50, stock: 100, brand: "CleanPlus" },
    { name: "Speakers", category: "electronics", price: 650, stock: 12, brand: "SoundPro", discount: true },
    { name: "Salad Bowl", category: "kitchen", price: 150, stock: 25, brand: "HomeServe" }
  ])

db.products.find({ price: { $gt: 500 } })

// 1st (stock < 10)
db.products.find({ stock: { $lt: 10 } })
// 2nd (price bw 100 and 500)
db.products.find({ price: { $gte: 100, $lte: 500 } })
// 3rd (prods not in electronics category)
db.products.find({ category: { $ne: "electronics" } })
// 4th (prods in electronics or furniture category)
db.products.find({ category: { $in: ["electronics", "furniture"] } })
// 5th (prods not in food and clothing category)
db.products.find({ category: { $nin: ["food", "clothing"] } })
// 6th (prods with name starting with 'S')
db.products.find({ name: { $regex: /^S/, $options: 'i' } })
// 7th (sip first 5 and show next 10)
db.products.find().skip(5).limit(10)
// 8th (prods with discount field)
db.products.find({ discount: { $exists: true } })
