var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var claseA = /** @class */ (function () {
    function claseA(a) {
        this.a = a;
    }
    claseA.prototype.getA = function () {
        console.log(this.a);
    };
    return claseA;
}());
var claseB = /** @class */ (function (_super) {
    __extends(claseB, _super);
    function claseB(a, b) {
        var _this = _super.call(this, a) || this;
        _this.a = a;
        _this.b = b;
        return _this;
    }
    return claseB;
}(claseA));
var objB = new claseB(20, 40);
objB.getA();
