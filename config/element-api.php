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
                  return [
                      'id' => $entry->id,
                      'title' => $entry->title,
                    //   'fullText' => $entry->fullText,
                    //   'headerImg' => str_replace("https", "http", $entry->bannerImage->one()->getUrl('headerImage')),
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