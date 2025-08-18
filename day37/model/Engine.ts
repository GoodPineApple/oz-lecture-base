enum EngineColor {
    RED = 'red',
    BLUE = 'blue',
    GREEN = 'green',
}

// 인터페이스 상속
interface IEngine {
    name: string;
    power?: number;
    fuel: string;
    color?: EngineColor;   // 'red' | 'blue' | 'green'
}

const engine = {
    name: 'engine',
    power: 100,
    fuel: 'gas',
    color: EngineColor.RED, // 'red'
}


interface ICarEngine extends IEngine {
    usage: 'car';
}

interface IBikeEngine extends IEngine {
    usage: 'bike';
}

interface IEngine {
    name: string;
    power?: number;
    fuel: string;
    color?: EngineColor;   // 'red' | 'blue' | 'green'
}

export interface IPublicEngine extends Omit<IEngine, 'color'> {}
const publicEngine: IPublicEngine = {
    name: 'public engine',
    power: 100,
    fuel: 'gas',
}

export interface IPrivateEngine extends Pick<IEngine, 'name' | 'power'> {}
const privateEngine: IPrivateEngine = {
    name: 'private engine',
    power: 100,
}

export type Engine = ICarEngine | IBikeEngine;


// number, string, boolean, null, undefined, symbol, bigint, array, object, function, class, interface, type, enum, namespace, module, etc.

type EngineType = {
    name: string;
    power?: number;
    fuel: string;
    color?: 'red' | 'blue' | 'green';
}

// type CarEngineType = EngineType & {
//     type: 'car';
// }

// type BikeEngineType = EngineType & {
//     type: 'bike';
// }



// interface ICarEngine {
//     name: string;
//     power?: number;
//     fuel: string;
//     color?: 'red' | 'blue' | 'green';
//     type: 'car';
// }

// interface IBikeEngine {
//     name: string;
//     power: number;
//     fuel: string;
//     color?: 'red' | 'blue' | 'green';
//     type: 'bike';
// }


