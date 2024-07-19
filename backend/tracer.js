// tracing.js

'use strict';

import { NodeSDK } from '@opentelemetry/sdk-node';
import { getNodeAutoInstrumentations } from '@opentelemetry/auto-instrumentations-node';
import { ConsoleSpanExporter, SimpleSpanProcessor } from '@opentelemetry/tracing';
import { ZipkinExporter } from '@opentelemetry/exporter-zipkin';
import { Resource } from '@opentelemetry/resources';
import { SemanticResourceAttributes } from '@opentelemetry/semantic-conventions';

const exporter = new ZipkinExporter({
    url: 'http://localhost:9411/api/v2/spans',
    serviceName: 'restaurant-api',
});

const sdk = new NodeSDK({
    traceExporter: exporter,
    instrumentations: [
        getNodeAutoInstrumentations(),
    ],
});

sdk.start();

export default sdk;
