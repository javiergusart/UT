----------------------------------
Steps to launch json server
----------------------------------

1. Install JSON Server globally
``````````````````````````````````````
In your terminal or command prompt, run:

______________________________
npm install -g json-server
______________________________


This makes json-server available from anywhere on your system.


2. Naviagte the terminal path to JSON folder.
``````````````````````````````````````````````
Execute the below command to start JSON server.
______________________________
json-server --watch data.json
______________________________

You will see links to objects in the JSON file as below.
Copy any of the links below and paste it in the url of a web page.
Now the server is up and running just like any other link on the Web (Internet).
The server is launched in default port 3000.

Output in terminal
---------------------------------
http://localhost:3000/products
http://localhost:3000/categories
http://localhost:3000/orders

To launch server in different port you can execute the command below.
_________________________________________
json-server --watch data.json --port 3001
_________________________________________


4. Stop the Server
--------------------------------
Place the cursor in the terminal and press Ctrl + C to stop the server.


Repeat from Step 2 to launch json-server anytime.

----------------------------------------------
Execute the application
----------------------------------------------
You can execute the index.html file from html folder with the help of live-server as always.
