export type NameDecorator = (x: string) => string;
export function formatName(first: string, last: string, fn: NameDecorator = identity): string {
    return `${last}, ${first}`;
}

const identity: NameDecorator = (n) => n;
