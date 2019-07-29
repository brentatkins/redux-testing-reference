# Redux Testing Reference

A reference for testing Redux based projects. I know, I know, it's 2019 and Redux has long been toppled from it's spot on the state-management throne, however, given that we use quite a bit of Redux at Redington, this may be useful.

## Overview

The standard approach to testing Redux is to write indepent tests for actions and reducers. The action tests are not very useful since actions don't often contain much logic. The reducers contain a significant amount of domain logic, however, I have found testing thes in isolation end up being quite spefic and tied to the implementation and shape of the reducer state.

An alternative approach is to write more of an integration style test for redux. This involves creating a store, dispatching actions to it, and validating that the store has the correct state. This is very similar to how a React component might interact with redux. A connected component would read data from state, and dispatch actions to the store.

