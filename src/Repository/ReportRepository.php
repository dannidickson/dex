<?php

namespace dannidickson\prismatic\Repository;

use dannidickson\prismatic\Model\CustomReport;

class ReportRepository {

    /**
     *
     * @return DataList<CustomReport>
     */
    public static function getAll() {
        return CustomReport::get();
    }

}
