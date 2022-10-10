declare module 'lodash' {
    function multiply(firstNum: number, secondNum: number): number 

    function reverse<Type>(arr:Type[]): Type

    function dropRight(arr:(string | number)[], dropped: number): (string | number)[]
}
