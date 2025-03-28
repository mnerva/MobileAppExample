const categories = [
  {
      title: 'Popular',
      image: 'https://static8.depositphotos.com/1338574/831/i/600/depositphotos_8318731-stock-photo-gold-star.jpg'
  },
  {
      id: 1,
      title: 'Chair',
      image: 'https://www.red-dot.org/fileadmin/bilder/Kategorien_PD/PD_cat_01.jpg'
  },
  {
      id: 2,
      title: 'Table',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9zWCkZ4tvzBmsxyMCY1sMOqxHdAPY6oSRP-vy4FBxH50h86Q-kstU8Qp7WSeTtsIuZ6Y&usqp=CAU'
  },
  {
      id: 3,
      title: 'Armchair',
      image: 'https://asset1.cxnmarksandspencer.com/is/image/mands/__T65_9889D_FS__EC_CHR_ELLI_0'
  },
  {
      id: 4,
      title: 'Sofa',
      image: 'https://www.urbanconcepts.ph/wp/wp-content/uploads/2017/08/4202-1.jpg'
  },
  {
      id: 5,
      title: 'Bed',
      image: 'https://scandinaviandesigns.com/cdn/shop/products/S13_Bolig_Walnut_Full_02.jpg?v=1715217666'
  },
]

const products = [
  {
      id: 1,
      title: 'Loft Style Chair',
      image: 'https://grandrapidschair.com/wp-content/uploads/2016/01/250_Brady_Graphite_Honey-1.jpg',
      category: 1,
      price: '$ 20.00'
  },
  {
      id: 2,
      title: 'Wood Mini Table',
      image: 'https://ii1.pepperfry.com/media/catalog/product/f/o/800x880/foldable-table-in-natural-colour-by-clasicraft-foldable-table-in-natural-colour-by-clasicraft-ahmtub.jpg',
      category: 2,
      price: '$ 25.00'
  },
  {
      id: 3,
      title: 'Luxe Yellow Armchair',
      image: 'https://www.woods-furniture.co.uk/images/products/standard/7706_8118.jpg',
      category: 3,
      price: '$ 45.00'
  },
  {
      id: 4,
      title: 'Cozy Armchair',
      image: 'https://cdn.shopify.com/s/files/1/0079/2539/9616/products/myakka-chairs-jalkamal-block-print-footstool-28730051264703_2000x.jpg?v=1629217511',
      category: 3,
      price: '$ 80.00'
  },
  {
      id: 5,
      title: 'Velvet Sofa',
      image: 'https://www.housingunits.co.uk/media/catalog/product/cache/60968cec045f20fb06ab5f7720001507/5/5/555685b1a8eecf2133f18451526a4ede.jpg',
      images: [
          'https://collinsandhayes-cdn-1.s3.eu-west-2.amazonaws.com/wp-content/uploads/2022/02/14101256/V7A1199-800x800.jpg',
          'https://www.housingunits.co.uk/media/catalog/product/cache/60968cec045f20fb06ab5f7720001507/5/5/555685b1a8eecf2133f18451526a4ede.jpg',
          'https://media.sofa.com/thumbor/unsafe/https%3A%2F%2Fmedia.sofa.com%2Fmedias%2FSS22-Homepage-Category-Tiles-1-SOFAS.jpg%3Fcontext%3DbWFzdGVyfHJvb3R8MTM1MzYyfGltYWdlL2pwZWd8aDUyL2g0ZC84OTk4ODEwNTgzMDcwLmpwZ3xjNWUzZDYzMjY2NGNhNWJkYjUwNjg4MDlkNzBiZTFlYmNiNmE1YWEyNDEwMTFhYWRlYTI0OGMwZGVlZTE1OWE1',
      ],
      category: 4,
      price: '$ 120.00'
  },
]

export { products, categories };