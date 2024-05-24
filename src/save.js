import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save({attributes}) {
	return (
		<div { ...useBlockProps.save({
      className: 'formo-logo-ticker',
      'data-scroll-speed': attributes.speed
    }) }>
      <div className='formo-logo-ticker__logos'>
        <InnerBlocks.Content />
      </div>
		</div>
	);
}
