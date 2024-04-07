<?php

namespace Dex\Admin;

use Dex\Model\CustomReportDataObject;
use Marcz\Federer\Forms\FederatedComponent;
use SilverStripe\Admin\LeftAndMain;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\LiteralField;

class DexDashbardAdmin extends LeftAndMain
{
    private static string $menu_title = 'Dashboard';

    private static $menu_priority = 10;

    private static string $url_segment = 'dex-dashboards';

    public function getEditForm($id = null, $fields = null)
    {
        $form = parent::getEditForm($id, $fields);

        $form->setFields(FieldList::create([
            LiteralField::create('Test', 'Nothing to see here. <button>Want to create a new dashboard?</button>'),
            FederatedComponent::create('Dashboard')
                ->setComponentName('Dex.Dashboard')
                ->setComponentProps([
                    'CustomReports' => $this->getCustomReports(),
                ]),
        ]));

        return $form;
    }

    public function getCustomReports(): array
    {
        $data = [];
        $reports = CustomReportDataObject::get()->toNestedArray();

        foreach ($reports as $key => $value) {
            array_push($data, [
                'Title' => 'Report' ,
                'ID' => $value['ID'],
            ]);
        }

        return $data;
    }
}
