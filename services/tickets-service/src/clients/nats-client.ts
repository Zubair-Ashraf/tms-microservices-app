import nats, { Stan } from 'node-nats-streaming';

interface NatsConnection {
  url: string;
  clientId: string;
  clusterId: string;
}

class NatsClient {
  private _client?: Stan;

  get client() {
    if (!this._client) {
      throw new Error("Can't access NATS client before connecting");
    }

    return this._client;
  }

  connect(params: NatsConnection) {
    this._client = nats.connect(params.clusterId, params.clientId, {
      url: params.url,
    });

    return new Promise<void>((resolve, reject) => {
      this._client!.on('connect', () => {
        resolve();
      });
      this._client!.on('error', (err) => {
        reject(err);
      });
    });
  }
}

export const natsClient = new NatsClient();
