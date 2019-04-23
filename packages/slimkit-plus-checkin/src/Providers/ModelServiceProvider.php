<?php

declare(strict_types=1);

/*
 * +----------------------------------------------------------------------+
 * |                          ThinkSNS Plus                               |
 * +----------------------------------------------------------------------+
 * | Copyright (c) 2016-Present ZhiYiChuangXiang Technology Co., Ltd.     |
 * +----------------------------------------------------------------------+
 * | This source file is subject to enterprise private license, that is   |
 * | bundled with this package in the file LICENSE, and is available      |
 * | through the world-wide-web at the following url:                     |
 * | https://github.com/slimkit/plus/blob/master/LICENSE                  |
 * +----------------------------------------------------------------------+
 * | Author: Slim Kit Group <master@zhiyicx.com>                          |
 * | Homepage: www.thinksns.com                                           |
 * +----------------------------------------------------------------------+
 */

namespace SlimKit\PlusCheckIn\Providers;

use Zhiyi\Plus\Models\User;
use Illuminate\Support\ServiceProvider;
use SlimKit\PlusCheckIn\Models\CheckinLog;
use Illuminate\Database\Eloquent\Relations\Relation;

/**
 * @method hasMany(string $class, string $string, string $string1)
 */
class ModelServiceProvider extends ServiceProvider
{
    /**
     * Register the model service.
     *
     * @return void
     */
    public function register()
    {
        // Register morph map for polymorphic relations.
        $this->registerMorphMap();

        // Register user model macros tu the application.
        $this->registerUserMacros();
    }

    /**
     * Register user model macros tu the application.
     *
     * @return void
     */
    protected function registerUserMacros()
    {
        // User check-in logs.
        User::macro('checkinLogs', function () {
            return $this->hasMany(CheckinLog::class, 'user_id', 'id');
        });
    }

    /**
     * Register morph map for polymorphic relations.
     *
     * @return void
     */
    protected function registerMorphMap()
    {
        $this->morphMap([
            'checkin-logs' => CheckinLog::class,
        ]);
    }

    /**
     * Set or get the morph map for polymorphic relations.
     *
     * @param array|null $map
     * @param bool       $merge
     *
     * @return array
     */
    protected function morphMap(array $map = null, bool $merge = true)
    : array
    {
        return Relation::morphMap($map, $merge);
    }
}
