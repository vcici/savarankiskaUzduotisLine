"use strict";
class Point {
    constructor(_pointX, _pointY) {
        this._pointX = _pointX;
        this._pointY = _pointY;
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
    distanceFromOrigin(point) {
        return Math.sqrt(point.pointX ** 2 + point.pointY ** 2);
    }
    translate(dx, dy) {
        this._pointX += dx;
        this._pointY += dy;
    }
    toString() {
        return '[' + this._pointX + ',' + this._pointY + ']';
    }
    distance(p) {
        return Math.sqrt((p.pointX - this._pointX) ** 2 + (p.pointY - this._pointY) ** 2);
    }
}
class Line {
    constructor(_p1, _p2) {
        this._p1 = _p1;
        this._p2 = _p2;
    }
    get p1() {
        return this._p1;
    }
    set p1(p1) {
        this._p1 = p1;
    }
    get p2() {
        return this._p2;
    }
    set p2(p2) {
        this._p2 = p2;
    }
    toString() {
        return "p1 = [" + this._p1.pointX + ", " + this._p1.pointY + "], p2 = [" + this._p2.pointX + ", " + this._p2.pointY + "]";
    }
    atstumas() {
        return this._p1.distance(this._p2);
    }
}
const taskas1 = new Point(1, 1);
const taskas2 = new Point(1, 2);
const linija = new Line(taskas1, taskas2);
console.log(linija.toString());
console.log(linija.atstumas());
