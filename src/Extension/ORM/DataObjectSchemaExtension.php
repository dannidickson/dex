<?php

namespace Dex\Extensions\ORM;

use SilverStripe\Core\Config\Configurable;
use SilverStripe\Core\Injector\Injectable;
use SilverStripe\ORM\DataObjectSchema;

class DexDataObjectSchema extends DataObjectSchema
{
    use Injectable;
    use Configurable;

    /**
     * The custom reporting tool should only expose Tables and Fields that we want to show.
     * Some internal DataObjects or even custom DataObjects developers have written might not need to be used in this reporting tool
     */
    public function getDexReportTables() {
        $allTables = $this->getTableNames();

        /**
         * Get the DexConfiguration::allowed_dataobjects
         */
        $tablesFormatted = [];

        foreach ($allTables as $className => $tableName) {
            array_push($tablesFormatted, [
                'ClassName' => $className,
                'Table' => $tableName
            ]);
        }

        return $tablesFormatted;
    }
}
