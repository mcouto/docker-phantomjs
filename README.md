# Usage

Run with:

<code>
docker run --rm -v $(pwd):/data mcouto/phantomjs
</code>

The image will run the <code>"script.js"</code> file, and you can load/save from the current directory.

You can change script name using <code>PHANTOM_SCRIPT</code> environment variable.
