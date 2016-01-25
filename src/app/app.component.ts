/// <reference path="baidu.maps.d.ts" />
import {Component} from 'angular2/core';

interface Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'my-app',
    templateUrl: 'app/my-app.html',
})
export class AppComponent {
    public title = 'Tour of Heroes';
    public hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };

    constructor() {
        var map = new baidu.maps.BMap("mapContainer");
        var point = new baidu.maps.Point(116.404, 39.915);
        map.centerAndZoom(point, 15);
    }
}



/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */