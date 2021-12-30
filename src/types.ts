export type ExternalAPIEventType = {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly eventType: string;
};

export type ExternalAPIEventTypes = ExternalAPIEventType[];
