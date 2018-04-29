---
layout: default
group: arch-guide
title: Magento 2.x GDFR compliance
version: 2.1
github_link: architecture/gdfr/magento-2x.md
---

## Frontend data entry points

![Frontend data entry points](frontend-data-entry-points.svg)

## Frontend data access points

![Frontend data access points](frontend-data-access-points.svg)


## Backend data entry points

![Backend data entry points](backend-data-entry-points.svg)

## Backend data access points

![Backend data access points](backend-data-access-points.svg)

## Database entities

### Customer data

`customer_entity`
---
  `email` varchar(255)
  `prefix` varchar(40)
  `firstname` varchar(255)
  `middlename` varchar(255)
  `lastname` varchar(255)
  `suffix` varchar(40)
  `dob` date
  `gender` smallint(5)



### Address data

### Order data

### Quote data

### Payment data

### Invitation data

### Miscellaneous tables that reference customer
