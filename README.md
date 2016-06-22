# A Simple Server

This is a simple node.js server that is able to take two types of requests: GET and POST.

The POST request allows the user to send up some data to the server and the server will append it to the file, `store.txt`.

The GET request allows the user to see what is inside the stored file, `store.txt`.

## Trying it out

You can try it out by first typing `npm start` in your terminal to run the server locally on `http://localhost:3000`.

1. If you make a GET request to `http://localhost:3000/get`, you will get the default empty data as a response:

```json
{"data":[]}
```

2. If you make a POST request with a payload (a key of "id" and a value of "1" in this example), it will respond saying that the request succeeded.

```
POST request successful
```

3. If you do another GET request, you'll see the following:

```json
{"data":[{"id":"1"}]}
```

4. If you do another POST request with {"id":"2"}, and then do another GET, you'll get this as a response:

```json
{"data":[{"id":"1"},{"id":"2"}]}
```

### Making POST requests with Postman

If you are using Postman, make sure to use the setting `x-www-form-encoded`. [Explanation](http://stackoverflow.com/questions/24543847/req-body-empty-on-posts)