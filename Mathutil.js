
export const PI = Math.PI;

export function getCircumference(radius){
    return 2 * PI * radius;
}

export function getArea(radius){
    return PI * radius   * radius;
}

export function getVolume(radius){
    return (4/3) * PI * Math.pow(radius, 3);
}