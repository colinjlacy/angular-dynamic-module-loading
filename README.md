# ngrx-dynamic-view-model

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Concept

**Note that there is currently a bug with AOT, where a static function call is causing compilation errors on the first attempt at compilation when running Webpack-dev-server.  Modfying and saving any file, triggering a recompilation while the server is still running will result in a successful compilation.** 

In building enterprise apps, one of the things we often have to deal with is modular configurability.  That is, configuration of which feature-sets a user or a business has access to.  This can be decided by numerous factors - from the location of the user, to the certifications a user has, to the features a business has paid for, etc.  Ultimately when building a modular application, we have to first load up some configuration before we can determine what feature sets to show a user, especially in a multi-tennant setting.

This PoC attempts to do exactly that.  It fetches a configuration from a JSON file, and then maps that configuration to a route hierarchy.  The logic for which configuration is loaded is hard-coded to be determined by the port number that the app is served from within a local environment.  Apps served at `localhost:4200` will see the full route hierarchy, while apps served at `localhost:4201` will see a limited workflow.

To test, run `ng serve`.  This will serve the app at port `4200`, and will open the app to the `Genres` view.  Select a genre, and you'll see a list of bands.  Note that genres and bands are in two different modules.  The configuration served adds the `loadChildren` property to the genres router module, indicating which module to load next.

Now re-run the server at port `4201`, by running `ng serve --port 4201`.  This will serve the app in a limited workflow, thus only showing the `Bands` module at the root.

The key takeaway is that based on a configuration, not only can we set the entry point of the app, we can also set a workflow through the app.  In doing so, we can modify the context in which child modules operate by adding contextual data to their functionality.  
