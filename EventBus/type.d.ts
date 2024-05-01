export interface Registry {
  unregister: () => void;
}

export interface Callable {
  [key: string]: Function;
}

export interface Subscriber {
  [key: string]: Callable;
}

export interface IEventBus {
  emit<T>(event: string, arg?: T): void;
  on(event: string, callback: Function): Registry;
}
