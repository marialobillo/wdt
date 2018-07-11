## Exercises

> Help! Customers are not getting their products from the following assembly line.

A: As I can see on the output, there is not loading last 2 lines, so it's not calling well to the loadOnTruck method. In line 46, when we call the loadOnTruck method from product, we are forgetting the parenthesis, so is not working.

// Loading Station: product is loaded onto a truck.
product.loadOnTruck();

This is the correct calling to the method.

> Another assembly line is broken!

A: All the lines are printed in the output but for Packaging and for Product package the argument is 'undefined', so the error is there, in the package method.

In line 45, when we call the package method `product.package();` the argument is missing, so the output has to be undefined. We have to change `product.package(shippingType);
