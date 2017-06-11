# ngrx-dynamic-view-model

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Concept

One of the core beliefs of my architecture team at work is that most of the common functionality that builds out a view can be abstracted away, so that data fetching is no longer a concern for developers doing feature work.  This project acts as a PoC to prove out that concept, using [@ngrx/store](https://github.com/ngrx/store) to maintain and distribute application state for each view.  It will likely serve as an example for how we will continue  to work on our existing data resolution pipeline.
 
## Key features

First and foremost, the data resolution model identified here makes use of service abstraction to fetch data.  While the `DataService` in this application maintains a list of hard-coded JSON file paths, in a real world application this would map dependency data commands (e.g. `get-bands`) to backend services by fetching an API configuration mapping from a middleware reverse proxy.  That allows API endpoints to remain anonymous to the front-end code, while still creating a functional REST relationship between the front-end and backend services.  Totally freaking baller.

Each route defines the data it needs resolved, and in declaring its actions as values of data keys, it creates a dictionary object for the `ModelResolve` to populate.  For example, in the `band/:id/song/:songId` route, we have the following definition:
```
{
    band: 'get-band',
    song: 'get-song'
}
```
The `ModelResolve` will re-map those values into an object containing the same keys, with the values replaced as Observables that return data from the backend.  This is simulated using hard-coded JSON files served over HTTP.

Since each `view` (often referred to as Smart Components) receives its data from the `Store` and passes it down through the component tree, we can extract the boilerplate code that makes that work into a base class that each view can inherit from.  Hence the creation of the `BaseView`.  The `BaseView` handles subscribing to the `Store` in the `ngOnInit` hook, as well as un-subscribing as part of the `ngOnDestroy` lifecycle hook.  Devs can add functionality to the `ngOnInit` or `ngOnDestroy` hook using the `baseViewHooks` property.

By default, data is automatically removed from the `Store` or overwritten when a view is destroyed.  This is also handled by the `BaseView` in its `ngOnDestroy` hook.  This can be prevented by passing in an object to the `super` call when extending the `BaseView`.  The goal is to prevent the state from getting too bloated as the user navigates through the app.  

Alternatively, a dev could choose not to extend the `BaseView` when creating a view.  This would leave the subscribing, un-subscribing, and maintenance of the `Store` entirely up to them.  So long as `dependencies` are listed within a route declaration, and the `ModelResolve` is set on a `route.data` property, fetched data will automatically be added to the `Store` when a route is loaded. 

To that end, in theory, if a root view contained all of the data necessary to load an application, a dev could load it all into the `Store` at startup, and then ensure that it's maintained throughout the use of the app.  That's a bit extreme, but you get the idea.
