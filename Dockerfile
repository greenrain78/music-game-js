FROM node:14-alpine

RUN apk update && apk add bash

WORKDIR /app/vite-project

CMD ["sh", "/app/entrypoint.sh"]
# CMD ["sh", "/app/dev_command/run_forever.sh"]


expose 3000