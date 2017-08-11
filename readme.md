# MicroService User and Authentication System Lab
## Purpose
 Set up a independent authentication system.
## Glossary
|Word|Explanation|
|:-:|:-:|
|`System`|The Authentication MicroService itself.|
|`Client`|The Clients and Services who use this `System`.|

## Ideas
 * In order to distinguish different `Client`.
    * Different `Client` may hold their different user's info data and send various of data to the `System`, So the `System` should store those data independently and use an identity to identify which data should used.
    * The identity mentioned above now described as an data field called `AppId`.
    * The `AppId` is a string consisted of `[a-zA-Z0-9]` with a length of 32.
    * Besides `AppId` there should be an `AppSecret` to authenticate who has the `AppId` is the owner of it.
 * The `System` should provide some general interfaces to use.
    * The `System` offers a bunch of http interfaces using http or https protocol version 1 or 2.
    * Other communication protocol are not designed for the time being.
    * General interfaces should contain the interface that:
        * Register a new `AppId` to use
        * Define a new authentication policy
        * Remove a authentication policy
        * Authenticate a incoming request
 * Using noSQL to store the `System's` data
    * An `AppId` associates a bunch of data which belongs to the `Client` who owns the `AppId` and `AppSecret`.
    * The data contains the information of `Users` and `Policies`.
    * A `User` is a collection of a certain user's information, including `password` or said `authentication key`.
    * A `Policy` describes what will happens when a `User` performs `Something`.
    * `Something` could be a object which a `Client` passed when calling the `Define Policy` interface.

## Interfaces Definition
|HTTP Verb|URI|Effect|
|:-:|:-:|:-:|
|||