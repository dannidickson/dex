<?php

namespace Dex\Model;

use Dex\Extensions\ORM\DexDataObjectSchema;
use Marcz\Federer\Forms\FederatedComponent;
use Marcz\Federer\Forms\FederatedFields;
use SilverStripe\Dev\Debug;
use SilverStripe\Forms\HiddenField;
use SilverStripe\ORM\DataObject;

class CustomReportDataObject extends DataObject
{
    private static array $db = [
        'Title' => 'Text',
        'ReportConfiguration' => 'Text',
    ];

    public function getCMSFields()
    {
        $fields = parent::getCMSFields();
        $tableNames = $this->getAllDataObjects();

        $fields->removeByName('Title');

        $fields->addFieldsToTab('Root.Main', [
            HiddenField::create('ReportTable'),
            HiddenField::create('ReportFields'),
            HiddenField::create('ReportLimit'),
            HiddenField::create('ReportGroupBy'),
            FederatedComponent::create('TableBuilder')
                ->setComponentName('Dex.TableBuilder')
                ->setComponentProps([
                    'tableTitle' => 'Build a new report',
                    'tables' => json_encode($tableNames),
                ]),
            FederatedComponent::create('TableGraph')
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

    public function onBeforeWrite(): void {
        $this->ReportConfiguration = $this->createConfigurationObject($this->record);
        parent::onBeforeWrite();
    }

    private function getAllDataObjects(): array
    {
        $schema = DexDataObjectSchema::create();
        return $schema->getDexReportTables();
    }

    private function createConfigurationObject(array $record): string {

        $configuration = [
            'Table' => $record['ReportTable'] ?? '',
            'Fields' => $record['ReportFields'] ?? '',
            'GroupBy' => $record['ReportGroupBy'] ?? '',
            'Limit' => $record['ReportLimit'] ?? '',
        ];

        return json_encode($configuration);
    }
}
