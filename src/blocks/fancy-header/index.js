import { registerBlockType } from '@wordpress/blocks';
import { RichText, useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, ColorPalette } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import block from './block.json';
import "./main.css" 
// ########################################################################
registerBlockType(block.name, {
    edit({ attributes, setAttributes }) {
        const { content, underline_color } = attributes;
        const blockprops = useBlockProps()

        return (
            <>
                <InspectorControls >
                    <PanelBody title={__("title setting ", "custom-block")}>
                        <ColorPalette
                            colors={[
                                { name: 'Red', color: '#f87171' },
                                { name: 'Indigo', color: '#818cf8' }
                              ]}
                            value={underline_color}
                            onChange={newValal => setAttributes({ underline_color: newValal })}
                        />                    </PanelBody>
                    <PanelBody title={__("title setting ", "custom-block")}>
                        this is  a test
                    </PanelBody>
                    <PanelBody title={__("title setting ", "custom-block")}>
                        this is  a test
                    </PanelBody>
                </InspectorControls >
                <div {...blockprops}>
                    <RichText
                        allowedFormats={['core/bold', 'core/underline', 'core/link']}
                        className='fancy-header'
                        tagName='h2'
                        placeholder={__("Enter heading", "custom-block")}
                        value={content}
                        onChange={(newVal) => setAttributes({ content: newVal })}
                    />
                </div>
            </>

        );
    },
    // ########################################################################

    save({ attributes }) {
        const { content, underline_color } = attributes

        const blockprops = useBlockProps.save({
            className: "fancy-header",
            style: {
                'background-image': `
                  linear-gradient(transparent, transparent),
                  linear-gradient(${underline_color}, ${underline_color});
                `
              }
        })
        return (
            <div  {...blockprops}>
                <RichText.Content
                    tagName='h2'
                    value={content}
                />
            </div>);
    }
}); 
