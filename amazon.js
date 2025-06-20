const basketballCents = 2099;
const tshirtCents = 799;
const toasterCents = 1899;
const toasterShippingCents = 499; 

const productTotalCents = basketballCents + tshirtCents + toasterCents;
console.log("Product Total (before shipping & taxes): $" + (productTotalCents / 100).toFixed(2));

const totalBeforeTaxCents = productTotalCents + toasterShippingCents;
console.log("Total Before Tax: $" + (totalBeforeTaxCents / 100).toFixed(2));

const taxCents = Math.round(totalBeforeTaxCents * 0.10);
console.log("Tax (10%): $" + (taxCents / 100).toFixed(2));

const orderTotalCents = totalBeforeTaxCents + taxCents;
console.log("Order Total: $" + (orderTotalCents / 100).toFixed(2));