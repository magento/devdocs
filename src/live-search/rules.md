---
group: live-search
title: Rules
ee_only: True
---

Live Search rules trigger actions based on a variety of conditions and give merchants the ability to shape the search experience for various scenarios.

This initial release of Live Search rules is based on the query string entered by the shopper, rather than on the result set. A query string can include alphanumeric characters and capitalization is ignored. As with facets and synonyms, rules are stored in protobuf dynamo. At query time, the search service retrieves rules through `grpc` calls to search-admin-service.

{:.bs-callout-info}
See [Rules](https://docs.magento.com/user-guide/live-search/rules.html) in the _Magento Commerce User Guide_ for information about rule setup and use.

## Example request

```text
mutation {
  queryRules (
    queryRules: [
      {
        id: 2,
        name: "new marni model campaign",
        queryConditionGroup: {
          joinOperator: AND,
          queryConditions: [
            {
              type: STARTS_WITH
              value: "marni"
            },
            {
              type: CONTAINS
              value: "sunglasses"
            }
          ]
        },
        action: {
          type: PIN,
          targetType: SKU,
          targetValues: ["sku_marni_new_summer_model"]
        },
        timeframe: {
          start: "2021-06-01T00:00:00.000Z"
          end: "2021-06-15T00:00:00.000Z"
        },
        status: DISABLED
        preview: true
      },
      {
        id: 2,
        name: "pin leggings",
        queryConditionGroup: {
          joinOperator: OR,
          queryConditions: [
            {
              type: CONTAINS
              value: "yoga pants"
            }
          ]
        },
        action: {
          type: PIN,
          targetType: SKU,
          targetValues: ["WP02"]
        },
        status: ENABLED
      },
      {
        id: 2,
        name: "hide ugly pants",
        queryConditionGroup: {
          joinOperator: OR,
          queryConditions: [
            {
              type: CONTAINS
              value: "yoga pants"
            }
          ]
        },
        action: {
          type: HIDE,
          targetType: NAME,
          targetValues: ["Cronus Yoga Pant", "Hawkeye Yoga Short"]
        },
        status: ENABLED
      },
      {
        id: 2,
        name: "demote ugly shorts",
        queryConditionGroup: {
          joinOperator: OR,
          queryConditions: [
            {
              type: CONTAINS
              value: "yoga pants"
            }
          ]
        },
        action: {
          type: BURY,
          targetType: SKU,
          targetValues: ["MP10"]
        },
        status: ENABLED
      }
      {
        id: 2,
        name: "promote not ugly shorts",
        queryConditionGroup: {
          joinOperator: OR,
          queryConditions: [
            {
              type: CONTAINS
              value: "yoga pants"
            }
          ]
        },
        action: {
          type: BOOST,
          targetType: SKU,
          targetValues: ["WP10"]
        },
        status: ENABLED
      }
    ])
  {
    message
  }
}
```

### Formal schema

```text
enum JoinOperator {
    OR
    AND
}
 
enum QueryConditionType {
    STARTS_WITH
    ENDS_WITH
    CONTAINS
    EQUALS
}
 
enum ActionType {
    BOOST
    BURY
    PIN
    HIDE
}
 
enum ActionTargetType {
    SKU
    NAME
}
 
 
enum RuleStatus {
    ENABLED
    DISABLED
}
 
type QueryCondition {
    type: QueryConditionType!
    value: String!
}
 
type QueryConditionGroup {
    joinOperator: JoinOperator!
    queryConditions: [QueryCondition!]!
}
 
type Action {
    type: ActionType!
    targetType: ActionTargetType!
    targetValues: [String!]!
}
 
type Timeframe {
    # iso date format
    start: String!
    # iso date format
    end: String!
}
 
type QueryRulesMutationResponse {
    message: String!
}
 
input QueryRulesInput {
    id: ID!
    name: String!
    queryConditionGroup: QueryConditionGroup!
    action: Action!
    timeframe: Timeframe
    status: RuleStatus
}
 
type Mutation {
    queryRules(queryRules: [QueryRulesInput!]!) : QueryRulesMutationResponse
}
```
## Get query rules request

```text
query queryRules {
  queryRules {
    queryRules {
      id
      name
      queryConditionGroup {
        joinOperator
        queryConditions {
          type
          value
        }
      }
      action {
        type
        targetType
        targetValues
      }
      timeframe {
        start
        end
      }
      status
      preview
    }
  }
}
```
### Formal schema

```text
type QueryRulesResponse {
    id: ID!
    name: String!
    queryConditionGroup: QueryConditionGroup!
    action: Action!
    timeframe: Timeframe
    status: RuleStatus!
}
 
type QueryRulesQueryResponse {
    queryRules: [QueryRulesResponse!]!
}
 
type Query {
    queryRules : QueryRulesQueryResponse
}
```