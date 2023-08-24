# OnFly Feature Flag
## Technology

- React
- JavaScript

## Description
```sh
OnFly provider gives the flexibility to change the flag runtime without refresh the application. It is very easy to integrate and get the feature flag data using hook.
```

## How to use
`import useOnFlyFlagProvider from "onfly-flag-provider"`
```sh
const [data]=useOnFlyFlagProvider(accountKey);
```
`accountKey`: Authentication key which specific the project and their environment

## Detail Explaintation of product
Internally this Hook will connect to socket layer to get the runtime feature flag data. `Account key` is must to establish the connection. Account key will be available in the OnFly Feature flag portal under your organization project.
## Installation steps
```sh
npm install onfly-flag-provider --save
Install the dependency packages
```
