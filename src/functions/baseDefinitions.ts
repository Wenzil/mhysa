export interface ThroughOptions {
    objectMode?: boolean;
}

export interface TransformOptions {
    readableObjectMode?: boolean;
    writableObjectMode?: boolean;
}

export interface WithEncoding {
    encoding: string;
}

export enum SerializationFormats {
    utf8 = "utf8",
}

type JsonPrimitive = string | number | object;
export type JsonValue = JsonPrimitive | JsonPrimitive[];

export interface JsonParseOptions {
    pretty: boolean;
}
export enum FlushStrategy {
    rolling = "rolling",
    sliding = "sliding",
}

export type AccumulatorByIteratee<T> = (event: T, bufferChunk: T) => boolean;
