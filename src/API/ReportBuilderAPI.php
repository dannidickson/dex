<?php

namespace Dex\API;

use SilverStripe\Control\Controller;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Control\HTTPResponse;
use SilverStripe\Core\ClassInfo;
use SilverStripe\ORM\DataObjectSchema;
use SilverStripe\ORM\Queries\SQLSelect;

class ReportBuilderAPI extends Controller {

    private static array $allowed_actions = [
        'getFields',
        'tableData',
    ];

    public function getFields(HTTPRequest $request): HTTPResponse
    {

        $tableName = $request->getVar('tableName');

        if (!$tableName) {
            return HTTPResponse::create('No table can be found', 404);
        }

        // $fields = DB::field_list($tableName);
        $fields = DataObjectSchema::singleton()->fieldSpecs($tableName);

        return HTTPResponse::create()
            ->addHeader('Content-Type', 'application/json')
            ->setBody(json_encode($fields));
    }

    public function tableData(HTTPRequest $request): HTTPResponse
    {
        $body = json_decode($request->getBody());

        $tableData = [];

        if (!ClassInfo::exists($body->table)) {
            return HTTPResponse::create('No table can be found', 404);
        }

        // if ($body->useORM) {
        //     $dataset = DataObject::get($body->table)
        //     ->toNestedArray();

        //     foreach ($dataset as $key => $value) { }
        //     return HTTPResponse::create()
        //         ->addHeader('Content-Type', 'application/json')
        //         ->setBody(json_encode($tableData));
        // }

        $tableName = ClassInfo::shortName($body->table);

        $sqlQuery = new SQLSelect();
        $sqlQuery->setFrom($tableName);

        if (property_exists($body, 'groupBy')){
            $sqlQuery->setGroupBy($body->groupBy);

            // add the count to columns
            array_unshift($body->columns, 'Count(*)');
        }

        $sqlQuery->setSelect(implode(',', $body->columns));


        if (property_exists($body, 'limit')) {
            $sqlQuery->setLimit($body->limit);
        }

        // // Execute and return a Query object
        $result = $sqlQuery->execute();

        foreach ($result as $key => $value) {
            array_push($tableData, $value);
        }

        return HTTPResponse::create()
            ->addHeader('Content-Type', 'application/json')
            ->setBody(json_encode($tableData));
    }

}
