# Web app boilerplate
Minimal boilerplate web app using Vue.js and .NET 5 packed in docker for the simple deployment.

# Develop

Clone the repo on your computer.

<code>git clone https://github.com/averkij/vue-dotnet-docker.git</code>

## Backend

To start the backend locally run the following command from the **./be/app** folder:

<code>dotnet watch run</code>

All packages will be restored and app will be running on 5000 and 5001 ports. Hot reloading is enabled. Test the API in your browser.

<code>https://localhost:5001/api/test</code>

## Frontend

Restore the packages with npm. Install Node.js from [here](https://nodejs.org/en/) if it does not installed yet. Then go to the **./fe** folder and run:

<code>npm install</code>

To start frontend locally run:

<code>npm run serve</code>

This command builds develop version and starts the app on <code>http://localhost:8080</code>. Hot reloading is enabled. Make sure that web app are using the correct backend address in **./fe/common/config.js**.

## Start developing

Now you can start developing your app.

### .NET 5
Add new API methods to your backend

[Create web APIs with ASP.NET Core](https://docs.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-5.0)

Inspect and document your API using Swagger which is already connected to the app:

<code>https://localhost:5001/swagger/index.html</code>

![swagger](/img/swagger.png)

### Vue.js

Building the neat UI is not very complicated with Vuetify library.

[Vuetify components](https://vuetifyjs.com/en/components/cards/)

App uses the Vuex library as a state management pattern.

[What is Vuex?](https://vuex.vuejs.org/)

Example of the UI ([source code](https://github.com/averkij/lingtrain-aligner)):

![](/img/lingtrain_aligner.png)

# Deploy

TBD