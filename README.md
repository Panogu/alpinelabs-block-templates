# AlpineLabs Block Templates
WordPress create-block Templates for the AlpineLabs Gutenberg Blocks

To create a new Gutenberg Block, go to your WordPress plugin directory and use it as follows:

``npx @wordpress/create-block SLUG \ --template=PATH_TO_TEMPLATE``

Please note that for the ``alpinelabs-dynamic-block-template`` you need to move the created ``block.json`` file manually from ``src/block`` to ``src/block/SLUG`` after it has been created.
