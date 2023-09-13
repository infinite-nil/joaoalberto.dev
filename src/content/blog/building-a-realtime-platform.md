---
title: Building a realtime platform in public
date: 2023-09-12
---

In this series I'll build in public a platform to provide developers a set of tools to create amazing real-time experiences for their users.

## Context

A few months ago, I applied for a position at [Liveblocks](https://liveblocks.io/). The hiring process was amazing, and I had a lot of fun chatting with [Guillaume](https://twitter.com/guillaume_slls) and [Steven](https://twitter.com/stevenfabre). Unfortunately, I didn't get the job, but I completely understand the reason why: **I wasn't ready for the position**.

But I’m not the kind of people that give up on the first try. I still interested in work at Liveblocks so I started studying like crazy so on my next try I’ll have more chances.

However, instead of apllying again right now I’ll wait a bit more and use this time to [create my lucky](https://www.swyx.io/create-luck). How? I’ll build in public my own version of Liveblocks, at least the basic functionality.

## The stack

- Golang for the backend;
- Typescript for the front-end and clients;
- Redis for cache and some KV storage
- Kafka as message broker
- Render to deploy everything

## Starting the project

```bash
$ mkdir livefibra-server && cd livefibra-server
$ go mod init github.com/livefibra/livefibra-server
$ touch main.go
```

Now lets create a basic entry point to our application:

```go
package main

import "log"

func main() {
	log.Println("Main")
}
```

And then run:

```bash
$ go run main.go
> 2023/09/12 19:18:53 Main
```

Commit and push the code.

## Making the DX better

It’s really annoying to stop and run again the server everytime you made a change in the code, in the javascript land we have support for hot reload by default in pretty much all the tools we use, but Go does not come with this capability and we need to setup this manually.

Let’s do it using [Air](https://github.com/cosmtrek/air). Follow the install instructions and install the binary in your project, not globally.

Initiate the air config by running

```bash
$ ./bin/air init
```

This will create a config file and you can leave it as it is.

Now you can run:

```bash
$ ./bin/air .
```

And voilá!, your app is running with hot reloading capabillities.

## Starting the server

For this I’ll use the awesome framework called [Fiber](https://docs.gofiber.io/).

Run

```bash
$ go get github.com/gofiber/fiber/v2
```

Change the content of the main.go file to:

```go
// Define the package name
package main

// Import Fiber
import "github.com/gofiber/fiber/v2"

func main() {
    // Create a new Fiber app
    app := fiber.New()

    // Create an ednpoint handler
    app.Get("/", func(c *fiber.Ctx) error {
        // Return a string
        return c.SendString("Hello, World!")
    })

    // Listen on PORT 3000
    app.Listen(":3000")
}
```

Run:

```bash
$ ./bin/air .
```

Call the endpoint:

```bash
$ curl localhost:3000
> Hello, World!
```

Commit and push.

## This is the end of this chapter

Today we accomplished:

- Created the repository (https://github.com/livefibra/livefibra-server);
- Definition of our goals;
- Definition of our stack;
- Created the basic structure;
- Improved the DX
- Created our fist endpoint.

In the next chapter things will start to get more interesting, we are going to create our Websocket endpoint and allow users to connect to it and switch messages.

Thanks for reading and see you soon.