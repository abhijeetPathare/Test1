import { createLogger, transports, format } from 'winston';
import LokiTransport from 'winston-loki';
import { context, trace } from '@opentelemetry/api';

// Configure Winston Logger with Loki and file transports
const logFilePath = '/Users/abhi/opel/test.log';

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.json(),
        format((info) => {
            const span = trace.getSpan(context.active());
            if (span) {
                info.traceId = span.spanContext().traceId;
                info.spanId = span.spanContext().spanId;
            } else {
                info.traceId = 'no active trace';
                info.spanId = 'no active span';
            }
            return info;
        })()
    ),
    transports: [
        new transports.File({ filename: logFilePath }),
        new LokiTransport({
            host: 'http://192.168.103.109:3100',
            json: true,
        }),
        new transports.Console(),
    ],
});

export default logger;
