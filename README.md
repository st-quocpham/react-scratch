# Build a React App from scratch

create simple TODO React App from scratch

# Webpack version

At the monment, cannot using webpack-dev-server for Webpack 5 (conflict something due to Webpkack 5 have just been released few days ago - 12th Nov 20)

```
"webpack": "^4.44.2",
"webpack-cli": "^3.3.12",
"webpack-dev-server": "^3.11.0"
```

# Update Webpack 5 blog to upgrade loaders to Assets Modules

```
module.exports = {
	//...
	module: {
		rules: [
			//...Some rules
			{ test: /\.(png|svg|jpg|jpeg|gif)$/i, type: "asset/resource" },
			// new type : "asset/resource"
		]
	}
}
```
