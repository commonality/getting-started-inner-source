# API design, security, and documentation

> <img align="bottom" alt="gear" height="50" width="50" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gear.svg"> Follow these design principles and guidelines for simple, consistent, and expressive APIs that reduce maintenance costs, boost adoption, and encourage reuse.

## Table of contents

<!-- toc -->

- [1. Conventions used in this guide](#1-conventions-used-in-this-guide)
- [2. Standards compliance](#2-standards-compliance)
- [3. Resources, Collections, and URIs](#3-resources-collections-and-uris)
  * [2.1. URI pathnames represent collections](#21-uri-pathnames-represent-collections)
  * [2.2. Methods](#22-methods)
- [Style guidelines](#style-guidelines)
  * [Status codes](#status-codes)
  * [Pagination, limit, and offset parameters](#pagination-limit-and-offset-parameters)
- [3. Security](#3-security)
- [4. Documentation](#4-documentation)

<!-- tocstop -->

<!-- tocend -->

## 1. Conventions used in this guide

The requirement level keywords "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" used in this document are to be interpreted as described in [RFC 2119 ![link-external][octicon-link-external]][rfc-2119].

## 2. Standards compliance

Standard | Description | Reference
:--------|:------------|:---------
OpenAPI version 3.0.0 | A language-agnostic interface to RESTful APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection. | <https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md#openapi-specification>

## 3. Resources, Collections, and URIs

**We follow resource-oriented design.** Resource-oriented design consists of three core components: <samp>resources</samp>, <samp>collections</samp>, and <samp>URIs</samp>.

<dl>
  <dt><samp>Resource</samp></dt>
  <dd>A <a href="https://en.wikipedia.org/wiki/Data_model">data model <img align="bottom" alt="link-external" height="14" width="14" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link-external.svg"></a> that represents a fact (or facts) in time. <samp>Resources</samp> can have zero or more nested <samp>sub-resources</samp> or <samp>collections</samp>.</dd>

  <dt><samp>Collection</samp></dt>
  <dd>A list of the same kinds of resources.</dd>

  <dt><samp>URI</samp></dt>
  <dd>An identifier for a network location of a <samp>resource</samp> or <samp>collection</samp></dd>
</dl>

### 2.1. URI pathnames represent collections

URI paths MUST match the resources they represent.

Given a resource of type `Person` (which inherits properties from the resource type `Party`):

```json
[
  {
    "partyId": "38c2443f-13d3-475e-891d-b6053bbc94a4",
    "personName": {
      "givenName": "Jonathon",
      "familyName": "Nguyen",
      "usages": [
        "Alias",
        "Stage Name"
      ],
      "validFrom": "1994-02-01T06:00:00.000Z",
      "validTo": null
    }
  }
]
```

Could be represented as:

```http
GET /parties/:partyId
```

Where `:partyId` is a `field` input parameter that represents a unique identifier for resource of type `Party`. Consumers will replace this input parameter with a value, such as:

```http
GET /parties/38c2443f-13d3-475e-891d-b6053bbc94a4
```

Or:

```http
GET /people/38c2443f-13d3-475e-891d-b6053bbc94a4
```

### 2.2. Methods

Our APIs perform [CRUD ![link-external][octicon-link-external]][crud-URI] operations on <samp>resources</samp> and <samp>collections</samp> using HTTP request methods.

| Operation | HTTP Method | Description |
|:----------|:------------|:------------|
| **C**reate    | `POST`      |             |
| **R**ead      | `GET`       |             |
| **U**pdate (replace)   | `PUT`       | Replace _all values_ in a resource or collection |
| Update (modify) | `PATCH` | Replace a _subset of specific values_ in a resource or collection |
| **D**elete    | `DELETE`    | Remove all values associated with a unique resource or collection |

> ![info][octicon-info] We use a few more HTTP request methods, too, as you'll see below.

**URI pathnames MUST match properties** of <samp>resources</samp> and <samp>collections</samp>.

_Why:_

> ![info][octicon-info] This is a very well-known design to developers (your main API consumers). Apart from readability and ease of use, it allows us to write generic libraries and connectors without even knowing what the API is about.

## Style guidelines

1.  **Use kebab-case** for URIs.

1.  **Use camelCase for parameters** in the query string or resource fields.

1.  **Use plural kebab-case for resource names** in URIs.

2.  **Collections MUST be plural nouns**, e.g., `/users`.

    _Why:_

    > ![info][octicon-info] Consistency and legibility. [read more...](https://apigee.com/about/blog/technology/restful-api-design-plural-nouns-and-concrete-names)

3.  **Select unique members in a collection with an identifier in the URI path**

    ```http
    /students/245743
    /airports/kjfk
    ```

1.  Keep verbs out of your resource URIs.

    _Why:_

    > ![info][octicon-info] Because if you use a verb for each resource operation you soon will have a huge list of URIs and no consistent pattern which makes it difficult for developers to learn. Plus we use verbs for something else.

1.  Use verbs for non-resources. In this case, your API doesn't return any resources. Instead, you execute an operation and return the result. These **are not** CRUD (create, retrieve, update, and delete) operations:

    ```http
    /translate?text=Hallo
    ```

    _Why:_

    > ![info][octicon-info] Because for CRUD we use HTTP methods on `resource` or `collection` URIs. The verbs we were talking about are actually `Controllers`. You usually don't develop many of these. [read more...](https://byrondover.github.io/post/restful-api-guidelines/#controller)

1.  The request body or response type is JSON then please follow `camelCase` for `JSON` property names to maintain the consistency.

    _Why:_

    > ![info][octicon-info] This is a JavaScript project guideline, Where Programming language for generating JSON as well as Programming language for parsing JSON are assumed to be JavaScript.

1.  Even though a resource is a singular concept that is similar to an object instance or database record, you should not use your `table_name` for a resource name and `column_name` resource property.

    _Why:_

    > ![info][octicon-info] Because your intention is to expose Resources, not your database schema details.

1.  Again, only use nouns in your URI when naming your resources and don’t try to explain their functionality.

    _Why:_

    > ![info][octicon-info] Only use nouns in your resource URIs, avoid endpoints like `/addNewUser` or `/updateUser` . Also avoid sending resource operations as a parameter.

1.  Explain the CRUD functionalities using HTTP methods:

    _How:_

    > `GET`: Retrieve a representation of a resource.
    >
    > `POST`: Create new resources and sub-resources.
    >
    > `PUT`: Replace existing resources.
    >
    > `PATCH`: Update existing resources. It only updates the fields that were supplied, leaving the others alone.
    >
    > `DELETE`: Delete existing resources.

1.  For nested resources, use the relation between them in the URI. For instance, using `id` to relate an employee to a company.

    _Why:_

    > ![info][octicon-info] This is a natural way to make resources explorable.
    >
    > _How:_
    >
    > `GET /schools/2/students` , should get the list of all students from school 2.
    >
    > `GET /schools/2/students/31` , should get the details of student 31, which belongs to school 2.
    >
    > `DELETE /schools/2/students/31` , should delete student 31, which belongs to school 2.
    >
    > `PUT /schools/2/students/31` , should update info of student 31, Use PUT on resource-URI only, not collection.
    >
    > `POST /schools` , should create a new school and return the details of the new school created. Use POST on collection-URIs.

1.  Use a simple ordinal number for a version with a `v` prefix (v1, v2). Move it all the way to the left in the URI so that it has the highest scope:

    ```http
    http://api.domain.com/v1/schools/3/students
    ```

    _Why:_

    > ![info][octicon-info] When your APIs are public for other third parties, upgrading the APIs with some breaking change would also lead to breaking the existing products or services using your APIs. Using versions in your URI can prevent that from happening. [read more...](https://apigee.com/about/blog/technology/restful-api-design-tips-versioning)

1.  Response messages must be self-descriptive. A good error message response might look something like this:

    ```json
    {
      "code": 404,
      "level": "ERROR",
      "logger": "[http-logger]",
      "message":
        "No resource found at URI /archetypes/v1/locales/iso-country-codes/BS",
      "timestamp": 1504878062000
    }
    ```

    or for validation errors:

    ```json
    {
      "code": 400,
      "logger": "[registration-form-logger]",
      "level": "ERROR",
      "timestamp": 1504878062000,
      "message": "Validation Failed",
      "stack": [
        {
          "code": 1233,
          "field": "email",
          "message": "Invalid email"
        },
        {
          "code": 1234,
          "field": "password",
          "message": "No password provided"
        }
      ]
    }
    ```

    _Why:_

    > ![info][octicon-info] Developers depend on well-designed errors at the critical times when they are troubleshooting and resolving issues after the applications they've built using your APIs are in the hands of their users.

### Status codes

1. Status codes represent resource request results. Status codes declare whether:

    - **Everything worked**,
    - The **client app did something wrong**, or
    - The **API did something wrong**.

2. Limit your API response results to eight (8) status codes.

    _Which ones:_

    > `200 OK` response represents success for `GET`, `PUT` or `POST` requests.
    >
    > `201 Created` for when new instance is created. Creating a new instance, using `POST` method returns `201` status code.
    >
    > `304 Not Modified` response is to minimize information transfer when the recipient already has cached representations.
    >
    > `400 Bad Request` for when the request was not processed, as the server could not understand what the client is asking for.
    >
    > `401 Unauthorized` for when the request lacks valid credentials and it should re-request with the required credentials.
    >
    > `403 Forbidden` means the server understood the request but refuses to authorize it.
    >
    > `404 Not Found` indicates that the requested resource was not found.
    >
    > `500 Internal Server Error` indicates that the request is valid, but the server could not fulfill it due to some unexpected condition.

    _Why:_

    > ![info][octicon-info] Most API providers use a small subset HTTP status codes. For example, the Google GData API uses only 10 status codes, Netflix uses 9, and Digg, only 8. Of course, these responses contain a body with additional information. There are over 70 HTTP status codes. However, most developers don't have all 70 memorized. So if you choose status codes that are not very common you will force application developers away from building their apps and over to wikipedia to figure out what you're trying to tell them. [read more...](https://apigee.com/about/blog/technology/restful-api-design-what-about-errors)

### Pagination, limit, and offset parameters

1.  Provide total numbers of resources in your response.

1.  Accept `limit` and `offset` parameters.

1.  **Use a `fields` query parameter that takes a comma separated list of resource `properties` to include.**

    > ```http
    > GET /student?fields=id,name,age,class
    > ```

    _Why:_
    
    > ![info][octicon-info] Your API consumers don't always need the full representation of a resource, nor the network latency associated with large `response` bodies.

1. Avoid URIs nested resource properties in your URI path:

    ```http
    GET /blogs/:blogId/posts/:postId/summary
    ```

    _Why:_

    > ![info][octicon-info] This is not pointing to a resource but to a property instead. You can pass the property as a parameter to trim your response.

1.  Pagination, filtering, and sorting don’t need to be supported from start for all resources. Document those resources that offer filtering and sorting.

## 3. Security

<img align="bottom" alt="shield" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/shield.svg"> These are some basic security best practices.

---

_![shield][octicon-shield] **Keep security exception messages as generic as possible.**_ For example, if your API unsuccessfully tries to write in to a database, it should not display an error message that includes the user name it is using.

---

1.  Don't use basic authentication unless over a secure connection (HTTPS). Authentication tokens must not be transmitted in the URI: `GET /users/123?token=asdf....`

    _Why:_

    > ![info][octicon-info] Because Token, or user ID and password are passed over the network as clear text (it is base64 encoded, but base64 is a reversible encoding), the basic authentication scheme is not secure. [read more...](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)

1.  Tokens must be transmitted using the Authorization header on every request: `Authorization: Bearer xxxxxx, Extra yyyyy`.

1.  Authorization Code should be short-lived.

1.  Reject any non-TLS requests by not responding to any HTTP request to avoid any insecure data exchange. Respond to HTTP requests by `403 Forbidden`.

1.  Consider using Rate Limiting.

    _Why:_

    > ![info][octicon-info] To protect your APIs from bot threats that call your API thousands of times per hour. You should consider implementing rate limit early on.

1.  Setting HTTP headers appropriately can help to lock down and secure your web application. [read more...](https://github.com/helmetjs/helmet)

1.  Your API should convert the received data to their canonical form or reject them. Return 400 Bad Request with details about any errors from bad or missing data.

2.  All the data exchanged with the ReST API must be validated by the API.

2.  Serialize your JSON.

    _Why:_

    > ![info][octicon-info] A key concern with JSON encoders is preventing arbitrary JavaScript remote code execution within the browser... or, if you're using node.js, on the server. It's vital that you use a proper JSON serializer to encode user-supplied data properly to prevent the execution of user-supplied input on the browser.

1.  Validate the content-type and mostly use `application/*json` (Content-Type header).

    _Why:_

    > ![info][octicon-info] For instance, accepting the `application/x-www-form-URIencoded` mime type allows the attacker to create a form and trigger a simple POST request. The server should never assume the Content-Type. A lack of Content-Type header or an unexpected Content-Type header should result in the server rejecting the content with a `4XX` response.

## 4. Documentation

1.  **Fill the API section in the README for "API"**. For large APIs, provide a link to comprehensive documentation.

1.  **Authentication examples.** Describe API authentication methods with a code sample.

2. **Host information:** Prefer specifing hostnames using the [host-meta JSON schema ![external-link][octicon-link-external]][schema-host-meta-url].

1.  **URI structure.** Explain the URI Structure (path only, no root URI) including The request type (Method).

1.  **URI Params.** If URI Params exist, specify them in accordance with name mentioned in URI section:

    ```http
    Required: id=[integer]
    Optional: photo_id=[alphanumeric]
    ```

    > ![light-bulb][octicon-light-bulb] **POST method types**
    >
    > If the request's method type is POST, provide working examples. URI Params rules apply here too. Separate the section into Optional and Required.

1.  **Success Responses.** What should be the status code and is there any return data? This is useful when people need to know what their callbacks should expect:

    ```http
    Code: 200
    Content: { id : 12 }
    ```

1.  **Error Responses.** Most endpoints have many ways to fail. From unauthorized access to wrongful parameters etc. All of those should be listed here. It might seem repetitive, but it helps prevent assumptions from being made. For example:


    - **HTTP status code**

        ```http
        404 Not Found
        ```

    - **Response body**

        ```json
        {
          "code": 404,
          "level": "ERROR",
          "logger": "[http-logger]",
          "message":
            "No resource found at URI /archetypes/v1/locales/iso-country-codes/BS",
          "timestamp": 1504878062000
        }
        ```

    - **Response headers**

        ```http
        accept-ranges: bytes
        access-control-allow-headers: Authorization
        access-control-allow-methods: GET, HEAD, OPTIONS
        access-control-allow-origin: *
        cache-control: public, no-transform, must-revalidate
        connection: keep-alive
        content-encoding: gzip
        content-language: en-US
        content-length: 149
        content-type: application/json
        date: Fri, 08 Sep 2017 06:41:02 GMT
        last-modified: Tue, 1 Oct 2014 10:10:10 GMT
        server: nginx/1.12.1
        vary: Accept-Encoding
        ```

1.  **Use API design and documentation tools.** There are lots of open source tools for good documentation such as:

    - [API Blueprint](https://apiblueprint.org/)
    - [apiDoc](http://apidocjs.com/), and
    - [OpenAPI](https://swagger.io/).

<!-- ⛔️  Do not remove anything below this comment. ⛔️  -->

<!-- Definitions -->

[crud-URI]: https://en.wikipedia.org/wiki/Create,_read,_update_and_delete
[data-structures-URI]: https://en.wikipedia.org/wiki/Data_structure
[modular-programming-URI]: https://en.wikipedia.org/wiki/Modular_programming
[rfc-2119]: https://www.ietf.org/rfc/rfc2119.txt
[schema-host-meta-url]: http://json.schemastore.org/host-meta

<!-- ⛔️ LINK REFERENCES(Begin) ⛔️  -->

[octicon-alert]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/alert.svg
[octicon-arrow-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-down.svg
[octicon-arrow-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-left.svg
[octicon-arrow-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-right.svg
[octicon-arrow-small-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-down.svg
[octicon-arrow-small-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-left.svg
[octicon-arrow-small-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-right.svg
[octicon-arrow-small-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-up.svg
[octicon-arrow-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-up.svg
[octicon-beaker]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/beaker.svg
[octicon-bell]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bell.svg
[octicon-bold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bold.svg
[octicon-book]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/book.svg
[octicon-bookmark]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bookmark.svg
[octicon-briefcase]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/briefcase.svg
[octicon-broadcast]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/broadcast.svg
[octicon-browser]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/browser.svg
[octicon-bug]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bug.svg
[octicon-calendar]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/calendar.svg
[octicon-check]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/check.svg
[octicon-checklist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/checklist.svg
[octicon-chevron-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-down.svg
[octicon-chevron-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-left.svg
[octicon-chevron-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-right.svg
[octicon-chevron-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-up.svg
[octicon-circle-slash]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/circle-slash.svg
[octicon-circuit-board]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/circuit-board.svg
[octicon-clippy]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/clippy.svg
[octicon-clock]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/clock.svg
[octicon-cloud-download]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/cloud-download.svg
[octicon-cloud-upload]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/cloud-upload.svg
[octicon-code]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/code.svg
[octicon-comment-discussion]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/comment-discussion.svg
[octicon-comment]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/comment.svg
[octicon-credit-card]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/credit-card.svg
[octicon-dash]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/dash.svg
[octicon-dashboard]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/dashboard.svg
[octicon-database]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/database.svg
[octicon-desktop-download]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/desktop-download.svg
[octicon-device-camera-video]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-camera-video.svg
[octicon-device-camera]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-camera.svg
[octicon-device-desktop]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-desktop.svg
[octicon-device-mobile]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-mobile.svg
[octicon-diff-added]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-added.svg
[octicon-diff-ignored]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-ignored.svg
[octicon-diff-modified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-modified.svg
[octicon-diff-removed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-removed.svg
[octicon-diff-renamed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-renamed.svg
[octicon-diff]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff.svg
[octicon-ellipses]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/ellipses.svg
[octicon-ellipsis]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/ellipsis.svg
[octicon-eye]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/eye.svg
[octicon-file-binary]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-binary.svg
[octicon-file-code]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-code.svg
[octicon-file-directory]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-directory.svg
[octicon-file-media]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-media.svg
[octicon-file-pdf]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-pdf.svg
[octicon-file-submodule]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-submodule.svg
[octicon-file-symlink-directory]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-symlink-directory.svg
[octicon-file-symlink-file]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-symlink-file.svg
[octicon-file-text]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-text.svg
[octicon-file-zip]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-zip.svg
[octicon-file]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file.svg
[octicon-flame]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/flame.svg
[octicon-fold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/fold.svg
[octicon-gear]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gear.svg
[octicon-gift]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gift.svg
[octicon-gist-secret]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gist-secret.svg
[octicon-gist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gist.svg
[octicon-git-branch]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-branch.svg
[octicon-git-commit]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-commit.svg
[octicon-git-compare]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-compare.svg
[octicon-git-merge]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-merge.svg
[octicon-git-pull-request]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-pull-request.svg
[octicon-globe]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/globe.svg
[octicon-grabber]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/grabber.svg
[octicon-graph]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/graph.svg
[octicon-heart]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/heart.svg
[octicon-history]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/history.svg
[octicon-home]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/home.svg
[octicon-horizontal-rule]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/horizontal-rule.svg
[octicon-hubot]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/hubot.svg
[octicon-inbox]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/inbox.svg
[octicon-info]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/info.svg
[octicon-issue-closed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/issue-closed.svg
[octicon-issue-opened]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/issue-opened.svg
[octicon-issue-reopened]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/issue-reopened.svg
[octicon-italic]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/italic.svg
[octicon-jersey]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/jersey.svg
[octicon-key]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/key.svg
[octicon-keyboard]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/keyboard.svg
[octicon-law]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/law.svg
[octicon-light-bulb]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/light-bulb.svg
[octicon-link-external]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link-external.svg
[octicon-link]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link.svg
[octicon-list-ordered]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/list-ordered.svg
[octicon-list-unordered]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/list-unordered.svg
[octicon-location]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/location.svg
[octicon-lock]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/lock.svg
[octicon-logo-gist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/logo-gist.svg
[octicon-logo-github]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/logo-github.svg
[octicon-mail-read]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mail-read.svg
[octicon-mail-reply]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mail-reply.svg
[octicon-mail]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mail.svg
[octicon-mark-github]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg
[octicon-markdown]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/markdown.svg
[octicon-megaphone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/megaphone.svg
[octicon-mention]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mention.svg
[octicon-milestone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/milestone.svg
[octicon-mirror]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mirror.svg
[octicon-mortar-board]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mortar-board.svg
[octicon-mute]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mute.svg
[octicon-no-newline]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/no-newline.svg
[octicon-octoface]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/octoface.svg
[octicon-organization]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/organization.svg
[octicon-package]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/package.svg
[octicon-paintcan]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/paintcan.svg
[octicon-pencil]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/pencil.svg
[octicon-person]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/person.svg
[octicon-pin]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/pin.svg
[octicon-plug]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/plug.svg
[octicon-plus-small]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/plus-small.svg
[octicon-plus]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/plus.svg
[octicon-primitive-dot]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/primitive-dot.svg
[octicon-primitive-square]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/primitive-square.svg
[octicon-pulse]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/pulse.svg
[octicon-question]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/question.svg
[octicon-quote]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/quote.svg
[octicon-radio-tower]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/radio-tower.svg
[octicon-reply]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/reply.svg
[octicon-repo-clone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-clone.svg
[octicon-repo-force-push]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-force-push.svg
[octicon-repo-forked]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-forked.svg
[octicon-repo-pull]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-pull.svg
[octicon-repo-push]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-push.svg
[octicon-repo]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo.svg
[octicon-rocket]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/rocket.svg
[octicon-rss]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/rss.svg
[octicon-ruby]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/ruby.svg
[octicon-search]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/search.svg
[octicon-server]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/server.svg
[octicon-settings]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/settings.svg
[octicon-shield]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/shield.svg
[octicon-sign-in]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/sign-in.svg
[octicon-sign-out]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/sign-out.svg
[octicon-smiley]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/smiley.svg
[octicon-squirrel]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/squirrel.svg
[octicon-star]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/star.svg
[octicon-stop]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/stop.svg
[octicon-sync]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/sync.svg
[octicon-tag]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/tag.svg
[octicon-tasklist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/tasklist.svg
[octicon-telescope]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/telescope.svg
[octicon-terminal]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/terminal.svg
[octicon-text-size]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/text-size.svg
[octicon-three-bars]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/three-bars.svg
[octicon-thumbsdown]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/thumbsdown.svg
[octicon-thumbsup]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/thumbsup.svg
[octicon-tools]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/tools.svg
[octicon-trashcan]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/trashcan.svg
[octicon-triangle-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-down.svg
[octicon-triangle-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-left.svg
[octicon-triangle-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-right.svg
[octicon-triangle-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-up.svg
[octicon-unfold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/unfold.svg
[octicon-unmute]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/unmute.svg
[octicon-unverified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/unverified.svg
[octicon-verified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/verified.svg
[octicon-versions]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/versions.svg
[octicon-watch]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/watch.svg
[octicon-x]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/x.svg
[toc]: #table-of-contents
