<?php

namespace dannidickson\prismatic\Admin;

use dannidickson\prismatic\Model\CustomReportDataObject;
use dannidickson\prismatic\Repository\DataSetRepository;
use dannidickson\prismatic\Forms\PrismaticReportField;
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
            PrismaticReportField::create('Dashboard')
                ->setComponentName('Dex.Dashboard')
                ->setComponentProps([
                    'CustomReports' => DataSetRepository::getAll(),
                ]),
        ]));

        return $form;
    }
}
