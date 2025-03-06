<?php

namespace Dex\Repository;

use Dex\Model\CustomReport;

class ReportRepository {

    /**
     *
     * @return DataList<CustomReport>
     */
    public static function getAll() {
        return CustomReport::get();
    }

}
