# Group signup manager 

## Instruction

### Database Initialization:
To start the application first of all you'll need to make sure you have Mysql Instaled in your local machine. Then create a local database, the actual set up is made for a db named <code>discountgroupApp</code>, but if you want to make it with other name make sure tu change the name in the <code>./config/config.json</code> file under the property <code>database</code>.

Second in the same file <code>./config/config.json</code> you'll need to change the credentials so your local machine has access to the database in this case the properties are <code>username</code> and <code>password</code>. The values that you'll find in the file are the default values for mysql.

### Server Dependencies
All the server dependencies are listed in the package.json, run the command <code>npm install</code> so all the dependencies are installed. 

Once the process is finished the frontend has to be built so the server can be started, execute the command <code>npm run start</code>. This command will go to the client folder, execute <code>npm install</code> to install the frontend dependencies and then <code>npm run build</code> to create the 'dist' folder inside the client. At the end this script should also execute <code>npm run dev</code> in the server folder to start the application.

If something goes wrong the manuales steps are:
<li> In the <code>./client</code> folder run <code>npm install</code>.</li>
<li> In the <code>./client</code> folder run <code>npm run build</code>.</li>
<li> In the <code>root</code> folder run <code>npm run dev</code>.</li>

### APP 
The app will be started in the port 8000. In the base '/' route the app will show the 'Group Discount Manager' page, in which the users are able to create new 'Group Discount', this form will check that the fields are filled correctly. In this same page all the created 'Group Discount' will be shown individualy with the status information for each of them.

In a 'Group Discount' row there will a 'View' button that will lead to the link of the 'Group Discount', this will also be the same link that will be sent to the user once he has subscribed to the 'Group Discount' or someone has done it for him. The second button is 'Send Code'. This option will close the 'Group Discount', generate the discount code and send an email to all the users in the group.

The subscribe page will show the general information of the discount group, like the closing date, the total users that have been registered and the discount the actual group has. It also has a form to add the email and name of the users. If the discount group has been already closed, the user won't be able to submit their mail and name.

The app mocks up two services, the mail distribution and the code generator. For the mail distribution it has its on folder that are basically the mail templates that are supposed to be sent to the users. The code generator is also a mock up of what a store code would generate in case the group is closed. This information is displayed in the server console when the mail is supposed to be sent.  