<?php

namespace dannidickson\prismatic\Forms;

use SilverStripe\Dev\Debug;
use SilverStripe\Forms\FormField;

class ReportTableBuilder extends FormField
{
    protected $schemaComponent = 'ReportTableBuilder';

    private array $tableNames = [];

    public function __construct(
        string $name,
        ?string $title = null
    ) {
        parent::__construct($name, $title);
        $this->addExtraClass('prismatic-rb-holder stacked');
    }

    public function setTableNames(array $tableNames): self
    {
        $this->tableNames = $tableNames;
        return $this;
    }

    public function getSchemaDataDefaults()
    {
        $schema = parent::getSchemaDataDefaults();

        $schema['data']['tableNames'] = $this->tableNames;

        return $schema;
    }

    // public function getSchemaData()
    // {
    //     $schema = parent::getSchemaData();
    //     $schema['tableTitle'] = $this->Title();
    //     // $schema['tableNames'] = json_encode($this->tableNames);
    //     return $schema;
    // }

    public function getAttributes(): array
    {
        $name = $this->getName();
        if ($this->isMultiple) {
            $name .= '[]';
        }

        // Debug::dump($this->getSchemaData()); exit;
        return array_merge(
            parent::getAttributes(),
            [
                'name' => $name,
                'data-schema' => json_encode($this->getSchemaData()),
            ]
        );
    }
}
