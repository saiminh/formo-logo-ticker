import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	return (
		<div { ...useBlockProps({
      className: 'formo-logo-ticker',
      'data-scroll-speed': attributes.speed
    }) }>
      <InspectorControls>
        <PanelBody title={ __( 'Scroll Speed' ) }>
          <TextControl
            type='number'
            label={ __( 'From left to right (in seconds)' ) }
            value={ attributes.speed }
            onChange={ ( value ) => { setAttributes( { speed: value }) }} 
          />
        </PanelBody>
      </InspectorControls>
      <div className='formo-logo-ticker__logos'>
        <InnerBlocks
          template={[
            ['core/image', { className: 'formo-logo-ticker__logo' }],
            ['core/image', { className: 'formo-logo-ticker__logo' }],
            ['core/image', { className: 'formo-logo-ticker__logo' }]
          ]}
          allowedBlocks={['core/image']}
        />
      </div>
		</div>
	);
}
