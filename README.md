# Mano React-Native assignment Task 2

## Solution comments

* `logger.js`: Handles logging, with possible configuration variations for different environments or platforms. Some 3rd party integrations might be used, e.g. Sentry.
* `apiClient.js`: Backend communication provider. There might be encapsulated a logic related to error handling, response / request preprocessing, retry logic etc.
* `repositories.js`: Classes responsible for managing data access logic. This module can be extended to include features like caching data to a database, using a secure storage etc.
* `stores.js`: Mobx storages divided by domain and combined to the `RootStorage` for easy usage.  

## Ways to improve

* Add TypeScript for sure
* Add DI, e.g. tsyringe