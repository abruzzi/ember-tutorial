ember starter-kit
===========

This is a simple project `forked` from ember home [starter-kit](http://www.emberjs.com)

To get started with this, simply do the following command:

```sh
gem install moko
mokoup generate
```

This will generate `products.json` in folder `resources`, and because `ember.js` requires named json, you should change the file to something like this:

```json
{
	"products": [
        {
            "id": 1,
            "title": "Kindle paperwhite"		
        },{
            "id": 2,
            "title": "iphone 6 plus"
        }
    ]
}
```

To start the server, run the command:

```sh
mokoup server
```

And then open the app in brower:

```
http://localhost:12306/index.html#/
```
