<?php

namespace Dex;

use SilverStripe\Core\Config\Configurable;
use SilverStripe\Core\Injector\Injectable;

class Configuration {
    use Injectable;
    use Configurable;

    // todo rename to allowed_dataobjects or something like that
    private array $allowed_classes = [];
}
