---
group: graphql
title: How to Get Customer Authorization Token
---

There are GraphQl queries that can not be successfully executed without customer authentication. GraphQl realizes customer authentication through 
```text
Bearer authorization-token
```
which we send in the `Authorization` request header field 

![GraphiQL Authorization Bearer]({{ page.baseurl }}/graphql/images/graphql-authorization.png)

It's very easy to get authorization token of your customer in GraphQl. So, for example we have a registered customer in Magento store
```text
customer@example.com/password
```

To get its authorization token please run the next `mutation` query:
```text
mutation {
  generateCustomerToken(email: "customer@example.com", password: "password") {
    token
  }
}
```

If you provided a correct customer's credentials then in the result you will get
```text
 {
   "data": {
     "generateCustomerToken": {
       "token": "c9l4ihcgs45kz2c8h7bb2jp4mzyzz7q0"
     }
   }
 }
```

Now, you can use that token to any of authorization queries/mutations. For example, you can retrieve information about customer's cart:
```text
{
  cart(cart_id: "c9l4ihcgs45kz2c8h7bb2jp4mzyzz7q0") {
    items {
      __typename
      id
      qty
    }
  }
}
```
