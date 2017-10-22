# High Level Architecture and general setup

This Section will cover the tools and technologies that are used within
the following sections. This section will also describe the
configuration of Magento 2.

## Infrastructure Architecture

- Autoscaling Group
- Launch Configuration
- RDS Cluster
- Elasticache Cluster
- Cloudfront
- S3
- CloudWatch
- Bastion Server
- NAT Gateway

## Server Architecture

- nginx
- php fpm

## Application Architecture

- Magento 2
    - uses Redis for FPC, Cache & Session via Elasticache
    - Multistore
    - Shared Media Files via S3 and CFN
    - CE 2.2
- Performance Tuning PHP (Opcache, PHP 7.1)
- Performance Tuning Nginx (Worker Processes)

## Development Infrastructure

- Gitlab
- Gitlab CI
- Static Built artifacts published via Gitlab Pages
- Gitlab CI compatible with Git Flow
- Automatic Deployment via Semantic Versioning

