declare module baidu.maps {
    export class Map {
        constructor(mapDiv: string);
        centerAndZoom(point: Point, size: number);
    }

    export class Point {
        constructor(latitude: number, longitude :number);
    }
}