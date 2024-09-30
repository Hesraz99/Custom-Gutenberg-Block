<?php
/**
 * Plugin Name:       Custom Block
 * Description:       Create custom block.
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            Hesam Razmi
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       custom-block
 */

function create_blocks()
{
    $blocks = [
        [
            'name' => 'fancy-header'
        ],
        [
            'name' => 'search-form'
        ]
    ];

    foreach ($blocks as $block) {
        register_block_type(__DIR__ . '/build/blocks/' . $block['name']);
    }
}
add_action('init', 'create_blocks');