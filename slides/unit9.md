class: center, middle

# Unit 9
## Working with APIs

---
class: left

# What is an API? ~

### APIs, or **Application Programming Interfaces**, allow software, apps, and websites to interact with and share data with an external resource or server.

???

* [Introduction to Web APIs](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
* [An Introduction to APIs](https://zapier.com/learn/apis/)

---
class: left

# APIs in Client-Side JavaScript

There are _tons_ of APIs that are accessible via client-side JavaScript. They generally fall into two categories:

**1) Browser APIs** are built into your web browser and are able to expose data from the browser and surrounding computer environment and do useful complex things with it.

**2) 3rd Party APIs** are not built into the browser by default, and you generally have to retrieve their code and information from somewhere on the Web.

<img src="https://mdn.mozillademos.org/files/13508/browser.png "browser vs. third party apis"" alt="browser vs. third party apis" width="45%">

---
class: left

# AJAX and XHR ~

> AJAX stands for <span>Asynchronous JavaScript And XML</span>. In a nutshell, it is the use of the `XMLHttpRequest` object to communicate with servers. It can send and receive information in various formats, including JSON, XML, HTML, and text files. AJAX’s most appealing characteristic is its “asynchronous” nature, which means it can communicate with the server, exchange data, and update the page without having to refresh the page.

<cite>-- Mozilla Developer Network</cite>

???

* [What's AJAX](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)

---
class: left

# AJAX and XHR (cont.)

AJAX is the primary way for us to get and send data to APIs. We do this using JavaScript's built-in `XMLHttpRequest` object, which is often referred to as **XHR**.

XHR is used to make **HTTP requests** to an API endpoint in order to accomplish one of these commonly used post types:

`GET` - Asks the server to retrieve a resource  
`POST` - Asks the server to create a new resource  
`PUT` - Asks the server to edit/update an existing resource  
`DELETE` - Asks the server to delete a resource

<img src="https://images.zapier.com/storage/photos/9ec65c79de8ae54080c1b417540469a6.png?format=jpg" alt="client server request response" width="50%">

---
class: left

# Anatomy of an XHR Request

```javascript
// Set up our HTTP request
var xhr = new XMLHttpRequest();

// Setup our listener to process request state changes
xhr.onreadystatechange = function() {
	// Only run if the request is complete
	if (xhr.readyState !== 4) return;
	// Process our return data
	if (xhr.status >= 200 && xhr.status < 300) {
		// This will run when the request is successful
		console.log('success!', xhr);
	} else {
		// This will run when it's not
		console.log('The request failed!');
	}

};
```

---
class: left

# Anatomy of an XHR Request (cont.) ~

```javascript
// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
xhr.send();
```

???

* [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
* [HTTP Response Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
* [readyState Codes](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState)
