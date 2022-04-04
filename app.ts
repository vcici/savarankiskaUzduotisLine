class Point {
    constructor(private _pointX:number, private _pointY:number) {
    }
    get pointX() {
        return this._pointX;
    }
    get pointY() {
        return this._pointY;
    }
    set pointX(point) {
        this._pointX = point;
    }
    set pointY(point) {
        this._pointY = point;
    }
    distanceFromOrigin(point:Point) {
        return Math.sqrt(point.pointX ** 2 + point.pointY ** 2);
    }
    translate(dx:number, dy:number) {
        this._pointX += dx;
        this._pointY += dy;
    }
    toString() {
        return '[' + this._pointX + ',' + this._pointY + ']';
    }
    distance(p:Point) {
        return Math.sqrt((p.pointX - this._pointX) ** 2 + (p.pointY - this._pointY) ** 2);
    }
}

class Line {
    constructor(
        private _p1:Point,
        private _p2:Point
    ){}

    public get p1(){
        return this._p1;
    }
    public set p1(p1){
        this._p1= p1;
    }
    public get p2(){
        return this._p2;
    }
    public set p2(p2){
        this._p2= p2;
    }

    public toString(){
        return "p1 = [" + this._p1.pointX + ", " + this._p1.pointY + "], p2 = [" + this._p2.pointX + ", " + this._p2.pointY + "]";
    }
    public atstumas(){
        return this._p1.distance(this._p2);
    }
}

const taskas1 = new Point(1, 1);
const taskas2 = new Point(1, 2);

const linija = new Line(taskas1, taskas2);
console.log(linija.toString());
console.log(linija.atstumas());
