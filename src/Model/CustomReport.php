<?php

namespace dannidickson\prismatic\Model;

use dannidickson\prismatic\Extensions\ORM\DexDataObjectSchema;
use dannidickson\prismatic\Forms\PrismaticReportField;
use SilverStripe\Dev\Debug;
use SilverStripe\Forms\HiddenField;
use SilverStripe\Forms\TextField;
use SilverStripe\ORM\DataObject;
use dannidickson\prismatic\Model\Dataset;
use dannidickson\prismatic\Repository\DataSetRepository;
use SilverStripe\Forms\DropdownField;

class CustomReport extends DataObject
{
    private static string $table_name = 'CustomReport';
    private static array $db = [
        'Title' => 'Text',
    ];

    // private static array $has_many = [
    //     'DataSet' => Dataset::class,
    // ];

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();

        $fields->removeByName([
            'Title',
        ]);

        $fields->addFieldsToTab('Root.Main', [
            TextField::create('Title', 'Report title'),
            DropdownField::create('DropdownWidget', 'Add report widget', [
                'dataset' => 'Display table data',
                'bar-graph' => 'Bar graph',
                'line-graph' => 'Line graph'
            ]),

            DropdownField::create('title', 'List of all the datasets', DataSetRepository::getAllTitles()),

            PrismaticReportField::create('TableGraph')
                ->setComponentName('Dex.TableGraph')
                ->setComponentProps([
                    'graphTypes' => [
                        'list',
                        'bar',
                        'pie'
                    ]
                ]),
        ]);

        return $fields;
    }
}
