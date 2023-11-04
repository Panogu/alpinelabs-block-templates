const { join } = require( 'path' );

const slug = 'alpinelabs-dynamic-block-template';

module.exports = {
    defaultValues: {
        npmDependencies: [
            '@10up/block-components'

        ],

        pluginURI: 'https://alpinelabs.ch',
        author: "AlpineLabs KlG (Adrian Pandjaitan)",
        license: 'MIT',
        licenseURI: 'https://opensource.org/licenses/MIT',
        domainPath: 'alps-lang',

        slug: slug,
        namespace: "alps",
        title: 'Dynamic Block Template',
        description: 'A dynamic block template by AlpineLabs.',
        dashicon: 'rest-api',
        version: '0.0.1',
        category: 'widgets',
        attributes: {
            blockMeta: {
                type: 'object',
                default: {},
            },
        },
        supports: {
            align: true,
            alignWide: true,
            color: {
                background: true,
                link: true,
                text: true,
            },
            dimensions: {
                minHeight: true 
            },
            shadow: true,
            spacing: {
                margin: true,
                padding: true,
            },
            typography: {
                fontSize: true,
                lineHeight: true,
            },

        },
        customBlockJSON: {
            usesContext: [ 'postId', 'postType' ],
        },
        render: 'file:./render.php',
        folderName: './src/blocks/',
    },
    pluginTemplatesPath: join( __dirname, 'templates' ),
    blockTemplatesPath: join( __dirname, 'templates', '/src/blocks/', slug ),
    assetsPath: join( __dirname, 'assets' ),
};
