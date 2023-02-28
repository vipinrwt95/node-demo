const products = [];

exports.addProductPage=(req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }

  exports.addproduct=(req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
  }
 
  exports.allproducts=(req, res, next) => {
    
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  }

