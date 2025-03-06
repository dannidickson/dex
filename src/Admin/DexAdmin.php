<?php

namespace Dex\Admin;

use Dex\Model\CustomReport;
use Dex\Model\CustomReportDataObject;
use Dex\Model\Dataset;
use Dex\Repository\DataSetRepository;
use Dex\Repository\ReportRepository;
use SilverStripe\Admin\LeftAndMain;
use SilverStripe\Admin\ModelAdmin;
use SilverStripe\Forms\FieldList;
use SilverStripe\Forms\Form;
use SilverStripe\Forms\GridField\GridField;
use SilverStripe\Forms\GridField\GridFieldConfig_RecordEditor;
use SilverStripe\Forms\Tab;
use SilverStripe\Forms\TabSet;
use SilverStripe\Forms\TextField;
use SilverStripe\ORM\ArrayList;
use SilverStripe\ORM\DataList;
use SilverStripe\Security\Security;


class DecCustomReportAdmin extends ModelAdmin
{

    private static string $menu_title = 'Custom Reports';

    private static string $url_segment = 'dex-custom-reporting';

    private static $managed_models = [
        'reports' => [
            'title' => 'Reports',
            'dataClass' => CustomReport::class
        ],
        'datasets' => [
            'title' => 'Data Sets',
            'dataClass' => Dataset::class
        ],
    ];
}
