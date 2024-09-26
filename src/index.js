import { registerBlockType } from '@wordpress/blocks';

registerBlockType('create-block/custom-block', {
    edit() {
        console.log('Block is being edited');
        return <p>Block is being edited</p>;
    },
    save() {
        return <p>Block is saved</p>;
    }
});

console.log('Block is here');