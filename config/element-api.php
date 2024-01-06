<?php

use craft\elements\Entry;
use craft\elements\Asset;
use craft\helpers\UrlHelper;

return [
    'endpoints' => [
        '/api/catalog' => function() {
            return [
                'elementType' => Entry::class,
                'criteria' => ['section' => 'catalog'],
                'cache' => false,
                'serializer' => 'jsonFeed',
                'transformer' => function(Entry $entry) {
                    return [
                        'id' => $entry->id,
                        'title' => $entry->title,
                        'price' => $entry->price,
                        // 'fullColor' => $entry->fullColor,
                        'productImg' => str_replace("https", "http", $entry->productImage->one()->getUrl('')),
                    ];
                },
            ];
        },
        '/api/catalog/<entryId:\d+>' => function($entryId) {
            return [
                'elementType' => Entry::class,
                'criteria' => ['id' => $entryId],
                'one' => true,
                'cache' => false,
                'serializer' => 'jsonFeed',
                'transformer' => function(Entry $entry) {
                    $sizes = [];
                    foreach ($entry->sizes->all() as $size) {
                        $sizes[] = $size->title;
                    }

                  return [
                    'id' => $entry->id,
                    'title' => $entry->title,
                    'price' => $entry->price,
                    'fullColor' => $entry->fullColor,
                    'productDescription' => $entry->productDescription,
                    'sizes' => $sizes, // Include the actual sizes
                    'productImg' => str_replace("https", "http", $entry->productImage->one()->getUrl('')),
                  ];
              },
            ];
        },
        '/api/header' => function() {
            return [
                'elementType' => Entry::class,
                'criteria' => ['section' => 'header'],
                'cache' => false,
                'serializer' => 'jsonFeed',
                'transformer' => function(Entry $entry) {
                    return [
                        'logo' => str_replace("https", "http", $entry->logo->one()->getUrl('')),
                        // 'id' => $entry->id,
                        // 'title' => $entry->title,
                        // 'intro' => $entry->introText,
                        // 'bannerImg' => str_replace("https", "http", $entry->bannerImage->one()->getUrl('bannerImage')),
                        // 'thumbImg' => str_replace("https", "http", $entry->bannerImage->one()->getUrl('thumbnailImage')),
                    ];
                },
            ];
        },
    ]
];