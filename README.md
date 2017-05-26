# Usage

Run with:

```
docker run --rm -v $(pwd):/data mcoutobr/docker-phantomjs
```

The image will run the `"script.js"` file, and you can load/save from the current directory.

You can change script name using `PHANTOM_SCRIPT` environment variable.
