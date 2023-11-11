export type Resolve<Value> = (value: Value | PromiseLike<Value>) => void;

export type Reject = (reason?: unknown) => void;