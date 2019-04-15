## What You Need
*   A hosted database - we recommend and are assuming a MongoDB from [mLab](https://mlab.com/) in this example. They have a free plan and provide a [migration guide](http://docs.mlab.com/migrating-from-parse/) for existing Parse users too.

## Step 1: Setup Parse Server
Start by [remixing this example app](https://glitch.com/edit/#!/remix/ParseServer/bd480ea2-8578-4c05-8924-41328b922d16), which implements Parse Server. Then, to get it up and running you have to set your app credentials in the `.env` file in your project. You need to set:

*   Your own value for `MASTER_KEY` - this is something you make up and will be used to authenticate with the Parse Server.
*   Specify your Mongo DB `DATABASE_URI` - this will have the format 'mongodb://yourusername:yourpassword@yourmlabdatabaseaddress.mlab.com:yourdatabaseport/yourdatabasename'

(Note that Parse Server also uses an `APP_ID` too, which has been set to 'myAppId' by default in the example project as it's used in the `test.html` file too - but you can change it if needs be) Then click 'Show'! You should see a notice confirming the server is running. If you go to /test (append '/test' to the URL in your browser), then you can go through some steps that confirm your Parse Server is working correctly and it's able to send and receive data correctly from your database. You'll also be able to see that data in your mLab database.

## (Optional) Step 2: Create a To-Do App
You could stop here - you have a working Parse Server, which is all you need to start using it as a backend for your app. However, to test out the server and show you how you could use it, we've provided an example project, [parse-todo](https://glitch.com/edit/#!/project/parse-todo), that implements Parse's [To-do sample app](https://parse.com/tutorials/todo-app-with-javascript). It's a front-end app that uses the JavaScript SDK to interact with your Parse Server backend. In your existing Parse Server project, in `.env`, add a new value for `JAVASCRIPT_KEY`. Like the master key, this will be used in your To-do app to authenticate with your Parse Server, but it's permissions are such that it's OK to be used publicly. Then [remix our example app](https://glitch.com/edit/#!/remix/ParseToDo/26e3250c-12a8-4f2b-b122-04b217da32cb), to get your own copy of the code. In `public/js/todos.js`, replace the entries for appID (by default 'myAppId' will be fine if you didn't change it above), javascriptKey and Parse serverURL with your own values. Then click 'Show'. You should be able to sign up and create a login, add to-do items and mark them off. If you look at your mLab database, the data will be updated there too.

## (Optional) Step 3: Setup Parse Dashboard
Lastly, you can also optionally set up your own Parse Dashboard, which you can use to manage your Parse apps. It provides a user-friendly interface to view and edit data, as well as run test commands etc. We've provided an example project, [parse-dashboard](https://glitch.com/edit/#!/project/parse-dashboard), that you can [remix](https://glitch.com/edit/#!/remix/ParseDashboard/7c96ce5b-c85b-41f9-b2fa-174f7d7475b8). As above, you just need to set values in the `.env` file, including:

*   A value for `MASTER_KEY` - this should match the `MASTER_KEY` you set in your Parse Server.
*   Make up a value for `APP_NAME` - This is a name for your app that is used on the dashboard.
*  Set the SERVER_URL. If it's on Glitch too it'll have the format: https://project-name.glitch.me/parse
*   USER_NAME and PASSWORD - Specify a username/password you'll use to log in to the dashboard.

Then click 'Show'! You'll be prompted to log in. Use the username and password you just set and you'll be able to manage your Parse apps.

That's it. You've now got a Parse Server running, which can handle the backend for your app. You may also have a To-do app and Parse Dashboard running too.

## Getting Help
To begin working on your own Parse apps, check out their [SDKs and Libraries](https://parseplatform.github.io/). You can see other example projects on our [Community Projects](https://glitch.com/) page. And if you get stuck, let us know on the [forum](http://support.glitch.com/) and we can help you out.