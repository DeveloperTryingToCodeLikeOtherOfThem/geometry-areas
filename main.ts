enum AreaShape {
    //% block="square %side"
    Square,
    //% block="circle %radius"
    Circle,
    //% block="triangle %base %height"
    Triangle
}

namespace Math {
 //% block="area of %shape"
 export function area(shape: AreaShape, side?: number, radius?: number, base?: number, height?: number): number {
    switch (shape) {
        case AreaShape.Square: return (side || 0) * (side || 0);
        case AreaShape.Circle: return Math.PI * (radius || 0) * (radius || 0);
        case AreaShape.Triangle: return 0.5 * (base || 0) * (height || 0);
    }
    return 0;
 }
}