/// <reference path="./baidu.maps.d.ts" />

export class BaiduMap {

    constructor() {
        var map = new baidu.maps.Map("container");
        var point = new baidu.maps.Point(116.404, 39.915);
        map.centerAndZoom(point, 15);

        /*var map = new BMap.Map("container");          // 创建地图实例*/
        //var point = new BMap.Point(116.404, 39.915);  // 创建点坐标
        //map.centerAndZoom(point, 15);
    }
}