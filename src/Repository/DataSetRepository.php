<?php

namespace Dex\Repository;

use Dex\Model\Dataset;

class DataSetRepository {

    public static function getAll(): array
    {
        $datasets = Dataset::get();

        $data = [];

        foreach ($datasets as $key => $set) {
            array_push($data, [
                'Title' => $set->Title,
                'ID' => $set->ID,
            ]);
        }

        return $data;
    }

    public static function getAllTitles(): array {
        return Dataset::get()->column('Title');
    }

    public static function getOne(int $id): array
    {
        return Dataset::get()->filter('ID', $id)->toNestedArray();
    }

}
