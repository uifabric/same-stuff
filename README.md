# Convergence

We're tackling interop between Fabric, FastDNA, and Stardust.  The starting point being theming.  Initially, we'll share a React context Provider/Consumer and a converged theme interface.  We'd also like to share the lowest hanging fruit between these libraries, like utilities.

### Provider

All libraries have React components which compute runtime styles by accessing theme values from context. Publishing a single Provider context is the first step for all three libraries to share the same theme information.

Initially, this Provider will not have any information on its context value, just a shared channel.  All libraries will take a dependency on this Provider and integrate it into their current proprietary Provider/Consumer and theme system.

###  Theme Interface & Context Value

We will then start the process (which we worked on all last week and will continue next week) of converging theme schemas between the three libraries and creating a shared Provider context.  Example, all three libraries define colors in a certain way.  We are currently hashing out what needs to be done to create a central color schema that satisfies all three library needs.  The solution will be published on the shared Provider, integrated into all three libraries, and the proprietary color schemas removed.

In this way, we will iterate away from three individual proprietary Providers and theme schemas toward a single Provider and converged theme schema.

### Docs & POC

Before we actually publish the shared Provider and theme context and take dependencies on it, we will create a very minimal page proving that it the idea works.  We would like a single page with all three frameworks rendering on the page, ingesting the shared provider, and setting the root element's style (background, etc).

We do not yet have plans for extensive documentation or where that will live and how it will be organized.  Right now, we're still in "just prove it" mode with the shared theming idea.  I imagine this will naturally come to light as we make progress on this repo.  At some point, this repo will be moved to a more appropriate place or at least renamed.

###  Utilities

Many of our components can't be shared between libraries due to proprietary utilities.  Example, Stardust maintains a hard fork of Fabric's FocusZone almost entirely due to the fact that it uses several Fabric utilities that are duplicates of our own utilities.  These are things like event utilities, keyboard utilities, and more.

We want to extract these utilities from each library, converge, and take dependencies on the converged thing.  As we iterate these lower level pieces and patterns, more of our code using them will become compatible.

### Working Process

We need to setup a minimal monorepo to publish our converged packages.

**Owned by no one**

Ever member here is an Owner in the GitHub org.  This effort is not owned or lead by any one team or person.  It is a committee of three projects, Fabric, FastDNA, and Stardust.

**PR Approval**

PRs will be opened proposing convergence patterns for theming and utilities.  Lots of conversation and testing will take place.  A single member approval from each project is required to approve PRs and finalize decisions.  It is up to the individual projects (Fabric, FastDNA, and Stardust) to manage which of their members should have access here.
