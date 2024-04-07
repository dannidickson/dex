<?php

namespace Dex\Model;

use Dex\Extensions\ORM\DexDataObjectSchema;
use Marcz\Federer\Forms\FederatedComponent;
use SilverStripe\Dev\Debug;
use SilverStripe\Forms\HiddenField;
use SilverStripe\Forms\TextField;
use SilverStripe\ORM\DataObject;

class Dataset extends DataObject
{

    private static array $db = [
        'Title' => 'Text',
        'ReportConfiguration' => 'Text',
    ];

    /**
     * CMS Fields
     * @return FieldList
     */
    public function getCMSFields()
    {
        $tableNames = $this->getAllDataObjects();

        $fields = parent::getCMSFields();
        $fields->addFieldsToTab('Root.Main', [
            TextField::create('Title', 'Data set title'),
            FederatedComponent::create('TableBuilder')
                ->setComponentName('Dex.TableBuilder')
                ->setComponentProps([
                    'tableTitle' => 'Build a new report',
                    'tables' => json_encode($tableNames),
                ]),
        ]);

        $fields->addFieldsToTab('Root.Main', [
            HiddenField::create('ReportTable'),
            HiddenField::create('ReportFields'),
            HiddenField::create('ReportLimit'),
            HiddenField::create('ReportGroupBy'),
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
