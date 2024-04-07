<?php

namespace Dex\Admin;

use Dex\Model\CustomReportDataObject;
use SilverStripe\Admin\LeftAndMain;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\GridField\GridFieldConfig_RecordEditor;
use SilverStripe\Forms\TextField;
use SilverStripe\ORM\ArrayList;
use SilverStripe\ORM\DataList;

class DecCustomReportAdmin extends LeftAndMain
{
    private static string $menu_title = 'Custom Reports';

    private static string $url_segment = 'dex-custom-reporting';

    public function getEditForm($id = null, $fields = null)
    {
        $form = parent::getEditForm($id, $fields);

        $form->setFields(FieldList::create([
            GridField::create(
                'Reports',
                'Reports',
                $this->getAllCustomReports(),
                GridFieldConfig_RecordEditor::create()
            )
        ]));

        return $form;
    }

    private function getAllCustomReports(): DataList
    {
        return CustomReportDataObject::get();
    }
}
