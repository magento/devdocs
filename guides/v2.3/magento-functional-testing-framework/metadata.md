---
layout: default
group: mftf
title: Metadata structure in the Magento Functional Testing Framework
github_link: magento-functional-testing-framework/metadata.md
---

## Overview

![](./img/metadata-dia.svg)

## Format

## Principles

## Example

## Available elements

### operation

name	string  : http://www.w3.org/2001/XMLSchema	optional	
dataType	string  : http://www.w3.org/2001/XMLSchema	required	
type	operationEnum  : 	required	Values: create, delete, update, get
url	string  : http://www.w3.org/2001/XMLSchema	optional	
auth	authEnum  : 	optional	Values: adminOauth, adminFormKey, customerFormKey
method	string  : http://www.w3.org/2001/XMLSchema	optional	
successRegex	string  : http://www.w3.org/2001/XMLSchema	optional	
returnRegex	string  : http://www.w3.org/2001/XMLSchema	optional	


### object

key	string  : http://www.w3.org/2001/XMLSchema	optional	
dataType	string  : http://www.w3.org/2001/XMLSchema	required	
required	boolean  : http://www.w3.org/2001/XMLSchema	optional

### field

key	string  : http://www.w3.org/2001/XMLSchema	required	
type	string  : http://www.w3.org/2001/XMLSchema	optional	
required	boolean  : http://www.w3.org/2001/XMLSchema	optional	

### array

key	string  : http://www.w3.org/2001/XMLSchema	required	
type	string  : http://www.w3.org/2001/XMLSchema	optional	
required	boolean  : http://www.w3.org/2001/XMLSchema	optional	

### header

param	string  : http://www.w3.org/2001/XMLSchema	required	

### param

key	string  : http://www.w3.org/2001/XMLSchema	required	
type	string  : http://www.w3.org/2001/XMLSchema	optional	

### contentType

### value