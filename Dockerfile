FROM node:14-alpine

RUN apk update && apk add bash

WORKDIR /app/vite-project

CMD ["sh", "/app/entrypoint.sh"]
# CMD ["bash"]

expose 3000